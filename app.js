const GROUP_SIZE = 10;

const LEARN_RECALL_PLAN = [
  [0, 1],
  [2, 3, 0, 1],
  [4, 5, 2, 3],
  [6, 7, 4, 5, 0, 1],
  [8, 9, 6, 7, 2, 3, 4, 5, 8, 9, 6, 7, 8, 9],
];

const WORDS = [
  {
    text: "bosque",
    phonetic: "/ˈbos.ke/",
    meaning: "名词   森林",
    option: "n. 森林；林地",
    example: "El bosque parece infinito desde aquí.",
    exampleCn: "站在这里森林仿佛无边无际。",
    bg: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "revolutionary",
    phonetic: "/ˌrev.əˈluː.ʃən.er.i/",
    meaning: "adj. 革命的；突破性的",
    option: "adj. 革命的；革命性的，突破性的",
    example: "The idea felt revolutionary at the time.",
    exampleCn: "这个想法在当时显得很有突破性。",
    bg: "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "anchor",
    phonetic: "/ˈæŋ.kər/",
    meaning: "n. 锚；支撑点",
    option: "n. 锚；支撑点；vt. 固定",
    example: "A morning routine can anchor your whole day.",
    exampleCn: "一个晨间习惯可以稳住你一整天的节奏。",
    bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "brisk",
    phonetic: "/brɪsk/",
    meaning: "adj. 轻快的；清新的",
    option: "adj. 轻快的；清新的；兴旺的",
    example: "She took a brisk walk before the meeting.",
    exampleCn: "开会前她轻快地散了会儿步。",
    bg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "candid",
    phonetic: "/ˈkæn.dɪd/",
    meaning: "adj. 坦率的",
    option: "adj. 坦率的；自然的；偷拍的",
    example: "His candid answer made the room quiet.",
    exampleCn: "他坦率的回答让房间安静下来。",
    bg: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "dwell",
    phonetic: "/dwel/",
    meaning: "v. 居住；细想",
    option: "v. 居住；停留；反复思考",
    example: "Do not dwell too long on one mistake.",
    exampleCn: "不要在一个错误上纠结太久。",
    bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "evoke",
    phonetic: "/ɪˈvoʊk/",
    meaning: "v. 唤起；引发",
    option: "v. 唤起；引起；召唤出",
    example: "The song can evoke memories of summer.",
    exampleCn: "这首歌会唤起夏天的回忆。",
    bg: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "fringe",
    phonetic: "/frɪndʒ/",
    meaning: "n. 边缘；外围",
    option: "n. 边缘；刘海；外围群体",
    example: "The cafe sits on the fringe of the old town.",
    exampleCn: "这家咖啡馆在老城区边缘。",
    bg: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "grit",
    phonetic: "/ɡrɪt/",
    meaning: "n. 毅力；砂砾",
    option: "n. 毅力；砂砾；勇气",
    example: "It takes grit to keep practicing every day.",
    exampleCn: "每天坚持练习需要毅力。",
    bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "hollow",
    phonetic: "/ˈhɑː.loʊ/",
    meaning: "adj. 空的；空洞的",
    option: "adj. 空的；凹陷的；虚伪的",
    example: "The old tree was hollow inside.",
    exampleCn: "那棵老树里面是空的。",
    bg: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "ignite",
    phonetic: "/ɪɡˈnaɪt/",
    meaning: "v. 点燃；激起",
    option: "v. 点燃；激发；使燃烧",
    example: "One question can ignite a new idea.",
    exampleCn: "一个问题可能点燃一个新想法。",
    bg: "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?auto=format&fit=crop&w=900&q=84",
  },
  {
    text: "jolt",
    phonetic: "/dʒoʊlt/",
    meaning: "n./v. 震动；震惊",
    option: "n./v. 震动；震惊；猛推",
    example: "The sudden noise gave me a jolt.",
    exampleCn: "突然的噪音让我猛地一惊。",
    bg: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=84",
  },
];

const REVIEW_WORDS = [
  {
    text: "linger",
    phonetic: "/ˈlɪŋ.ɡər/",
    meaning: "v. 逗留；缓慢消失",
    option: "v. 逗留；缓慢消失",
  },
  {
    text: "kinship",
    phonetic: "/ˈkɪn.ʃɪp/",
    meaning: "n. 亲近感；亲属关系",
    option: "n. 亲近感；亲属关系",
  },
  {
    text: "cameo",
    phonetic: "/ˈkæm.i.oʊ/",
    meaning: "n. 客串；浮雕饰品",
    option: "n. 客串；浮雕饰品",
  },
  {
    text: "beam",
    phonetic: "/biːm/",
    meaning: "n. 光束；梁；v. 微笑",
    option: "n. 光束；梁；v. 微笑",
  },
  {
    text: "discover",
    phonetic: "/dɪˈskʌv.ər/",
    meaning: "v. 发现；找到",
    option: "v. 发现；找到",
  },
  {
    text: "defamation",
    phonetic: "/ˌdef.əˈmeɪ.ʃən/",
    meaning: "n. 诽谤；中伤",
    option: "n. 诽谤；中伤",
  },
  {
    text: "vibrant",
    phonetic: "/ˈvaɪ.brənt/",
    meaning: "adj. 充满活力的；鲜艳的",
    option: "adj. 充满活力的；鲜艳的",
  },
  {
    text: "sensible",
    phonetic: "/ˈsen.sə.bəl/",
    meaning: "adj. 明智的；合理的",
    option: "adj. 明智的；合理的",
  },
  {
    text: "sensual",
    phonetic: "/ˈsen.ʃu.əl/",
    meaning: "adj. 感官的；肉欲的",
    option: "adj. 感官的；肉欲的",
  },
  {
    text: "sensitivity",
    phonetic: "/ˌsen.səˈtɪv.ə.ti/",
    meaning: "n. 敏感；体贴；灵敏度",
    option: "n. 敏感；体贴；灵敏度",
  },
].map((word, index) => ({
  ...word,
  example: "The word appears in today's review set.",
  exampleCn: "这个词出现在今天的复习组里。",
  bg: WORDS[index % WORDS.length].bg,
}));

const DISTRACTORS = [
  "vt. 庆祝；颂扬；赞美；歌颂",
  "vt. 祝贺；道喜",
  "vt. 宣布；述说；预示",
  "adj. 敏感的；体贴的",
  "n. 名声；名誉；发现",
  "v. 中伤；诋毁；损害名誉",
];

const state = {
  mode: "learn",
  stage: "video",
  groupIndex: 0,
  groupWords: [],
  videoIndex: 0,
  quizIndex: 0,
  quizQueue: [],
  currentQuizWordIndex: 0,
  spellIndex: 0,
  spellTyped: "",
  completed: new Set(),
  skipped: new Set(),
  liked: new Set(),
  quizAttempts: new Map(),
  cookies: 0,
  answerLocked: false,
  currentWikiWord: null,
  toast: "",
  touchStartX: 0,
  touchStartY: 0,
  touchBound: false,
};

const app = document.querySelector("#app");

function init() {
  startLearnGroup(0);
  render();
}

function startLearnGroup(index) {
  state.mode = "learn";
  state.stage = "video";
  state.groupIndex = index;
  state.groupWords = getAvailableWords(WORDS, index);
  state.videoIndex = 0;
  state.quizIndex = 0;
  state.quizQueue = [];
  state.currentQuizWordIndex = 0;
  state.spellIndex = 0;
  state.spellTyped = "";
  state.completed = new Set();
  state.answerLocked = false;
}

function startReviewGroup() {
  state.mode = "review";
  state.stage = "quiz";
  state.groupWords = REVIEW_WORDS.filter((word) => !state.skipped.has(word.text)).slice(0, GROUP_SIZE);
  state.quizIndex = 0;
  state.quizQueue = [];
  state.currentQuizWordIndex = 0;
  state.spellIndex = 0;
  state.spellTyped = "";
  state.completed = new Set();
  state.answerLocked = false;
  render();
}

function startSpelling() {
  state.stage = "spell";
  state.spellIndex = 0;
  state.spellTyped = "";
  state.completed = new Set();
  state.answerLocked = false;
  render();
}

function getAvailableWords(source, groupIndex) {
  const available = source.filter((word) => !state.skipped.has(word.text));
  const start = (groupIndex * GROUP_SIZE) % Math.max(available.length, 1);
  return [...available.slice(start), ...available.slice(0, start)].slice(0, GROUP_SIZE);
}

function currentWord() {
  if (state.stage === "video") return state.groupWords[state.videoIndex];
  if (state.stage === "spell") return state.groupWords[state.spellIndex];
  if (state.stage === "quiz" && state.mode === "learn") return state.groupWords[state.currentQuizWordIndex];
  return state.groupWords[state.quizIndex];
}

function progressCount() {
  return Math.min(GROUP_SIZE, state.completed.size);
}

function render() {
  const word = currentWord() || state.groupWords[0] || WORDS[0];
  if (state.stage === "wiki") {
    app.innerHTML = renderWiki(state.currentWikiWord || word);
  } else if (state.stage === "complete") {
    app.innerHTML = renderComplete();
  } else if (state.stage === "spell") {
    app.innerHTML = renderSpell(word);
  } else if (state.stage === "quiz") {
    app.innerHTML = renderQuiz(word);
  } else {
    app.innerHTML = renderVideo(word);
  }
  bindEvents();
}

function nav(activeMode = state.mode) {
  return `
    <nav class="top-nav">
      <button class="icon-button back-button" type="button" data-action="back">‹</button>
      <div class="channel-tabs" aria-label="学习频道">
        <button class="${activeMode === "learn" ? "active" : ""}" type="button" data-action="mode-learn">新学</button>
        <button class="${activeMode === "review" ? "active" : ""}" type="button" data-action="mode-review">复习</button>
      </div>
      <button class="icon-button settings-button" type="button" data-action="settings">⚙</button>
    </nav>
  `;
}

function cookie(progress = progressCount()) {
  const groupSize = GROUP_SIZE;
  const deg = Math.round((Math.min(progress, groupSize) / groupSize) * 360);
  return `
    <aside class="cookie-card" aria-label="本组学习进度 ${progress}/${groupSize}">
      <div class="cookie-ring" style="--progress:${deg}deg"><span class="cookie-icon">🍪</span></div>
      <div class="cookie-count">${progress}/${groupSize}</div>
    </aside>
  `;
}

function renderVideo(word) {
  return `
    <section class="screen video-screen" style="background-image:linear-gradient(90deg,rgba(255,255,255,.35),rgba(255,255,255,.04)),url('${word.bg}')">
      ${nav("learn")}
      ${cookie()}
      <button class="detail-button" type="button" data-action="wiki">📖</button>
      <div class="word-panel">
        <div class="word-row">
          <h1 class="word-title">${word.text}</h1>
        </div>
        <div class="phonetic">${word.phonetic}</div>
        <div class="meaning">${word.meaning}</div>
        <div class="example">${word.example}<br>${word.exampleCn}</div>
      </div>
      <div class="side-rail">
        <button class="zhan-action" type="button" data-action="slash">斩</button>
        <button type="button" data-action="like">${state.liked.has(word.text) ? "♥" : "♡"}</button>
        <button type="button" data-action="share">⇧</button>
      </div>
      <div class="home-indicator"></div>
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
    </section>
  `;
}

function renderQuiz(word) {
  const options = buildOptions(word);
  const showWordProgress = state.mode === "learn";
  return `
    <section class="screen blue-screen">
      ${nav(state.mode)}
      ${cookie()}
      <div class="quiz-stem">
        <h1>${word.text}${showWordProgress ? attemptDots(word) : ""}</h1>
        <div class="pronounce-row"><span class="sound-tag">美›</span><span>${word.phonetic}</span></div>
      </div>
      <div class="option-list">
        ${options.map((option) => `<button class="option-card" type="button" data-option="${escapeAttr(option)}">${option}</button>`).join("")}
      </div>
      <button class="zhan-bottom" type="button" data-action="slash">斩</button>
      <div class="home-indicator"></div>
      ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
    </section>
  `;
}

function renderSpell(word) {
  const typed = state.spellTyped;
  return `
    <section class="screen blue-screen">
      ${nav(state.mode)}
      ${cookie()}
      <div class="spell-word">
        <h1 class="${typed ? "" : "empty"}">${typed || "&nbsp;"}</h1>
        <p>${word.option}</p>
      </div>
      <div class="spell-actions">
        <button type="button" data-action="spell-skip">跳过</button>
        <button type="button" data-action="slash">斩</button>
      </div>
      ${keyboard()}
      <div class="home-indicator"></div>
    </section>
  `;
}

function keyboard() {
  return `
    <div class="keyboard" aria-hidden="true">
      <div class="keyboard-row">${"QWERTYUIOP".split("").map((key) => `<button class="key" type="button" data-key="${key.toLowerCase()}">${key}</button>`).join("")}</div>
      <div class="keyboard-row">${"ASDFGHJKL".split("").map((key) => `<button class="key" type="button" data-key="${key.toLowerCase()}">${key}</button>`).join("")}</div>
      <div class="keyboard-row"><button class="key gray" type="button" data-action="spell-clear">清</button>${"ZXCVBNM".split("").map((key) => `<button class="key" type="button" data-key="${key.toLowerCase()}">${key}</button>`).join("")}<button class="key gray" type="button" data-action="spell-backspace">⌫</button></div>
      <div class="keyboard-row"><button class="key gray" type="button" data-action="spell-clear">清空</button><button class="key wide" type="button" data-key=" ">space</button><button class="key gray" type="button" data-action="spell-submit">Go</button></div>
    </div>
  `;
}

function renderWiki(word) {
  return `
    <section class="screen wiki-screen">
      <div class="wiki-scroll">
        <h1 class="wiki-title">${word.text}</h1>
        <div class="pronounce-row wiki-meta"><span class="sound-tag">美›</span><span>${word.phonetic}</span></div>
        <p class="wiki-meta">近5年在专八考试中出现 <b>3</b> 次</p>
        <p class="wiki-defs">${word.option}；相关例句与搭配如下。</p>
        <article class="wiki-card">
          <p>"${word.text}" 可以结合视频场景记忆：${word.example}</p>
          <div class="tabs"><span class="active">小斩</span><span>词根</span><span>联想</span><span>象形</span><span>谐音</span></div>
        </article>
        <article class="wiki-card">
          <p>${highlightWord(word.example, word.text)}</p>
          <small>${word.exampleCn}</small>
        </article>
        <article class="wiki-card">
          <p>a <b>${word.text}</b> moment <small>一个与 ${word.text} 相关的场景</small></p>
          <p>make it <b>${word.text}</b> <small>把它放进表达中反复记忆</small></p>
        </article>
      </div>
      <footer class="wiki-actions">
        <button type="button" data-action="slash">斩</button>
        <button type="button" data-action="wiki-back">←</button>
        <button type="button">→</button>
        <button class="primary" type="button" data-action="wiki-close">继续</button>
      </footer>
      <div class="home-indicator"></div>
    </section>
  `;
}

function renderComplete() {
  const isReview = state.mode === "review";
  const groupSize = GROUP_SIZE;
  return `
    <section class="screen complete-screen">
      <div class="reward-panel">
        <div class="reward-cookie">🍪</div>
        <h1>${isReview ? "复习一组完成" : "新学一组完成"}</h1>
        <p>本组 ${groupSize} 个词已完成，获得 1 个饼干。可以继续拼写巩固，也可以进入${isReview ? "下一组复习" : "下一组新学"}。</p>
        <div class="reward-actions">
          <button type="button" data-action="start-spell">继续拼写</button>
          <button class="primary" type="button" data-action="next-group">${isReview ? "下一组复习" : "下一组"}</button>
        </div>
      </div>
      <div class="home-indicator"></div>
    </section>
  `;
}

function renderSettings() {
  return `
    <section class="settings-overlay">
      <button class="settings-scrim" type="button" data-action="close-settings" aria-label="关闭设置"></button>
      <div class="settings-panel workbench-panel" role="dialog" aria-modal="true" aria-label="抽背逻辑">
        <h2>抽背逻辑</h2>
        <p class="setting-label">新学固定队列</p>
        <div class="setting-card">
          ${logicRows()}
        </div>
        <div class="workbench-summary">错题会追加到当前抽背段末尾，直到做对。完成当前抽背段后，才继续进入下一批新词。</div>
        <div class="workbench-actions">
          <button type="button" data-action="close-settings">关闭</button>
          <button class="primary" type="button" data-action="restart-learn">重开本组</button>
        </div>
        <div class="home-indicator"></div>
      </div>
    </section>
  `;
}

function bindEvents() {
  app.querySelectorAll("[data-action]").forEach((node) => {
    node.addEventListener("click", () => handleAction(node.dataset.action, node.dataset.option));
  });
  app.querySelectorAll("[data-option]").forEach((node) => {
    node.addEventListener("click", () => answerQuiz(node, node.dataset.option));
  });
  app.querySelectorAll("[data-key]").forEach((node) => {
    node.addEventListener("click", () => typeSpellKey(node.dataset.key));
  });
  app.querySelector(".video-screen")?.addEventListener("click", (event) => {
    if (event.target.closest("button")) return;
    completeVideo();
  });
  if (!state.touchBound) {
    app.addEventListener("touchstart", handleTouchStart, { passive: true });
    app.addEventListener("touchend", handleTouchEnd, { passive: true });
    state.touchBound = true;
  }
}

function handleAction(action) {
  if (action === "mode-learn") {
    startLearnGroup(state.groupIndex);
    render();
    return;
  }
  if (action === "mode-review") return startReviewGroup();
  if (action === "next-video") return completeVideo();
  if (action === "wiki") return openWiki();
  if (action === "wiki-close" || action === "wiki-back") return closeWiki();
  if (action === "like") return toggleLike();
  if (action === "slash") return slashWord();
  if (action === "share") return showToast("分享入口先占位，等你定具体设计");
  if (action === "settings" || action === "book") return openSettings();
  if (action === "close-settings") return render();
  if (action === "restart-learn") {
    startLearnGroup(state.groupIndex);
    render();
    return;
  }
  if (action === "start-spell") return startSpelling();
  if (action === "next-group") return nextGroup();
  if (action === "spell-skip") return nextSpell();
  if (action === "spell-backspace") return backspaceSpell();
  if (action === "spell-clear") return clearSpell();
  if (action === "spell-submit") return submitSpell();
  if (action === "speak") return speak(currentWord()?.text || "");
  if (action === "back") return showToast("返回首页入口占位");
}

function completeVideo() {
  const word = currentWord();
  if (!word) return;
  state.completed.add(word.text);
  const nextIndex = state.videoIndex + 1;
  const finishedPair = nextIndex % 2 === 0;
  if (finishedPair) {
    state.quizQueue = recallQueueForPair(nextIndex / 2);
    state.currentQuizWordIndex = state.quizQueue.shift();
    state.stage = "quiz";
  } else if (state.videoIndex < state.groupWords.length - 1) {
    state.videoIndex += 1;
  } else {
    finishGroup();
  }
  render();
}

function previousVideo() {
  if (state.stage !== "video") return;
  if (state.videoIndex > 0) {
    const word = currentWord();
    if (word) state.completed.delete(word.text);
    state.videoIndex -= 1;
    render();
    return;
  }
  showToast("已经是本组第一个视频");
}

function answerQuiz(button, selected) {
  if (state.answerLocked) return;
  const word = currentWord();
  state.answerLocked = true;
  state.quizAttempts.set(word.text, (state.quizAttempts.get(word.text) || 0) + 1);
  const isCorrect = selected === word.option;
  if (state.mode === "learn" && !isCorrect) {
    state.quizQueue.push(state.currentQuizWordIndex);
  }
  button.classList.add(isCorrect ? "correct" : "wrong");
  app.querySelectorAll(".option-card").forEach((option) => {
    if (option.dataset.option === word.option) option.classList.add("correct");
  });
  window.setTimeout(() => {
    if (state.mode === "review") {
      state.completed.add(word.text);
      if (state.quizIndex < state.groupWords.length - 1) {
        state.quizIndex += 1;
        state.answerLocked = false;
        render();
      } else {
        finishGroup();
      }
      return;
    }
    if (state.quizQueue.length) {
      state.currentQuizWordIndex = state.quizQueue.shift();
      state.answerLocked = false;
      render();
    } else if (state.videoIndex < state.groupWords.length - 1) {
      state.videoIndex += 1;
      state.stage = "video";
      state.answerLocked = false;
      render();
    } else {
      finishGroup();
    }
  }, 720);
}

function nextSpell() {
  const word = currentWord();
  if (word) state.completed.add(word.text);
  state.spellTyped = "";
  if (state.spellIndex < state.groupWords.length - 1) {
    state.spellIndex += 1;
    render();
    return;
  }
  finishGroup(false);
}

function typeSpellKey(key) {
  if (state.stage !== "spell") return;
  const word = currentWord();
  if (!word) return;
  if (state.spellTyped.length >= word.text.length + 4) return;
  state.spellTyped += key;
  render();
}

function backspaceSpell() {
  if (state.stage !== "spell") return;
  state.spellTyped = state.spellTyped.slice(0, -1);
  render();
}

function clearSpell() {
  if (state.stage !== "spell") return;
  state.spellTyped = "";
  render();
}

function submitSpell() {
  const word = currentWord();
  if (!word) return;
  const typed = state.spellTyped.trim().toLowerCase();
  if (typed === word.text.toLowerCase()) {
    nextSpell();
    return;
  }
  showToast("再检查一下拼写");
}

function recallQueueForPair(pairNumber) {
  const plan = LEARN_RECALL_PLAN[pairNumber - 1] || [];
  return plan.filter((index) => state.groupWords[index] && !state.skipped.has(state.groupWords[index].text));
}

function finishGroup(addCookie = true) {
  if (addCookie) state.cookies += 1;
  state.completed = new Set(state.groupWords.map((word) => word.text));
  state.stage = "complete";
  state.answerLocked = false;
  render();
}

function nextGroup() {
  if (state.mode === "review") {
    startReviewGroup();
    return;
  }
  startLearnGroup(state.groupIndex + 1);
  render();
}

function openWiki() {
  state.currentWikiWord = currentWord();
  state.previousStage = state.stage;
  state.stage = "wiki";
  render();
}

function closeWiki() {
  state.stage = state.previousStage || "video";
  render();
}

function toggleLike() {
  const word = currentWord();
  if (!word) return;
  if (state.liked.has(word.text)) state.liked.delete(word.text);
  else state.liked.add(word.text);
  render();
}

function slashWord() {
  const word = currentWord();
  if (!word) return;
  state.skipped.add(word.text);
  state.completed.add(word.text);
  showToast(`已斩：${word.text} 不再新学或复习`);
  if (state.stage === "wiki") {
    closeWiki();
    return;
  }
  if (state.stage === "video") {
    completeVideo();
    return;
  }
  if (state.stage === "spell") {
    nextSpell();
    return;
  }
  if (state.stage === "quiz" && state.mode === "learn") {
    if (state.videoIndex < state.groupWords.length - 1) {
      state.videoIndex += 1;
      state.stage = "video";
      render();
      return;
    }
    finishGroup();
    return;
  }
  if (state.mode === "review" && state.quizIndex < state.groupWords.length - 1) {
    state.quizIndex += 1;
    render();
    return;
  }
  finishGroup();
}

function openSettings() {
  app.insertAdjacentHTML("beforeend", renderSettings());
  app.querySelectorAll(".settings-overlay [data-action]").forEach((node) => {
    node.addEventListener("click", () => handleAction(node.dataset.action));
  });
}

function logicRows() {
  const rows = [
    "学1 学2 -> 抽背 1、2",
    "学3 学4 -> 抽背 3、4、1、2",
    "学5 学6 -> 抽背 5、6、3、4",
    "学7 学8 -> 抽背 7、8、5、6、1、2",
    "学9 学10 -> 抽背 9、10、7、8、3、4、5、6、9、10、7、8、9、10",
  ];
  return rows
    .map((row) => `
      <div class="logic-row">
        <strong>${row.split(" -> ")[0]}</strong>
        <span>${row.split(" -> ")[1]}</span>
      </div>
    `)
    .join("");
}

function showToast(message) {
  state.toast = message;
  render();
  window.clearTimeout(state.toastTimer);
  state.toastTimer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 1300);
}

function buildOptions(word) {
  return shuffle([word.option, ...shuffle(DISTRACTORS.filter((item) => item !== word.option)).slice(0, 3)]);
}

function attemptDots(word) {
  const currentAttempt = Math.min(3, (state.quizAttempts.get(word.text) || 0) + 1);
  return `
    <span class="accent-dots" aria-label="已抽背 ${currentAttempt} 次">
      ${[0, 1, 2].map((index) => `<i class="${index < currentAttempt ? "filled" : ""}"></i>`).join("")}
    </span>
  `;
}

function highlightWord(sentence, word) {
  return sentence.replace(new RegExp(`(${word})`, "i"), "<mark>$1</mark>");
}

function escapeAttr(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function handleTouchStart(event) {
  state.touchStartX = event.touches[0].clientX;
  state.touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  const deltaX = event.changedTouches[0].clientX - state.touchStartX;
  const deltaY = state.touchStartY - event.changedTouches[0].clientY;
  if (Math.abs(deltaX) > 56 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) startReviewGroup();
    else {
      startLearnGroup(state.groupIndex);
      render();
    }
    return;
  }
  if (state.stage === "video" && deltaY > 42) previousVideo();
  if (state.stage === "video" && deltaY < -42) completeVideo();
}

init();
