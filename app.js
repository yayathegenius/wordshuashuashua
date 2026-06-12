const GROUP_SIZE = 10;

const LEARN_RECALL_PLAN = [
  [0, 1],
  [2, 3, 0, 1],
  [4, 5, 2, 3],
  [6, 7, 4, 5, 0, 1],
  [8, 9, 6, 7, 2, 3, 4, 5, 8, 9, 6, 7, 8, 9],
];

const GRE_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1499678329028-101435549a4e?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=84",
  "https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?auto=format&fit=crop&w=900&q=84",
];

const GRE_WORD_BANK = [
  {
    text: "aberrant",
    phonetic: "/æˈber.ənt/",
    meaning: "adj. 异常的；偏离常规的",
    option: "adj. 异常的；偏离常规的",
    example: "The aberrant result forced the team to repeat the test.",
    exampleCn: "这个异常结果迫使团队重新做实验。",
  },
  {
    text: "abstemious",
    phonetic: "/æbˈstiː.mi.əs/",
    meaning: "adj. 有节制的；饮食节俭的",
    option: "adj. 有节制的；饮食节俭的",
    example: "Her abstemious habits helped her stay focused during exams.",
    exampleCn: "她有节制的习惯帮助她在考试期间保持专注。",
  },
  {
    text: "acumen",
    phonetic: "/ˈæk.jə.mən/",
    meaning: "n. 敏锐；洞察力",
    option: "n. 敏锐；洞察力；判断力",
    example: "The investor's acumen was obvious in a volatile market.",
    exampleCn: "在动荡市场中，这位投资人的洞察力很明显。",
  },
  {
    text: "admonish",
    phonetic: "/ədˈmɑː.nɪʃ/",
    meaning: "v. 告诫；责备",
    option: "v. 告诫；责备；劝告",
    example: "The professor admonished students not to cite weak evidence.",
    exampleCn: "教授告诫学生不要引用薄弱证据。",
  },
  {
    text: "austere",
    phonetic: "/ɑːˈstɪr/",
    meaning: "adj. 朴素的；严厉的",
    option: "adj. 朴素的；严厉的；苦行的",
    example: "The austere room had only a desk and one narrow bed.",
    exampleCn: "这个朴素的房间里只有一张桌子和一张窄床。",
  },
  {
    text: "belie",
    phonetic: "/bɪˈlaɪ/",
    meaning: "v. 掩饰；与……不符",
    option: "v. 掩饰；证明……为假；与……不符",
    example: "His calm tone belied the urgency of the message.",
    exampleCn: "他平静的语气掩盖了消息的紧迫性。",
  },
  {
    text: "bolster",
    phonetic: "/ˈboʊl.stər/",
    meaning: "v. 支持；加强",
    option: "v. 支持；加强；改善",
    example: "The new data bolstered the author's central claim.",
    exampleCn: "新数据加强了作者的核心论点。",
  },
  {
    text: "capricious",
    phonetic: "/kəˈprɪʃ.əs/",
    meaning: "adj. 反复无常的",
    option: "adj. 反复无常的；任性的",
    example: "A capricious policy makes long-term planning difficult.",
    exampleCn: "反复无常的政策会让长期规划变得困难。",
  },
  {
    text: "castigate",
    phonetic: "/ˈkæs.tə.ɡeɪt/",
    meaning: "v. 严厉批评；惩戒",
    option: "v. 严厉批评；惩戒",
    example: "The reviewer castigated the report for ignoring key facts.",
    exampleCn: "评论者严厉批评这份报告忽视关键事实。",
  },
  {
    text: "cogent",
    phonetic: "/ˈkoʊ.dʒənt/",
    meaning: "adj. 有说服力的",
    option: "adj. 有说服力的；切中要点的",
    example: "She made a cogent argument in only three minutes.",
    exampleCn: "她只用了三分钟就提出了有说服力的论证。",
  },
  {
    text: "conundrum",
    phonetic: "/kəˈnʌn.drəm/",
    meaning: "n. 难题；谜题",
    option: "n. 难题；谜题；复杂问题",
    example: "The committee faced a conundrum with no painless answer.",
    exampleCn: "委员会面对一个没有轻松答案的难题。",
  },
  {
    text: "deleterious",
    phonetic: "/ˌdel.əˈtɪr.i.əs/",
    meaning: "adj. 有害的",
    option: "adj. 有害的；造成损害的",
    example: "Sleep loss has deleterious effects on attention.",
    exampleCn: "睡眠不足会对注意力产生有害影响。",
  },
  {
    text: "didactic",
    phonetic: "/daɪˈdæk.tɪk/",
    meaning: "adj. 说教的；教诲的",
    option: "adj. 说教的；教诲的",
    example: "The novel is powerful without becoming didactic.",
    exampleCn: "这部小说很有力量，却没有变得说教。",
  },
  {
    text: "disparate",
    phonetic: "/ˈdɪs.pər.ət/",
    meaning: "adj. 迥然不同的",
    option: "adj. 迥然不同的；无法比较的",
    example: "The study connects data from disparate fields.",
    exampleCn: "这项研究连接了来自不同领域的数据。",
  },
  {
    text: "ebullient",
    phonetic: "/ɪˈbʊl.i.ənt/",
    meaning: "adj. 热情洋溢的",
    option: "adj. 热情洋溢的；兴高采烈的",
    example: "Her ebullient speech lifted the mood of the room.",
    exampleCn: "她热情洋溢的讲话提振了全场气氛。",
  },
  {
    text: "enervate",
    phonetic: "/ˈen.ər.veɪt/",
    meaning: "v. 使衰弱；削弱",
    option: "v. 使衰弱；削弱",
    example: "The long delay seemed to enervate the whole team.",
    exampleCn: "漫长的延误似乎削弱了整个团队的精力。",
  },
  {
    text: "equivocal",
    phonetic: "/ɪˈkwɪv.ə.kəl/",
    meaning: "adj. 模棱两可的",
    option: "adj. 模棱两可的；含糊的",
    example: "The witness gave an equivocal answer.",
    exampleCn: "证人给出了一个含糊的回答。",
  },
  {
    text: "erudite",
    phonetic: "/ˈer.jə.daɪt/",
    meaning: "adj. 博学的",
    option: "adj. 博学的；学识渊博的",
    example: "The erudite lecturer made difficult ideas feel clear.",
    exampleCn: "这位博学的讲师让困难概念变得清晰。",
  },
  {
    text: "esoteric",
    phonetic: "/ˌes.əˈter.ɪk/",
    meaning: "adj. 深奥的；小众的",
    option: "adj. 深奥的；只有少数人懂的",
    example: "The paper uses esoteric terms without defining them.",
    exampleCn: "这篇论文使用了深奥术语却没有定义。",
  },
  {
    text: "fastidious",
    phonetic: "/fæˈstɪd.i.əs/",
    meaning: "adj. 挑剔的；一丝不苟的",
    option: "adj. 挑剔的；一丝不苟的",
    example: "A fastidious editor caught every small inconsistency.",
    exampleCn: "一位一丝不苟的编辑抓住了每个小矛盾。",
  },
  {
    text: "garrulous",
    phonetic: "/ˈɡer.ə.ləs/",
    meaning: "adj. 话多的；喋喋不休的",
    option: "adj. 话多的；喋喋不休的",
    example: "The garrulous guide filled every silence with stories.",
    exampleCn: "这位话多的导游用故事填满每一次沉默。",
  },
  {
    text: "gregarious",
    phonetic: "/ɡrɪˈɡer.i.əs/",
    meaning: "adj. 爱社交的；群居的",
    option: "adj. 爱社交的；群居的",
    example: "Gregarious students often form study groups quickly.",
    exampleCn: "爱社交的学生常常很快组成学习小组。",
  },
  {
    text: "iconoclast",
    phonetic: "/aɪˈkɑː.nə.klæst/",
    meaning: "n. 反传统者",
    option: "n. 反传统者；打破旧观念的人",
    example: "The iconoclast questioned assumptions everyone else accepted.",
    exampleCn: "这位反传统者质疑了所有人都接受的假设。",
  },
  {
    text: "impecunious",
    phonetic: "/ˌɪm.pɪˈkjuː.ni.əs/",
    meaning: "adj. 身无分文的；贫穷的",
    option: "adj. 身无分文的；贫穷的",
    example: "The impecunious artist traded sketches for meals.",
    exampleCn: "这位贫穷的艺术家用素描换饭吃。",
  },
  {
    text: "inchoate",
    phonetic: "/ɪnˈkoʊ.ət/",
    meaning: "adj. 刚开始的；未成形的",
    option: "adj. 刚开始的；未成形的",
    example: "The proposal was still inchoate but promising.",
    exampleCn: "这个提案还未成形，但很有潜力。",
  },
  {
    text: "intransigent",
    phonetic: "/ɪnˈtræn.zə.dʒənt/",
    meaning: "adj. 不妥协的",
    option: "adj. 不妥协的；固执的",
    example: "An intransigent negotiator can stall the entire process.",
    exampleCn: "一个不妥协的谈判者会拖住整个进程。",
  },
  {
    text: "laconic",
    phonetic: "/ləˈkɑː.nɪk/",
    meaning: "adj. 简洁的；言简意赅的",
    option: "adj. 简洁的；言简意赅的",
    example: "His laconic reply ended the debate.",
    exampleCn: "他简洁的回答结束了争论。",
  },
  {
    text: "laudable",
    phonetic: "/ˈlɔː.də.bəl/",
    meaning: "adj. 值得赞扬的",
    option: "adj. 值得赞扬的；可嘉的",
    example: "The goal is laudable, even if the plan is imperfect.",
    exampleCn: "这个目标值得赞扬，即使计划并不完美。",
  },
  {
    text: "loquacious",
    phonetic: "/loʊˈkweɪ.ʃəs/",
    meaning: "adj. 健谈的；话多的",
    option: "adj. 健谈的；话多的",
    example: "The loquacious guest dominated the dinner conversation.",
    exampleCn: "这位健谈的客人主导了晚餐谈话。",
  },
  {
    text: "mendacious",
    phonetic: "/menˈdeɪ.ʃəs/",
    meaning: "adj. 虚假的；说谎的",
    option: "adj. 虚假的；说谎的",
    example: "The article exposed the mendacious campaign.",
    exampleCn: "这篇文章揭露了那场虚假的宣传。",
  },
  {
    text: "munificent",
    phonetic: "/mjuːˈnɪf.ə.sənt/",
    meaning: "adj. 慷慨的",
    option: "adj. 慷慨的；出手大方的",
    example: "A munificent donor funded the new library.",
    exampleCn: "一位慷慨的捐赠者资助了新图书馆。",
  },
  {
    text: "obdurate",
    phonetic: "/ˈɑːb.dʊr.ət/",
    meaning: "adj. 顽固的；执拗的",
    option: "adj. 顽固的；执拗的",
    example: "The obdurate official refused to reconsider.",
    exampleCn: "这位顽固的官员拒绝重新考虑。",
  },
  {
    text: "obfuscate",
    phonetic: "/ˈɑːb.fə.skeɪt/",
    meaning: "v. 使模糊；混淆",
    option: "v. 使模糊；混淆；故意使难懂",
    example: "Technical jargon can obfuscate a simple idea.",
    exampleCn: "技术术语可能会把简单想法弄得难懂。",
  },
  {
    text: "parsimony",
    phonetic: "/ˈpɑːr.sə.moʊ.ni/",
    meaning: "n. 吝啬；极度节俭",
    option: "n. 吝啬；极度节俭",
    example: "His parsimony saved money but damaged morale.",
    exampleCn: "他的吝啬省了钱，却伤害了士气。",
  },
  {
    text: "perspicacious",
    phonetic: "/ˌpɜːr.spɪˈkeɪ.ʃəs/",
    meaning: "adj. 有洞察力的",
    option: "adj. 有洞察力的；敏锐的",
    example: "The perspicacious analyst noticed the hidden risk.",
    exampleCn: "这位敏锐的分析师注意到了隐藏风险。",
  },
  {
    text: "placate",
    phonetic: "/ˈpleɪ.keɪt/",
    meaning: "v. 安抚；平息",
    option: "v. 安抚；平息怒气",
    example: "The manager tried to placate frustrated customers.",
    exampleCn: "经理试图安抚沮丧的顾客。",
  },
  {
    text: "pragmatic",
    phonetic: "/præɡˈmæt.ɪk/",
    meaning: "adj. 务实的",
    option: "adj. 务实的；讲求实际的",
    example: "A pragmatic solution is better than a perfect theory.",
    exampleCn: "务实的解决方案胜过完美的理论。",
  },
  {
    text: "prodigal",
    phonetic: "/ˈprɑː.dɪ.ɡəl/",
    meaning: "adj. 挥霍的；浪费的",
    option: "adj. 挥霍的；浪费的；慷慨的",
    example: "The prodigal spending alarmed the board.",
    exampleCn: "这种挥霍性开支让董事会感到担忧。",
  },
  {
    text: "prosaic",
    phonetic: "/proʊˈzeɪ.ɪk/",
    meaning: "adj. 平淡的；乏味的",
    option: "adj. 平淡的；乏味的；散文的",
    example: "The discovery turned a prosaic task into an adventure.",
    exampleCn: "这个发现把一项平淡任务变成了冒险。",
  },
  {
    text: "quixotic",
    phonetic: "/kwɪkˈsɑː.tɪk/",
    meaning: "adj. 不切实际的；空想的",
    option: "adj. 不切实际的；空想的",
    example: "The quixotic plan inspired people despite its risks.",
    exampleCn: "这个不切实际的计划尽管有风险，却鼓舞了人们。",
  },
  {
    text: "recalcitrant",
    phonetic: "/rɪˈkæl.sə.trənt/",
    meaning: "adj. 桀骜不驯的；抗拒的",
    option: "adj. 桀骜不驯的；抗拒权威的",
    example: "The recalcitrant student ignored every warning.",
    exampleCn: "这个桀骜不驯的学生无视每一次警告。",
  },
  {
    text: "reticent",
    phonetic: "/ˈret.ə.sənt/",
    meaning: "adj. 沉默寡言的；保留的",
    option: "adj. 沉默寡言的；不愿透露的",
    example: "She was reticent about the details of the deal.",
    exampleCn: "她不愿透露这笔交易的细节。",
  },
  {
    text: "sagacious",
    phonetic: "/səˈɡeɪ.ʃəs/",
    meaning: "adj. 睿智的；有远见的",
    option: "adj. 睿智的；有远见的",
    example: "A sagacious leader prepares before a crisis arrives.",
    exampleCn: "睿智的领导者会在危机到来前做好准备。",
  },
  {
    text: "sanguine",
    phonetic: "/ˈsæŋ.ɡwɪn/",
    meaning: "adj. 乐观的",
    option: "adj. 乐观的；充满信心的",
    example: "Analysts remain sanguine about the company's future.",
    exampleCn: "分析师仍然对公司的未来保持乐观。",
  },
  {
    text: "spurious",
    phonetic: "/ˈspjʊr.i.əs/",
    meaning: "adj. 虚假的；伪造的",
    option: "adj. 虚假的；伪造的；站不住脚的",
    example: "The claim was based on spurious evidence.",
    exampleCn: "这个说法建立在虚假证据之上。",
  },
  {
    text: "stolid",
    phonetic: "/ˈstɑː.lɪd/",
    meaning: "adj. 冷漠的；不动感情的",
    option: "adj. 冷漠的；不易激动的",
    example: "His stolid expression revealed nothing.",
    exampleCn: "他冷漠的表情什么也没有透露。",
  },
  {
    text: "trenchant",
    phonetic: "/ˈtren.tʃənt/",
    meaning: "adj. 尖锐的；有力的",
    option: "adj. 尖锐的；有力的；深刻的",
    example: "Her trenchant critique changed the direction of the debate.",
    exampleCn: "她尖锐的批评改变了辩论方向。",
  },
  {
    text: "ubiquitous",
    phonetic: "/juːˈbɪk.wə.təs/",
    meaning: "adj. 无处不在的",
    option: "adj. 无处不在的；普遍存在的",
    example: "Smartphones have become ubiquitous in daily life.",
    exampleCn: "智能手机已经在日常生活中无处不在。",
  },
  {
    text: "vacillate",
    phonetic: "/ˈvæs.ə.leɪt/",
    meaning: "v. 犹豫不决；摇摆",
    option: "v. 犹豫不决；摇摆不定",
    example: "Do not vacillate when the evidence is clear.",
    exampleCn: "证据清楚时不要犹豫不决。",
  },
  {
    text: "veracity",
    phonetic: "/vəˈræs.ə.ti/",
    meaning: "n. 真实性；诚实",
    option: "n. 真实性；诚实；准确性",
    example: "The court questioned the veracity of the testimony.",
    exampleCn: "法庭质疑这份证词的真实性。",
  },
];

const WORDS = shuffle(GRE_WORD_BANK).slice(0, 50).map((word, index) => ({
  ...word,
  bg: GRE_BACKGROUNDS[index % GRE_BACKGROUNDS.length],
}));

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
  pointerStartX: 0,
  pointerStartY: 0,
  pointerDown: false,
  touchBound: false,
  isTransitioning: false,
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
  focusSpellInput();
}

function transitionTo(update, direction = "next", effect = "slide") {
  if (state.isTransitioning) return;
  const outgoing = app.querySelector(".screen")?.cloneNode(true);
  state.isTransitioning = true;
  update();
  render();
  const incoming = app.querySelector(".screen");
  if (!incoming || !outgoing) {
    state.isTransitioning = false;
    return;
  }

  outgoing.classList.add("screen-transition", `out-${effect}-${direction}`);
  incoming.classList.add("screen-transition", `in-${effect}-${direction}`);
  app.append(outgoing);

  window.requestAnimationFrame(() => {
    outgoing.classList.add("is-active");
    incoming.classList.add("is-active");
  });

  window.setTimeout(() => {
    outgoing.remove();
    incoming.classList.remove("screen-transition", `in-${effect}-${direction}`, "is-active");
    state.isTransitioning = false;
  }, 420);
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
        <input
          class="spell-input ${typed ? "" : "empty"}"
          type="text"
          value="${escapeAttr(typed)}"
          aria-label="输入单词拼写"
          autocomplete="off"
          autocapitalize="none"
          autocorrect="off"
          spellcheck="false"
          inputmode="text"
          enterkeyhint="done"
          autofocus
        />
        <p>${word.option}</p>
      </div>
      <div class="spell-actions">
        <button type="button" data-action="spell-skip">跳过</button>
        <button type="button" data-action="slash">斩</button>
      </div>
      <div class="home-indicator"></div>
    </section>
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
        <div class="workbench-summary">点错后留在当前题，选过的错误项会标红，直到选到正确答案才进入下一题。</div>
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
  const spellInput = app.querySelector(".spell-input");
  spellInput?.addEventListener("input", (event) => {
    state.spellTyped = event.target.value;
  });
  spellInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") submitSpell();
  });
  if (!state.touchBound) {
    app.addEventListener("touchstart", handleTouchStart, { passive: true });
    app.addEventListener("touchend", handleTouchEnd, { passive: true });
    app.addEventListener("mousedown", handlePointerStart);
    app.addEventListener("mouseup", handlePointerEnd);
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
  if (action === "next-video") return goNextVideo();
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

function goNextVideo() {
  transitionTo(() => completeVideoWithoutRender(), "next", "slide");
}

function completeVideoWithoutRender() {
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
    finishGroupState();
  }
}

function previousVideo() {
  if (state.stage !== "video") return;
  if (state.videoIndex > 0) {
    transitionTo(() => {
      const word = currentWord();
      if (word) state.completed.delete(word.text);
      state.videoIndex -= 1;
    }, "previous", "slide");
    return;
  }
  showToast("已经是本组第一个视频");
}

function answerQuiz(button, selected) {
  if (state.answerLocked || button.classList.contains("wrong")) return;
  const word = currentWord();
  const isCorrect = selected === word.option;

  if (!isCorrect) {
    button.classList.add("wrong");
    state.quizAttempts.set(word.text, (state.quizAttempts.get(word.text) || 0) + 1);
    return;
  }

  state.answerLocked = true;
  state.quizAttempts.set(word.text, (state.quizAttempts.get(word.text) || 0) + 1);
  button.classList.add("correct");
  window.setTimeout(() => {
    transitionTo(() => {
      if (state.mode === "review") {
        state.completed.add(word.text);
        if (state.quizIndex < state.groupWords.length - 1) {
          state.quizIndex += 1;
          state.answerLocked = false;
        } else {
          finishGroupState(false);
        }
        return;
      }
      if (state.quizQueue.length) {
        state.currentQuizWordIndex = state.quizQueue.shift();
        state.answerLocked = false;
      } else if (state.videoIndex < state.groupWords.length - 1) {
        state.videoIndex += 1;
        state.stage = "video";
        state.answerLocked = false;
      } else {
        finishGroupState(false);
      }
    }, "next", "fade");
  }, 280);
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

function submitSpell() {
  const word = currentWord();
  if (!word) return;
  const typed = (app.querySelector(".spell-input")?.value || state.spellTyped).trim().toLowerCase();
  if (typed === word.text.toLowerCase()) {
    nextSpell();
    return;
  }
  showToast("再检查一下拼写");
}

function focusSpellInput() {
  if (state.stage !== "spell") return;
  window.setTimeout(() => {
    app.querySelector(".spell-input")?.focus({ preventScroll: true });
  }, 60);
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

function finishGroupState(addCookie = true) {
  if (addCookie) state.cookies += 1;
  state.completed = new Set(state.groupWords.map((word) => word.text));
  state.stage = "complete";
  state.answerLocked = false;
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
  const source = state.mode === "review" ? REVIEW_WORDS : WORDS;
  const distractors = source
    .filter((item) => item.option !== word.option)
    .map((item) => item.option);
  return shuffle([word.option, ...shuffle(distractors).slice(0, 3)]);
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
  handleSwipe(deltaX, deltaY);
}

function handlePointerStart(event) {
  if (event.button !== 0) return;
  state.pointerDown = true;
  state.pointerStartX = event.clientX;
  state.pointerStartY = event.clientY;
}

function handlePointerEnd(event) {
  if (!state.pointerDown) return;
  state.pointerDown = false;
  const deltaX = event.clientX - state.pointerStartX;
  const deltaY = state.pointerStartY - event.clientY;
  handleSwipe(deltaX, deltaY);
}

function handleSwipe(deltaX, deltaY) {
  if (Math.abs(deltaX) > 56 && Math.abs(deltaX) > Math.abs(deltaY)) {
    if (deltaX < 0) startReviewGroup();
    else {
      startLearnGroup(state.groupIndex);
      render();
    }
    return;
  }
  if (state.stage === "video" && deltaY > 42) goNextVideo();
  if (state.stage === "video" && deltaY < -42) previousVideo();
}

init();
