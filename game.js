'use strict';

// ===== BGM =====
const BGM_FILES = {
  tanoshii: 'music/tanoshii\u2017bgm.mp3',
  shizuka:  'music/sizuka_bgm.mp3',
  ayashii:  'music/ayashii\u2017bgm.mp3',
};
const bgmAudio = {};
Object.entries(BGM_FILES).forEach(([k, src]) => {
  const a = new Audio(src);
  a.loop = true;
  a.volume = 0.225;
  bgmAudio[k] = a;
});
let currentBgm = null;

function playBgm(name) {
  if (!name || currentBgm === name) return;
  if (currentBgm && bgmAudio[currentBgm]) {
    bgmAudio[currentBgm].pause();
    bgmAudio[currentBgm].currentTime = 0;
  }
  currentBgm = name;
  if (bgmAudio[name]) bgmAudio[name].play().catch(() => {});
}

// ===== ゲーム状態 =====
const state = { scene: 'title', T: 0, F: 0, N: 0, route: null, history: [] };
let typing = false;
let typingTimer = null;
let fullText = '';

// ===== DOM要素 =====
const $ = id => document.getElementById(id);
const el = {
  titleScreen: $('title-screen'),
  gameScreen:  $('game-screen'),
  endingScreen:$('ending-screen'),
  bgImg:       $('bg-img'),
  charaImg:    $('chara-img'),
  chapterCard: $('chapter-card'),
  chapterNum:  $('chapter-num'),
  chapterTitle:$('chapter-title'),
textbox:     $('textbox'),
  speakerName: $('speaker-name'),
  textContent: $('text-content'),
  nextBtn:   $('next-btn'),
  choiceBox:   $('choice-box'),
  choicePrompt:$('choice-prompt'),
  choiceList:  $('choice-list'),
  barT: $('bar-T'), barF: $('bar-F'), barN: $('bar-N'),
  numT: $('num-T'), numF: $('num-F'), numN: $('num-N'),
  backBtn:     $('back-btn'),
  endingBadge:  $('ending-badge'),
  endingTitle:  $('ending-title'),
  endingText:   $('ending-text'),
  endingScore:  $('ending-score'),
  endingCharaL: $('ending-chara-l'),
  endingCharaR: $('ending-chara-r'),
};

// ===== エンディング定義 =====
const ENDINGS = {
  a_true: {
    badge: '🌟',
    title: 'A-TRUE END\n「おもちのいない、僕らの新しい故郷」',
    text:
`派手なブームは去ったが、村には「れんとんに会いたい」というリピーターが絶えない。
村人たちは自分の仕事に誇りを持ち、ゲンさんは「おめぇは、おもち以上の宝物だ」と笑った。

数年後、レントーン村には活気あふれる子供たちの声と、温泉を愛する人々の笑顔が溢れている。

ゆきちゃん：「マーケティングとは、手法ではなく——誰かを幸せにしたいという『意思』そのものです」
れんとん：「うん。AIにだって、豆腐にだって負けない。俺にしかできないこと、分かった気がするよ！」`,
    score: '【マーケティング学習達成度：S】',
  },
  a_normal: {
    badge: '✨',
    title: 'A-NORMAL END\n「それぞれの歩み」',
    text:
`村は少しずつ落ち着いた賑わいを取り戻した。
おもちの代わりに温泉まんじゅうが名物になり、それなりに潤っている。

ゲンさん：「……まあ、悪くはねぇ。続けていけ」
れんとん：「はい。まだまだこれからですよ、ゲンさん」`,
    score: '【マーケティング学習達成度：B】',
  },
  a_bad: {
    badge: '🌧',
    title: 'A-BAD END\n「祭りのあとの静寂」',
    text:
`騒動から1年後、流行が去ると客足はパタリと止まった。
村には派手な看板だけが残り、村人たちは以前より深く絶望してしまった。

れんとん：「……俺、何がしたかったんだろう」
ゆきちゃん：「知名度だけを追い求めても、中身のないブランドは必ず崩れます。
信頼こそが、すべての土台だったんです」`,
    score: '【マーケティング学習達成度：C】',
  },
  b_true: {
    badge: '🌟',
    title: 'B-TRUE END\n「豆腐まみれで帰ってきた男」',
    text:
`家に帰ると、子どもたちが玄関で待っていた。
「おとうさん！ なんでそんなぐちゃぐちゃなの！？」
「ちょっと豆腐に負けてた。でも、大丈夫。帰ってきたよ」

その後のれんとんは、少し変わった。「誰のために動いているか」を考えるようになった。
守護霊たちの声は聞こえないが、風が吹くとなんとなくそばにいる気がする。

ゆきちゃん（心の中で）：「……ちゃんと帰ってきましたね。よかった」

━━ レントーン村のその後 ━━
れんとんが去った後、村は自分の足で歩き始めた。
「あいつが残してくれたものは、温泉でも民泊でもない。村が自分を信じる気持ちだ」
ゲンさんはぽつりと言い、村人たちは「れんとんならこうする」を合言葉に動いた。`,
    score: '【マーケティング学習達成度：S】',
  },
  b_normal: {
    badge: '✨',
    title: 'B-NORMAL END\n「夢だったのかもしれない」',
    text:
`豆腐まみれで家に帰ると、家族に爆笑された。
「俺、なんかすごいこと経験した気がするんだけど……夢だったのかな」

ポケットを探ると、何かが入っていた。ゲンさんからもらった秘伝のタレのレシピ。
「……夢じゃなかったのかも。まあいい。今夜はこれで麻婆豆腐を作ろう」
なんとなく前より、毎日が少し丁寧になった気がする。

━━ レントーン村のその後 ━━
れんとんが去ってしばらく、村は少しだけしぼんだ。
でも、温泉は湧き続けている。ゲンさんは今日もおもちのぬいぐるみを抱えながら囲炉裏の前に座っている。
「また変な奴が迷い込んでくるかもな」と、ゲンさんはぽつりと言った。少しだけ口の端が上がっていた。`,
    score: '【マーケティング学習達成度：B】',
  },
  b_bad: {
    badge: '🌧',
    title: 'B-BAD END\n「豆腐代、580円」',
    text:
`豆腐まみれで帰宅。翌日にはすっかり日常に戻った。
「……なんか、夢でも見てたのかな。ま、いっか」

ただ、スーパーの前を通るたびに豆腐コーナーだけは遠回りするようになった。

ゆきちゃん（心の中で、届かない声で）：「……もったいなかったですね」

━━ レントーン村のその後 ━━
れんとんが去った後、村はまた静かになった。
根が育っていなかった。村人たちは「あの人、何をしに来たんだろう」と首をかしげた。
ただゲンさんだけは「あいつは、本気だったよ」と静かに言って、おもちのぬいぐるみを棚の上に戻した。
そしてまた、囲炉裏の前でひとり芋を煮た。　次に誰かが戸を叩く日を、待つともなく待ちながら。`,
    score: '【マーケティング学習達成度：C】',
  },
};

// ===== ユーティリティ =====
function hide(...elements) { elements.forEach(e => e.classList.add('hidden')); }
function show(...elements) { elements.forEach(e => e.classList.remove('hidden')); }

function setBg(src) {
  if (!src) return;
  el.bgImg.style.opacity = 0;
  el.bgImg.src = src;
  el.bgImg.onload = () => { el.bgImg.style.opacity = 1; };
}

function setChara(src) {
  if (!src) { hide(el.charaImg); return; }
  el.charaImg.src = src;
  show(el.charaImg);
}

function updateStatus() {
  const clamp = v => Math.max(0, Math.min(100, v));
  const T = clamp(state.T), F = clamp(state.F), N = clamp(state.N);
  el.barT.style.width = T + '%';
  el.barF.style.width = F + '%';
  el.barN.style.width = N + '%';
  el.numT.textContent = T;
  el.numF.textContent = F;
  el.numN.textContent = N;
}

function applyEffect(effect) {
  if (!effect) return;
  state.T += effect.T || 0;
  state.F += effect.F || 0;
  state.N += effect.N || 0;
  updateStatus();
}

function typeText(text, onDone) {
  if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
  typing = false;
  fullText = text;
  el.textContent.textContent = '';
  hide(el.nextBtn);
  typing = true;
  let i = 0;
  typingTimer = setInterval(() => {
    el.textContent.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(typingTimer);
      typing = false;
      show(el.nextBtn);
      if (onDone) onDone();
    }
  }, 25);
}

function skipTyping() {
  if (!typing) return false;
  clearInterval(typingTimer);
  typing = false;
  el.textContent.textContent = fullText;
  show(el.nextBtn);
  return true;
}


// ===== エンディング判定 =====
function getEndingKey() {
  const T = state.T, N = state.N;
  const route = state.route;
  const isTrue   = T >= 60;
  const isBad    = T < 20 && N > 50;
  const isNormal = !isTrue && !isBad;
  if (route === 'a') return isTrue ? 'a_true' : isBad ? 'a_bad' : 'a_normal';
  if (route === 'b') return isTrue ? 'b_true' : isBad ? 'b_bad' : 'b_normal';
  return 'a_normal';
}

function showEnding() {
  const key = getEndingKey();
  const e = ENDINGS[key];
  hide(el.gameScreen);
  show(el.endingScreen);
  el.endingBadge.textContent = e.badge;
  el.endingTitle.textContent = e.title;
  el.endingText.textContent = e.text;
  el.endingScore.textContent =
    `信頼度：${Math.max(0,Math.min(100,state.T))} ／ 資金：${Math.max(0,Math.min(100,state.F))} ／ 知名度：${Math.max(0,Math.min(100,state.N))}\n${e.score}`;
  playBgm('shizuka');
  // キャラ差分・背景
  const isTrue = key.endsWith('_true');
  const isBad  = key.endsWith('_bad');
  el.endingCharaL.src = isTrue ? 'chara/renton_smile.png' : isBad ? 'chara/renton_sad.png' : 'chara/renton_nomal.png';
  el.endingCharaR.src = isTrue ? 'chara/gen_smile.png' : 'chara/gen_nomal.png';
  const bgFile = isTrue ? 'haikei/true_end.jpeg' : isBad ? 'haikei/bad_end.jpeg' : 'haikei/nomal_end.jpeg';
  document.getElementById('ending-bg').style.backgroundImage = `url('${bgFile}')`;
}

// ===== シーン表示 =====
function pushHistory(id) {
  state.history.push({ id, T: state.T, F: state.F, N: state.N });
  if (state.history.length > 50) state.history.shift();
  // 戻るボタン表示制御
  if (state.history.length > 0) show(el.backBtn);
}

function goBack() {
  if (state.history.length === 0) return;
  if (typingTimer) { clearInterval(typingTimer); typingTimer = null; }
  typing = false;
  const prev = state.history.pop();
  state.T = prev.T; state.F = prev.F; state.N = prev.N;
  updateStatus();
  if (state.history.length === 0) hide(el.backBtn);
  _renderScene(prev.id);
}

function showScene(id) {
  pushHistory(state.scene);
  _renderScene(id);
}

function _renderScene(id) {
  state.scene = id;

  // エンディング分岐ダミーシーン
  if (id === '__end_a__') { state.route = 'a'; showEnding(); return; }
  if (id === '__end_b__') { state.route = 'b'; showEnding(); return; }

  const scene = SCENES[id];
  if (!scene) { console.error('シーン不明:', id); return; }

  // 全UI非表示
  hide(el.chapterCard, el.choiceBox);
  show(el.textbox);

  setBg(scene.bg);
  if (scene.bgm) playBgm(scene.bgm);

  switch (scene.type) {

    case 'chapter':
      hide(el.textbox);
      setChara(null);
      el.chapterNum.textContent   = scene.chapterNum;
      el.chapterTitle.textContent = '';
      show(el.chapterCard);
      break;

case 'choice':
      hide(el.textbox);
      setChara(scene.chara);
      el.choicePrompt.textContent = scene.text;
      el.choiceList.innerHTML = '';
      scene.choices.forEach(ch => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.innerHTML = `<span class="choice-label">${ch.label}</span><span>${ch.text}</span>`;
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          applyEffect(ch.effect);
          showScene(ch.next);
        });
        el.choiceList.appendChild(btn);
      });
      show(el.choiceBox);
      break;

    default: // 'talk'
      setChara(scene.chara);
      el.speakerName.textContent = scene.speaker || '';
      el.speakerName.style.display = scene.speaker ? 'inline-block' : 'none';
      typeText(scene.text);
      break;
  }
}

// ===== クリックイベント =====
$('start-btn').addEventListener('click', (e) => {
  e.stopPropagation();
  state.history = [];
  hide(el.titleScreen, el.backBtn);
  show(el.gameScreen);
  updateStatus();
  _renderScene('c1_chapter');
});

el.gameScreen.addEventListener('click', () => {
  const scene = SCENES[state.scene];
  if (!scene) return;

  if (scene.type === 'choice') return;

  if (scene.type === 'chapter') {
    showScene(scene.next);
    return;
  }

  // talkシーン
  if (skipTyping()) return; // タイプ中ならスキップ
  if (scene.next) showScene(scene.next);
});


el.nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  const scene = SCENES[state.scene];
  if (!scene) return;
  if (skipTyping()) return;
  if (scene.next) showScene(scene.next);
});

el.backBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  goBack();
});

// ===== BGM ON/OFF & 音量 =====
let bgmMuted = false;
$('bgm-toggle').addEventListener('click', (e) => {
  e.stopPropagation();
  bgmMuted = !bgmMuted;
  Object.values(bgmAudio).forEach(a => { a.muted = bgmMuted; });
  const btn = $('bgm-toggle');
  btn.textContent = bgmMuted ? '🔇' : '🔊';
  btn.classList.toggle('muted', bgmMuted);
});
$('bgm-volume').addEventListener('input', (e) => {
  e.stopPropagation();
  const vol = e.target.value / 100;
  Object.values(bgmAudio).forEach(a => { a.volume = vol; });
});

$('btn-retry').addEventListener('click', () => {
  state.T = 0; state.F = 0; state.N = 0; state.route = null; state.history = [];
  el.endingCharaL.src = '';
  el.endingCharaR.src = '';
  hide(el.endingScreen, el.backBtn);
  show(el.titleScreen);
  hide(el.gameScreen);
});
