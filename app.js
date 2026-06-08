const WORDS = [
  {
    text: "anchor",
    phonetic: "/ˈæŋ.kər/",
    meaning: "锚；支撑点",
    example: "A morning routine can anchor your whole day.",
    exampleCn: "一个晨间习惯可以稳住你一整天的节奏。",
  },
  {
    text: "brisk",
    phonetic: "/brɪsk/",
    meaning: "轻快的；清新的",
    example: "She took a brisk walk before the meeting.",
    exampleCn: "开会前她轻快地散了会儿步。",
  },
  {
    text: "candid",
    phonetic: "/ˈkæn.dɪd/",
    meaning: "坦率的",
    example: "His candid answer made the room quiet.",
    exampleCn: "他坦率的回答让房间安静下来。",
  },
  {
    text: "dwell",
    phonetic: "/dwel/",
    meaning: "居住；细想",
    example: "Do not dwell too long on one mistake.",
    exampleCn: "不要在一个错误上纠结太久。",
  },
  {
    text: "evoke",
    phonetic: "/ɪˈvoʊk/",
    meaning: "唤起；引发",
    example: "The song can evoke memories of summer.",
    exampleCn: "这首歌会唤起夏天的回忆。",
  },
  {
    text: "fringe",
    phonetic: "/frɪndʒ/",
    meaning: "边缘；外围",
    example: "The cafe sits on the fringe of the old town.",
    exampleCn: "这家咖啡馆在老城区边缘。",
  },
  {
    text: "grit",
    phonetic: "/ɡrɪt/",
    meaning: "毅力；砂砾",
    example: "It takes grit to keep practicing every day.",
    exampleCn: "每天坚持练习需要毅力。",
  },
  {
    text: "hollow",
    phonetic: "/ˈhɑː.loʊ/",
    meaning: "空的；空洞的",
    example: "The old tree was hollow inside.",
    exampleCn: "那棵老树里面是空的。",
  },
  {
    text: "ignite",
    phonetic: "/ɪɡˈnaɪt/",
    meaning: "点燃；激起",
    example: "One question can ignite a new idea.",
    exampleCn: "一个问题可能点燃一个新想法。",
  },
  {
    text: "jolt",
    phonetic: "/dʒoʊlt/",
    meaning: "震动；震惊",
    example: "The sudden noise gave me a jolt.",
    exampleCn: "突然的噪音让我猛地一惊。",
  },
];

const REVIEW_WORDS = [
  {
    text: "linger",
    phonetic: "/ˈlɪŋ.ɡər/",
    meaning: "逗留；缓慢消失",
    example: "The smell of coffee lingered in the room.",
    exampleCn: "咖啡的味道在房间里久久不散。",
  },
  {
    text: "kinship",
    phonetic: "/ˈkɪn.ʃɪp/",
    meaning: "亲近感；亲属关系",
    example: "They felt a quiet kinship after the trip.",
    exampleCn: "旅行之后，他们有了一种安静的亲近感。",
  },
];

const SETTINGS = {
  poolCap: 4,
  intervals: [2, 4, 7],
  fallback: 1,
  roundSize: 5,
};

const state = {
  mode: "learn",
  p: 0,
  active: [],
  queue: [],
  graduated: [],
  reviewQueue: [],
  current: null,
  learnedCount: 0,
  cookies: 0,
  cardId: 0,
  locked: false,
  advanceTimer: null,
  touchStartY: 0,
};

const feed = document.querySelector("#feed");
const learnTab = document.querySelector("#learnTab");
const reviewTab = document.querySelector("#reviewTab");
const cookieCount = document.querySelector("#cookieCount");
const roundProgress = document.querySelector("#roundProgress");

function createWord(raw, index, source = "learn") {
  return {
    ...raw,
    id: `${source}-${raw.text}-${index}`,
    stage: 0,
    due: 0,
    correct: 0,
    wrong: 0,
    skipped: false,
    reviewed: false,
  };
}

function reset() {
  state.p = 0;
  state.active = [];
  state.queue = WORDS.map((word, index) => createWord(word, index));
  state.graduated = [];
  state.reviewQueue = REVIEW_WORDS.map((word, index) => createWord(word, index, "review"));
  state.current = null;
  state.learnedCount = 0;
  state.cookies = 0;
  state.cardId = 0;
  state.locked = false;
  window.clearTimeout(state.advanceTimer);
  feed.innerHTML = "";
  updateGoal();
  showNext();
}

function setMode(mode) {
  if (state.mode === mode) return;
  state.mode = mode;
  learnTab.classList.toggle("active", mode === "learn");
  reviewTab.classList.toggle("active", mode === "review");
  feed.innerHTML = "";
  state.current = null;
  state.locked = false;
  showNext();
}

function showNext() {
  feed.classList.remove("locked");
  state.locked = false;
  if (state.mode === "review") {
    showReview();
    return;
  }
  showLearn();
}

function showLearn() {
  const dueWords = state.active.filter((word) => word.due <= state.p);
  if (dueWords.length) {
    showQuiz(pickMostUrgent(dueWords), "learn");
    return;
  }

  if (state.active.length < SETTINGS.poolCap && state.queue.length) {
    const word = state.queue.shift();
    word.due = state.p + SETTINGS.intervals[0];
    state.active.push(word);
    markIntroduced(word);
    showExposure(word, "首次曝光");
    return;
  }

  if (state.active.length) {
    state.p = Math.min(...state.active.map((word) => word.due));
    showLearn();
    return;
  }

  appendDoneCard("新学完成", "本轮新词都已进入隔天复习。");
}

function showReview() {
  const word = state.reviewQueue.find((item) => !item.reviewed);
  if (!word) {
    appendDoneCard("复习完成", "今天到期的隔天复习题已经做完。");
    return;
  }
  showQuiz(word, "review");
}

function pickMostUrgent(words) {
  return [...words].sort((a, b) => {
    if (a.due !== b.due) return a.due - b.due;
    if (a.stage !== b.stage) return a.stage - b.stage;
    return b.wrong - a.wrong;
  })[0];
}

function showExposure(word, label) {
  state.current = { type: "exposure", word };
  const card = createCard("exposure");
  card.innerHTML = `
    <div class="card-top">
      <span class="pill">${label}</span>
      <span class="pill">stage ${word.stage}</span>
    </div>
    <div class="slash-zone">
      <button class="slash-btn" type="button" aria-label="斩掉这个词">斩</button>
    </div>
    <div class="content">
      <div class="word-line">
        <h1 class="word">${word.text}</h1>
        <button class="sound-btn" type="button" aria-label="播放发音">▶</button>
      </div>
      <div class="phonetic">${word.phonetic}</div>
      <div class="meaning">${word.meaning}</div>
      <p class="example">${word.example}<br>${word.exampleCn}</p>
      <div class="hint">上滑继续</div>
    </div>
  `;
  appendCard(card);
  card.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    handleManualAdvance();
  });
  card.querySelector(".sound-btn").addEventListener("click", () => speak(word.text));
  card.querySelector(".slash-btn").addEventListener("click", () => slashWord(word));
}

function showQuiz(word, mode) {
  state.current = { type: "quiz", word, mode, answered: false };
  state.locked = true;
  feed.classList.add("locked");

  const options = buildOptions(word);
  const card = createCard("quiz");
  card.innerHTML = `
    <div class="card-top">
      <span class="pill">${mode === "review" ? "隔天复习" : "抽背"}</span>
      <span class="pill">单选题</span>
    </div>
    <div class="content">
      <p class="quiz-title">看英文选中文</p>
      <div class="word-line">
        <h1 class="word">${word.text}</h1>
        <button class="sound-btn" type="button" aria-label="播放发音">▶</button>
      </div>
      <div class="phonetic">${word.phonetic}</div>
      <div class="options">
        ${options.map((option) => `<button class="option" type="button">${option}</button>`).join("")}
      </div>
      <div class="hint">完成后 2 秒自动继续</div>
    </div>
  `;
  appendCard(card);
  card.querySelector(".sound-btn").addEventListener("click", () => speak(word.text));
  card.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button, card, word, mode));
  });
}

function buildOptions(word) {
  const pool = [...WORDS, ...REVIEW_WORDS]
    .filter((item) => item.meaning !== word.meaning)
    .map((item) => item.meaning);
  const shuffled = shuffle(pool).slice(0, 3);
  return shuffle([word.meaning, ...shuffled]);
}

function answerQuiz(button, card, word, mode) {
  if (!state.current || state.current.answered) return;
  state.current.answered = true;

  const isCorrect = button.textContent === word.meaning;
  card.querySelectorAll(".option").forEach((option) => {
    option.disabled = true;
    if (option.textContent === word.meaning) option.classList.add("correct-answer");
  });
  if (!isCorrect) button.classList.add("wrong-answer");

  const record = document.createElement("div");
  record.className = "record";
  record.innerHTML = isCorrect
    ? `<strong>答对了</strong><br>${word.text}：${word.meaning}`
    : `<strong>答错了</strong><br>你的选择：${button.textContent}<br>正确答案：${word.meaning}`;
  card.querySelector(".content").append(record);

  if (mode === "review") {
    word.reviewed = true;
    word.correct += isCorrect ? 1 : 0;
    word.wrong += isCorrect ? 0 : 1;
  } else {
    updateLearnStage(word, isCorrect);
  }

  updateGoal();
  state.locked = false;
  feed.classList.remove("locked");
  state.advanceTimer = window.setTimeout(() => {
    state.p += 1;
    if (mode === "learn" && !isCorrect) {
      showExposure(word, "重新曝光");
    } else {
      showNext();
    }
  }, 2000);
}

function updateLearnStage(word, isCorrect) {
  if (isCorrect) {
    word.correct += 1;
    word.stage += 1;
    if (word.stage >= SETTINGS.intervals.length) {
      graduate(word);
    } else {
      word.due = state.p + SETTINGS.intervals[word.stage];
    }
    return;
  }

  word.wrong += 1;
  word.stage = Math.max(0, word.stage - SETTINGS.fallback);
  word.due = state.p + SETTINGS.intervals[word.stage];
}

function graduate(word) {
  state.active = state.active.filter((item) => item.id !== word.id);
  state.graduated.push(word);
  state.reviewQueue.push({ ...word, reviewed: false });
}

function slashWord(word) {
  word.skipped = true;
  state.active = state.active.filter((item) => item.id !== word.id);
  updateGoal();
  const record = document.createElement("div");
  record.className = "record";
  record.innerHTML = `<strong>已斩</strong><br>${word.text} 不再进入本轮学习。`;
  const card = feed.lastElementChild;
  card.querySelector(".content").append(record);
  state.p += 1;
  window.setTimeout(showNext, 450);
}

function markIntroduced(word) {
  if (word.introduced) return;
  word.introduced = true;
  state.learnedCount += 1;
  if (state.learnedCount % SETTINGS.roundSize === 0) {
    state.cookies += 1;
  }
  updateGoal();
}

function createCard(type) {
  const card = document.createElement("article");
  card.className = `card ${type}-card`;
  card.dataset.cardId = String(state.cardId++);
  return card;
}

function appendCard(card) {
  feed.append(card);
  window.requestAnimationFrame(() => {
    card.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function appendDoneCard(title, detail) {
  state.current = { type: "done" };
  const card = createCard("done");
  card.innerHTML = `
    <div class="content">
      <h1 class="word">${title}</h1>
      <p class="example">${detail}</p>
      <button class="option" type="button">重新开始</button>
    </div>
  `;
  appendCard(card);
  card.querySelector("button").addEventListener("click", reset);
}

function updateGoal() {
  cookieCount.textContent = `累计 ${state.cookies}`;
  roundProgress.textContent = `${state.learnedCount % SETTINGS.roundSize}/${SETTINGS.roundSize}`;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function handleManualAdvance() {
  if (state.locked || state.current?.type !== "exposure") return;
  state.current = null;
  state.p += 1;
  showNext();
}

feed.addEventListener("wheel", (event) => {
  if (event.deltaY > 30) handleManualAdvance();
});

feed.addEventListener("touchstart", (event) => {
  state.touchStartY = event.touches[0].clientY;
});

feed.addEventListener("touchend", (event) => {
  const delta = state.touchStartY - event.changedTouches[0].clientY;
  if (delta > 42) handleManualAdvance();
});

learnTab.addEventListener("click", () => setMode("learn"));
reviewTab.addEventListener("click", () => setMode("review"));

reset();
