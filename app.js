const DEFAULT_SETTINGS = {
  poolCap: 10,
  intervals: [2, 4, 7],
  fallback: 1,
};

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
    phonetic: "/ˌrevəˈluːʃəneri/",
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
  "linger",
  "kinship",
  "cameo",
  "beam",
  "discover",
  "defamation",
  "vibrant",
  "sensible",
  "sensual",
  "sensitivity",
].map((text, index) => ({
  text,
  phonetic: ["/ˈlɪŋ.ɡər/", "/ˈkɪn.ʃɪp/", "/ˈkæmioʊ/", "/biːm/"][index % 4],
  meaning: ["逗留；缓慢消失", "亲近感；亲属关系", "客串；贝雕", "光束；面露喜色"][index % 4],
  option: ["v. 逗留；缓慢消失", "n. 亲近感；亲属关系", "n. 客串；浮雕饰品", "n. 光束；梁"][index % 4],
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
  position: 0,
  schedule: new Map(),
  spellIndex: 0,
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
  settings: { ...DEFAULT_SETTINGS },
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
  state.position = 0;
  state.schedule = new Map();
  state.spellIndex = 0;
  state.completed = new Set();
  state.answerLocked = false;
}

function startReviewGroup() {
  state.mode = "review";
  state.stage = "quiz";
  state.groupWords = REVIEW_WORDS.filter((word) => !state.skipped.has(word.text)).slice(0, state.settings.poolCap);
  state.quizIndex = 0;
  state.spellIndex = 0;
  state.completed = new Set();
  state.answerLocked = false;
  render();
}

function startSpelling() {
  state.stage = "spell";
  state.spellIndex = 0;
  state.completed = new Set();
  state.answerLocked = false;
  render();
}

function getAvailableWords(source, groupIndex) {
  const available = source.filter((word) => !state.skipped.has(word.text));
  const poolCap = state.settings.poolCap;
  const start = (groupIndex * poolCap) % Math.max(available.length, 1);
  return [...available.slice(start), ...available.slice(0, start)].slice(0, poolCap);
}

function currentWord() {
  if (state.stage === "video") return state.groupWords[state.videoIndex];
  if (state.stage === "spell") return state.groupWords[state.spellIndex];
  return state.groupWords[state.quizIndex];
}

function progressCount() {
  return Math.min(state.settings.poolCap, state.completed.size);
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
  const groupSize = state.settings.poolCap;
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
          <span class="word-zhan-inline">斩</span>
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
      <button class="toast" type="button" data-action="next-video">点击继续 · 上滑回上一个</button>
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
  const typed = word.text.slice(0, Math.min(3, word.text.length));
  return `
    <section class="screen blue-screen">
      ${nav(state.mode)}
      ${cookie()}
      <div class="spell-word">
        <h1>${typed}</h1>
        <p>${word.option}</p>
      </div>
      <div class="spell-actions">
        <button type="button" data-action="spell-skip">跳过</button>
        <button type="button">♧</button>
        <button type="button" data-action="speak">♬</button>
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
      <div class="keyboard-row">${"QWERTYUIOP".split("").map((key) => `<span class="key">${key}</span>`).join("")}</div>
      <div class="keyboard-row">${"ASDFGHJKL".split("").map((key) => `<span class="key">${key}</span>`).join("")}</div>
      <div class="keyboard-row"><span class="key">⇧</span>${"ZXCVBNM".split("").map((key) => `<span class="key">${key}</span>`).join("")}<span class="key">⌫</span></div>
      <div class="keyboard-row"><span class="key gray">123</span><span class="key wide">space</span><span class="key gray" data-action="spell-next">Go</span></div>
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
  const groupSize = state.settings.poolCap;
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
  const intervals = state.settings.intervals.join(",");
  return `
    <section class="settings-overlay">
      <button class="settings-scrim" type="button" data-action="close-settings" aria-label="关闭设置"></button>
      <div class="settings-panel workbench-panel" role="dialog" aria-modal="true" aria-label="参数工作台">
        <h2>参数工作台</h2>
        <p class="setting-label">间隔抽背参数</p>
        <div class="setting-card">
          <label class="control-row">
            <div>
              <strong>工作记忆</strong>
              <span>每组同时推进的词数</span>
            </div>
            <input id="poolCapInput" type="range" min="3" max="12" value="${state.settings.poolCap}" />
            <output id="poolCapOutput">${state.settings.poolCap}</output>
          </label>
          <label class="control-row text-control">
            <div>
              <strong>间隔序列</strong>
              <span>做对后依次延后多少步</span>
            </div>
            <input id="intervalInput" type="text" value="${intervals}" inputmode="numeric" />
          </label>
          <label class="control-row">
            <div>
              <strong>错误回退</strong>
              <span>做错后回退几个 stage</span>
            </div>
            <input id="fallbackInput" type="range" min="0" max="3" value="${state.settings.fallback}" />
            <output id="fallbackOutput">${state.settings.fallback}</output>
          </label>
        </div>
        <div class="workbench-summary" id="workbenchSummary">${settingsSummary()}</div>
        <div class="workbench-actions">
          <button type="button" data-action="reset-settings">重置</button>
          <button class="primary" type="button" data-action="apply-settings">保存并重开本组</button>
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
  if (action === "apply-settings") return applySettings();
  if (action === "reset-settings") return resetSettingsForm();
  if (action === "start-spell") return startSpelling();
  if (action === "next-group") return nextGroup();
  if (action === "spell-next" || action === "spell-skip") return nextSpell();
  if (action === "speak") return speak(currentWord()?.text || "");
  if (action === "back") return showToast("返回首页入口占位");
}

function completeVideo() {
  const word = currentWord();
  if (!word) return;
  ensureSchedule(word, state.videoIndex);
  state.completed.add(word.text);
  state.position = state.videoIndex + 1;
  const dueIndex = findDueIndex(state.position);
  if (dueIndex >= 0) {
    state.stage = "quiz";
    state.quizIndex = dueIndex;
  } else if (state.videoIndex < state.groupWords.length - 1) {
    state.videoIndex += 1;
  } else if (hasPendingScheduledWords()) {
    state.position = nextDuePosition();
    state.stage = "quiz";
    state.quizIndex = findDueIndex(state.position);
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
  if (state.mode === "learn") updateWordSchedule(word, isCorrect);
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
    const dueIndex = findDueIndex(state.position);
    if (dueIndex >= 0) {
      state.stage = "quiz";
      state.quizIndex = dueIndex;
      state.answerLocked = false;
      render();
    } else if (state.videoIndex < state.groupWords.length - 1) {
      state.videoIndex += 1;
      state.stage = "video";
      state.answerLocked = false;
      render();
    } else if (hasPendingScheduledWords()) {
      state.position = nextDuePosition();
      state.stage = "quiz";
      state.quizIndex = findDueIndex(state.position);
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
  if (state.spellIndex < state.groupWords.length - 1) {
    state.spellIndex += 1;
    render();
    return;
  }
  finishGroup(false);
}

function ensureSchedule(word, position) {
  if (state.schedule.has(word.text)) return;
  state.schedule.set(word.text, {
    stage: 0,
    due: position + state.settings.intervals[0],
    done: false,
  });
}

function updateWordSchedule(word, isCorrect) {
  const item = state.schedule.get(word.text);
  if (!item || item.done) return;
  if (isCorrect) {
    item.stage += 1;
    if (item.stage >= state.settings.intervals.length) {
      item.done = true;
      return;
    }
    item.due = state.position + state.settings.intervals[item.stage];
    return;
  }
  item.stage = Math.max(0, item.stage - state.settings.fallback);
  item.due = state.position + state.settings.intervals[item.stage];
}

function findDueIndex(position) {
  return state.groupWords
    .map((word, index) => ({ word, index, item: state.schedule.get(word.text) }))
    .filter(({ word, item }) => item && !item.done && !state.skipped.has(word.text) && item.due <= position)
    .sort((a, b) => {
      if (a.item.due !== b.item.due) return a.item.due - b.item.due;
      return a.item.stage - b.item.stage;
    })[0]?.index ?? -1;
}

function hasPendingScheduledWords() {
  return [...state.schedule.values()].some((item) => !item.done);
}

function nextDuePosition() {
  const dueList = [...state.schedule.values()].filter((item) => !item.done).map((item) => item.due);
  return dueList.length ? Math.min(...dueList) : state.position;
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
  bindSettingsControls();
}

function bindSettingsControls() {
  const poolInput = app.querySelector("#poolCapInput");
  const fallbackInput = app.querySelector("#fallbackInput");
  const intervalInput = app.querySelector("#intervalInput");
  const update = () => {
    const pool = Number.parseInt(poolInput.value, 10);
    const fallback = Number.parseInt(fallbackInput.value, 10);
    app.querySelector("#poolCapOutput").textContent = pool;
    app.querySelector("#fallbackOutput").textContent = fallback;
    app.querySelector("#workbenchSummary").textContent = settingsSummary({
      poolCap: pool,
      intervals: parseIntervals(intervalInput.value),
      fallback,
    });
  };
  [poolInput, fallbackInput, intervalInput].forEach((input) => {
    input.addEventListener("input", update);
  });
}

function applySettings() {
  const poolCap = Number.parseInt(app.querySelector("#poolCapInput")?.value || DEFAULT_SETTINGS.poolCap, 10);
  const fallback = Number.parseInt(app.querySelector("#fallbackInput")?.value || DEFAULT_SETTINGS.fallback, 10);
  const intervals = parseIntervals(app.querySelector("#intervalInput")?.value || "");
  state.settings = {
    poolCap: clamp(poolCap, 3, 12),
    intervals,
    fallback: clamp(fallback, 0, 3),
  };
  state.toast = "";
  if (state.mode === "review") startReviewGroup();
  else startLearnGroup(state.groupIndex);
  render();
}

function resetSettingsForm() {
  state.settings = { ...DEFAULT_SETTINGS };
  if (state.mode === "review") startReviewGroup();
  else startLearnGroup(state.groupIndex);
  render();
}

function parseIntervals(value) {
  const parsed = String(value)
    .split(",")
    .map((item) => Number.parseInt(item.trim(), 10))
    .filter((item) => Number.isFinite(item) && item > 0)
    .slice(0, 5);
  return parsed.length ? parsed : [...DEFAULT_SETTINGS.intervals];
}

function settingsSummary(settings = state.settings) {
  return `当前：每组 ${settings.poolCap} 个词；答对后按 +${settings.intervals.join("、+")} 步回来；做错回退 ${settings.fallback} 个 stage。`;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
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
