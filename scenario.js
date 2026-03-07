'use strict';

// 背景画像パス
const BG = {
  supermarket: 'haikei/supermarket.jpeg',
  kawara:      'haikei/sougennokawara.jpeg',
  iriguchi:    'haikei/muranoiriguchi.jpg',
  hiroba_s:    'haikei/sutareta_murahiroba.jpeg',
  kitchen:     'haikei/genkitchen.jpeg',
  ichiba:      'haikei/ichiba.jpeg',
  onsen:       'haikei/borokoya_onsen.jpeg',
  yado:        'haikei/nigiwaionsenyado.png',
  hiroba_n:    'haikei/murahirobanigiwaiyoru.jpeg',
  yuugure:     'haikei/isekaiyuugure.jpeg',
  omochien:    'haikei/omochien.jpeg',
  omochinui:   'haikei/omochinui.jpeg',
};

// キャラクター画像パス
const C = {
  renton_n:   '../chara/renton_nomal.png',
  renton_s:   '../chara/renton_smile.png',
  renton_sad: '../chara/renton_sad.png',
  yuki_n:     '../chara/yuki_nomal.png',
  yuki_s:     '../chara/yuki_smile.png',
  yuki_sad:   '../chara/yuki_sad.png',
  rika_n:     '../chara/rika_nomal.png',
  rika_s:     '../chara/rika_smile.png',
  rika_sad:   '../chara/rika_sad.png',
  neru_n:     '../chara/neru_nomal.png',
  neru_s:     '../chara/neru_smile.png',
  neru_sad:   '../chara/neru_sad.png',
  gen_n:      '../chara/gen_nomal.png',
  gen_s:      '../chara/gen_smile.png',
  gen_od:     '../chara/gen_odoroki.png',
  sae_n:      '../chara/sae_nomal.png',
  sae_sh:     '../chara/sae_shinpai.png',
  sagishi:    '../chara/sagishi.png',
  elf_n:      '../chara/elf_nomal.png',
  elf_k:      '../chara/elf_kandou.png',
};

// ===== シーンデータ =====
// type: 'talk' | 'chapter' | 'lesson' | 'choice' | 'ending'
// talk: bg, chara(null=非表示), speaker(''), text, next
// chapter: bg, chapterNum, chapterTitle, next
// lesson: bg, lessonHeader, lessonBody, next
// choice: bg, chara, speaker, text, choices:[{label,text,effect:{T,F,N},next}]
// ending: badge, endingTitle, endingText, scoreText

const SCENES = {

  // ==================== 第1章 ====================
  c1_chapter: {
    type: 'chapter', bgm: 'shizuka', bg: BG.supermarket,
    chapterNum: '第 1 章',
    chapterTitle: '豆腐の角に打たれて、異世界',
    next: 'c1_01'
  },
  c1_01: {
    type: 'talk', bg: BG.supermarket, chara: null,
    speaker: '', text: '仕事帰り、閉店間際のスーパー。\n半額シールが貼られる音が響く。',
    next: 'c1_02'
  },
  c1_02: {
    type: 'talk', bg: BG.supermarket, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'はぁ……。今日も一日、終わったぁ……。\n上司にもチクチク言われるし、子どもたちの顔もちゃんと見てあげられてないし……',
    next: 'c1_03'
  },
  c1_03: {
    type: 'talk', bg: BG.supermarket, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'お、やった！「幻の極・堅豆腐」が半額じゃん！\nこれで今夜は麻婆豆腐だ……',
    next: 'c1_04'
  },
  c1_04: {
    type: 'talk', bg: BG.supermarket, chara: C.renton_n,
    speaker: '',
    text: 'ぼんやりしながら棚の前でしゃがみ込み、豆腐を手に取ろうとしたその瞬間——\n\n【ゴン。】\n\n棚の角。豆腐の角。どっちが当たったかは定かでない。',
    next: 'c1_05'
  },
  c1_05: {
    type: 'talk', bg: BG.supermarket, chara: C.renton_sad,
    speaker: 'れんとん（心の声）',
    text: '……これ、死ぬやつ……？\n豆腐で……？　もっとやれること、あったのに……豆腐で……',
    next: 'c1_06'
  },
  c1_06: {
    type: 'talk', bg: BG.supermarket, chara: null,
    speaker: '',
    text: '── 享年、享年は秘密。　死因：豆腐。 ──',
    next: 'c1_07'
  },
  c1_07: {
    type: 'talk', bg: BG.kawara, chara: null,
    speaker: '',
    text: '…カチ、カチ、と時計の針のような音。\n真っ白な世界。川のせせらぎ。',
    next: 'c1_08'
  },
  c1_08: {
    type: 'talk', bg: BG.kawara, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'ちょっと、れんとんさん。いつまで寝てるんですか。\nやっとしゃべれた！ ずっとそばにいたのに！',
    next: 'c1_09'
  },
  c1_09: {
    type: 'talk', bg: BG.kawara, chara: C.rika_s,
    speaker: 'りかちゃん',
    text: 'やっとおしゃべりできる！\n私はりかちゃん。ずっとれんとんさんのそばにいたんだよ。よろしくね！',
    next: 'c1_10'
  },
  c1_10: {
    type: 'talk', bg: BG.kawara, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: 'わたしはねるちゃん！ ようやく声届いた〜！\nとりあえず動けそう？ なんか近くに村があるみたいだから行ってみよ！',
    next: 'c1_11'
  },
  c1_11: {
    type: 'talk', bg: BG.kawara, chara: C.renton_sad,
    speaker: 'れんとん',
    text: 'え？え？守護霊……？ずっとそばに……？\n全然気づかなかった……。さて、ここがどこなのかもわからないし何をどうすれば……',
    next: 'c1_12'
  },
  c1_12: {
    type: 'talk', bg: BG.iriguchi, chara: C.renton_n,
    speaker: '',
    text: 'しばらく歩くと、古びた木の道標が立っていた。\n\n「← レントーン村　10km」',
    next: 'c1_13'
  },
  c1_13: {
    type: 'talk', bg: BG.iriguchi, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'レントーン村……？\n俺の名前、れんとんなんだけど……。なんか他人事に思えないな、この村',
    next: 'c1_14'
  },
  c1_14: {
    type: 'talk', bg: BG.iriguchi, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: '縁かもね！ とりあえず行ってみよ！',
    next: 'c1_15'
  },
  c1_15: {
    type: 'talk', bg: BG.hiroba_s, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……見かけない顔だな。旅人か？\n（じろじろ見て）……なんか妙な気配がする。転生者か',
    next: 'c1_16'
  },
  c1_16: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'て、転生者……あ、はい、たぶん、そうです……\n豆腐で死んで気づいたらここに……',
    next: 'c1_17'
  },
  c1_17: {
    type: 'talk', bg: BG.hiroba_s, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '豆腐。\n（長い沈黙）\n……まあいい。入れ。ちょうど芋を煮すぎたところだ',
    next: 'c1_17a'
  },
  c1_17a: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: 'あらあら！ 転生者さん？ ゲン、これってほんと？',
    next: 'c1_17b'
  },
  c1_17b: {
    type: 'talk', bg: BG.hiroba_s, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……知らん。豆腐で死んだとか言ってる',
    next: 'c1_17c'
  },
  c1_17c: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: '豆腐で死んだ！？ まぁ……人によってはね。\n入れてあげてよ、ゲンさん',
    next: 'c1_18'
  },
  c1_18: {
    type: 'talk', bg: BG.kitchen, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'う、うまい……！ 染みる……。この芋の煮っころがしうますぎるよ！\nおじいさん、ありがとうございます。俺、れんとんって言います',
    next: 'c1_19'
  },
  c1_19: {
    type: 'talk', bg: BG.omochinui, chara: null,
    speaker: 'ゲンさん',
    text: '礼にゃ及ばん。どうせひとりじゃ食いきれねぇ量だったんだ。\n……見ての通り、この村にはもう何もありゃせん。昔はな、広場の噴水を囲んで、観光客たちが「おもち」の話で盛り上がったもんだがな……',
    next: 'c1_20'
  },
  c1_20: {
    type: 'talk', bg: BG.omochien, chara: null,
    speaker: 'さえおばちゃん',
    text: 'おもちっていうのはね——まんまるの頭に真っ白なからだ、ちょこちょこ二足歩行する不思議な生き物よ。\n見たら絶対好きになるやつ。それはそれはもう……',
    next: 'c1_21'
  },
  c1_21: {
    type: 'talk', bg: BG.omochinui, chara: null,
    speaker: 'ゲンさん',
    text: '……大人の事情で、原産国に返すことになった。\nそれからこの村は、こうなった',
    next: 'c1_22'
  },
  c1_22: {
    type: 'talk', bg: BG.kitchen, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'おじさん！ 俺、決めました。\nこの村をもう一度、おもちがいなくても笑える村にしてみせます！',
    next: 'c1_23'
  },
  c1_23: {
    type: 'talk', bg: BG.kitchen, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……おめぇ、バカか？\n豆腐みたいなツラして、何ができるってんだ',
    next: 'c1_24'
  },
  c1_24: {
    type: 'talk', bg: BG.kitchen, chara: C.renton_s,
    speaker: 'れんとん',
    text: '豆腐をなめないでください！\n……あ、でも豆腐には一度負けてるか',
    next: 'lesson_3c'
  },

  lesson_3c: {
    type: 'talk', bg: BG.hiroba_s, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'まずは現状を整理しましょ。「3C分析」です！\nCustomer（誤が買うのか）・Competitor（競合は誤か）・Company（自社の強みは）の三つで現状を把握します',
    next: 'lesson_3c_2'
  },
  lesson_3c_2: {
    type: 'talk', bg: BG.hiroba_s, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'レントーン村に当てはめると——\nCustomer（お客さん）：おもちに会いに来た旅人\nCompetitor（競合）：隣の「ドラゴン牧場」\nCompany（自社の強み）：温泉と豊かな自然、です！',
    next: 'lesson_3c_3'
  },
  lesson_3c_3: {
    type: 'talk', bg: BG.hiroba_s, chara: C.rika_n,
    speaker: 'りかちゃん',
    text: '強みを知らずに動いても空振りします。まず自分たちを知ることが第一歩！',
    next: 'lesson_3c_4'
  },
  lesson_3c_4: {
    type: 'talk', bg: BG.hiroba_s, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: 'よし、分かった！ じゃあさっそく動こ！',
    next: 'c1_choice'
  },

  c1_choice: {
    type: 'choice', bg: BG.hiroba_s, chara: C.renton_n,
    speaker: '', text: 'Q：村の状況を理解するために、まず何をしますか？',
    choices: [
      { label: 'A', text: '村人全員に話を聞いて回り、自慢や思い出を掘り起こす', effect: {T:10, F:0, N:0}, next: 'c1_a01' },
      { label: 'B', text: '広場で現代のタレを使った「異世界風焼き芋」を実演販売する', effect: {T:2, F:10, N:5}, next: 'c1_b01' },
      { label: 'C', text: '腰の曲がったお年寄りに無料の「異世界れんとん体操」を教える', effect: {T:5, F:0, N:10}, next: 'c1_c01' },
    ]
  },

  c1_a01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_s,
    speaker: 'れんとん',
    text: '一晩中、ゲンさんの隣に座っておもちの話と村の昔話に耳を傾けた。\n「へぇ……おもちって、そんなに食いしん坊だったんですか」',
    next: 'c1_a01b'
  },
  c1_a01b: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: '次の日はあたしにも聞きにきてくれたわ。\n「おもちがいた頃、一番好きだった場所はどこですか？」って。\n……広場の噴水のそばで、みんなでおやつ食べてたのよねえ。懐かしい',
    next: 'c1_a01c'
  },
  c1_a01c: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_n,
    speaker: 'れんとん',
    text: '村の子どもたちにも聞いてみた。\n「おもちってどんなだった？」\n「ふわふわで、あったかくて、なんかずっとそばにいたくなる感じ」\n……なるほど。それ、おもちじゃなくてもできるかもしれない',
    next: 'c1_a02'
  },
  c1_a02: {
    type: 'talk', bg: BG.kitchen, chara: C.gen_s,
    speaker: 'ゲンさん',
    text: 'おめぇ、いい聞き役じゃねぇか。',
    next: 'c1_merge'
  },

  c1_b01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'はい、寄ってらっしゃい見てらっしゃい！\n異世界風・ハニー醤油ポテトだよ！',
    next: 'c1_b02'
  },
  c1_b02: {
    type: 'talk', bg: BG.hiroba_s, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……商売っ気の強ぇ奴だ。\nまあ、村に活気が出てきたのは認める',
    next: 'c1_merge'
  },

  c1_c01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'さあ皆さん！ 固まった体とおさらばしましょう！\n異世界れんとん体操、第一！',
    next: 'c1_c02'
  },
  c1_c02: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: 'あははは！ なんなのこの人！ 面白すぎる！\n（でも体が楽になった……）',
    next: 'c1_merge'
  },

  c1_merge: {
    type: 'talk', bg: BG.onsen, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'あれ……あの小屋、湯気が出てる……？\nのぞいてみると……これ温泉だ！ しかも肌がツルツルになるやつ！',
    next: 'c1_25'
  },
  c1_25: {
    type: 'talk', bg: BG.onsen, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'おもちがいなくなったことで、皆さんが忘れていた宝物……\n「極上の源泉」。これが最初の武器になりそうですね',
    next: 'c2_chapter'
  },

  // ==================== 第2章 ====================
  c2_chapter: {
    type: 'chapter', bgm: 'tanoshii', bg: BG.onsen,
    chapterNum: '第 2 章',
    chapterTitle: 'ターゲットを絞れ！温泉街のリブランディング',
    next: 'c2_01'
  },
  c2_01: {
    type: 'talk', bg: BG.onsen, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: 'ここか……。おもちがいた頃は足湯として使ってた場所だ。\nお湯だけは今もコンコンと湧いてやがる',
    next: 'c2_02'
  },
  c2_02: {
    type: 'talk', bg: BG.onsen, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'これを修理して村の新しい目玉にしましょうよ！\nゲンさん、絶対にいけます！',
    next: 'c2_03'
  },

  c2_03: {
    type: 'talk', bg: BG.onsen, chara: C.renton_n,
    speaker: 'れんとん',
    text: '……ゲンさん、ここ腐ってますね。板、替えましょう！\n（ガン！）……っ！ 指、挟んだ……！',
    next: 'c2_04'
  },
  c2_04: {
    type: 'talk', bg: BG.onsen, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……おめぇ、本当に不器用だな。（板を取り上げて無言で打ち始める）\nこっちは俺がやる。おめぇは湯の流れを確認してこい',
    next: 'c2_05'
  },
  c2_05: {
    type: 'talk', bg: BG.onsen, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: 'じゃあ、あたしが最初に試してみるわ。\n……（しばらくして）なにこれ……すごい。じんわり、体の芯まで温まってくる……',
    next: 'c2_06'
  },
  c2_06: {
    type: 'talk', bg: BG.onsen, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'お湯の泉質は最高です。でも「誰のための温泉か」を決めないと、せっかくの宝が埋もれたままになります。\n誰に届けたいかを、まず絞りましょう',
    next: 'lesson_stp'
  },
  lesson_stp: {
    type: 'talk', bg: BG.onsen, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: '温泉があるだけでは客は来ません。重要なのが「STP分析」です！',
    next: 'lesson_stp_2'
  },
  lesson_stp_2: {
    type: 'talk', bg: BG.onsen, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'S（Segmentation）：市場を分類する。温泉好きを「癌やし派」「美肌派」「エンタメ派」などに分類\nT（Targeting）：その中から、一番刺さりそうな層を一つ選ぶ\nP（Positioning）：競合との差別化。ドラゴン牧場にない「おもちの記憶と伝統温泉」を打ち出すこと！',
    next: 'lesson_stp_3'
  },
  lesson_stp_3: {
    type: 'talk', bg: BG.onsen, chara: C.rika_n,
    speaker: 'りかちゃん',
    text: '大事なのは「誰でもいいから来て」と言わないこと。\nターゲットを一人に絞るくらいがちょうどいいんです',
    next: 'c2_choice'
  },

  c2_choice: {
    type: 'choice', bg: BG.onsen, chara: C.renton_n,
    speaker: '', text: 'Q：温泉をどんなコンセプトで売り出しますか？',
    choices: [
      { label: 'A', text: 'おもちを懐かしむ富裕層向け、隠れ家高級スパ', effect: {T:2, F:20, N:5}, next: 'c2_a01' },
      { label: 'B', text: '金髪美少女キャラ推し！アニオタ・コスプレ特化の温泉宿', effect: {T:5, F:10, N:25}, next: 'c2_b01' },
      { label: 'C', text: '理学療法士の技を活かした「世界一腰痛が治るガチ湯治場」', effect: {T:20, F:5, N:2}, next: 'c2_c01' },
    ]
  },

  c2_a01: {
    type: 'talk', bg: BG.yado, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'いらっしゃいませ……（緊張で声がうわずる）\n……えっと、その、おもちは大変かわいい生き物でして……ふふ……',
    next: 'c2_a02'
  },
  c2_a02: {
    type: 'talk', bg: BG.yado, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: 'れんとんさん、高級感を出そうとするのに笑いをとってどうするの！\n……でも、お客さんは「面白い宿だ」って気に入ってくれたみたいよ',
    next: 'c2_a03'
  },

  c2_a03: {
    type: 'talk', bg: BG.yado, chara: C.renton_s,
    speaker: 'れんとん',
    text: '帰り際に客が言ってくれました。\n「あんた面白い宿主だな。また来るよ」……また来る。その一言が、すごく嬉しかった',
    next: 'c2_all_merge'
  },
  c2_b01: {
    type: 'talk', bg: BG.yado, chara: C.renton_s,
    speaker: 'れんとん',
    text: '私物のフィギュアを持ち込み、温泉の壁に金髪キャラの絵を掲げ……\n異世界版SNSで「聖地」として発信！',
    next: 'c2_b02'
  },
  c2_b02: {
    type: 'talk', bg: BG.yado, chara: C.gen_od,
    speaker: 'ゲンさん',
    text: '……なんだこの騒ぎは。\n（コスプレイヤーが村に押し寄せる様子を見て目が点になる）',
    next: 'c2_b03'
  },

  c2_b03: {
    type: 'talk', bg: BG.yado, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: 'トレンド1位です！「本物のエルフに会えるかも」「おもちの聖地に行きたい」って！\nれんとんさん、狙ってないのが逆にすごい……',
    next: 'c2_all_merge'
  },
  c2_c01: {
    type: 'talk', bg: BG.yado, chara: C.renton_s,
    speaker: 'れんとん',
    text: '白衣に近い服を着て「腰痛改善プログラム」を開始！\n温泉とリハビリを組み合わせた世界初のメニューです！',
    next: 'c2_c02'
  },
  c2_c02: {
    type: 'talk', bg: BG.yado, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: 'えーもう、「数年ぶりに熟睡できた」って旅人が涙ながらに帰っていくのよ。\nリピーターが止まらないわ！',
    next: 'c2_c03'
  },

  c2_c03: {
    type: 'talk', bg: BG.yado, chara: C.renton_n,
    speaker: 'れんとん（心の声）',
    text: '10年悩んでた腰が、初めて楽になったって……泣いてた。\n俺がここにいる意味、ちゃんとあるんだ。そう思えた瞬間でした',
    next: 'c2_all_merge'
  },
  c2_all_merge: {
    type: 'talk', bg: BG.hiroba_n, chara: C.gen_s,
    speaker: 'ゲンさん',
    text: '……れんとん。今夜、村のみんなで飯でも食うか。\nおめぇが来てから、久しぶりにこの村が笑ってる気がする',
    next: 'c2_merge'
  },
  c2_merge: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sagishi,
    speaker: '謎の商人',
    text: 'いやぁ、活気が出てきましたねぇ、レントーン村！\n実は私、「おもち利権」を扱っている者なのですが……格安でおもちを買い戻す方法がありましてね（ニヤリ）',
    next: 'c2_end_renton'
  },
  c2_end_renton: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'えっ！？ おもちを買い戻せるんですか！？ ほんとに！？',
    next: 'c2_end'
  },
  c2_end: {
    type: 'talk', bg: BG.hiroba_s, chara: C.yuki_sad,
    speaker: 'ゆきちゃん',
    text: '……れんとんさん、嫌な予感がします。\n「うまい話」には、必ず裏がありますよ',
    next: 'c3_chapter'
  },

  // ==================== 第3章 ====================
  c3_chapter: {
    type: 'chapter', bgm: 'ayashii', bg: BG.hiroba_s,
    chapterNum: '第 3 章',
    chapterTitle: '詐欺師襲来！どん底からの信用回復',
    next: 'c3_01'
  },
  c3_01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sagishi,
    speaker: '詐欺師',
    text: '村の準備金を全額投入すれば、特例でおもちをこの村に戻せるんですよ。\n……ただし、枠はあと一つ。どうします？',
    next: 'c3_02'
  },

  c3_02: {
    type: 'talk', bg: BG.hiroba_s, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……おもちが、戻ってくる。\n（しわだらけの手が、かすかに震えている）',
    next: 'c3_03'
  },
  c3_03: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_n,
    speaker: 'れんとん（心の声）',
    text: '村の広場に集まったみんなの顔が、希望と不安で入り混じっている。\nゲンさんの目を見た……この人は、本当に会いたいんだ。おもちに。\n（でも俺には、この話がどうしても胡散臭く聞こえる）',
    next: 'lesson_risk'
  },
  lesson_risk: {
    type: 'talk', bg: BG.hiroba_s, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: '相手の素性が不明な段階で大金を動かすのは危険です。これが「リスクマネジメント」の欠如です。\n詐欺被害なら、素性確認・少額テスト・第三者照合が大切です',
    next: 'lesson_risk_2'
  },
  lesson_risk_2: {
    type: 'talk', bg: BG.hiroba_s, chara: C.rika_n,
    speaker: 'りかちゃん',
    text: 'ブランドとは積み上げた「信頼」という資産。これを「ブランド・エクイティ」と言います。\n一度壊れた信頼は、回復に何年もかかります',
    next: 'lesson_risk_3'
  },
  lesson_risk_3: {
    type: 'talk', bg: BG.hiroba_s, chara: C.neru_sad,
    speaker: 'ねるちゃん',
    text: 'でも……もし本当におもちが戻ったら……',
    next: 'c3_choice'
  },

  c3_choice: {
    type: 'choice', bg: BG.hiroba_s, chara: C.renton_n,
    speaker: '', text: 'Q：怪しい商人の「おもち利権」にどう対応しますか？',
    choices: [
      { label: 'A', text: '夢に賭ける！村の準備金を全額投入しておもち復活を目指す', effect: {T:-30, F:-50, N:5}, next: 'c3_a01' },
      { label: 'B', text: '「まず証拠を見せてください」と食い下がり、男の正体を調査する', effect: {T:5, F:0, N:0}, next: 'c3_b01' },
      { label: 'C', text: '「その上層部の人と直接会わせてください」と懐に飛び込む', effect: {T:20, F:0, N:10}, next: 'c3_c01' },
    ]
  },

  c3_a01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_sad,
    speaker: 'れんとん',
    text: '翌朝、商人はドロン。村の金庫は空っぽ。\nみんな、ごめん……おもち、戻ってこない……',
    next: 'c3_a01b'
  },
  c3_a01b: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sae_sh,
    speaker: 'さえおばちゃん',
    text: 'れんとんさん……みんなの準備金が……。\n（涙をこらえながら）ちゃんと、責任とってよね。あんたを信じたんだから',
    next: 'c3_a01c'
  },
  c3_a01c: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_sad,
    speaker: 'れんとん',
    text: '一軒一軒、頭を下げて回りました。\n誰も怒鳴らなかった。静かに「分かった」と言ってくれる人ばかりだった。\nその静かさが、怒号より何倍もつらかった',
    next: 'c3_a02'
  },
  c3_a02: {
    type: 'talk', bg: BG.hiroba_s, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……おめぇのバカさは、おもち並みだな。\nまた一から稼ぐしかねぇべ',
    next: 'c3_merge'
  },

  c3_b01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: '夜、商人の後をこっそり尾行しました。\n……隣の「ドラゴン牧場」の裏口で密会している現場を目撃！ 会話の記録も取りました',
    next: 'c3_b01b'
  },
  c3_b01b: {
    type: 'talk', bg: BG.hiroba_s, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: '翌朝、証拠を見せながら商人に向き合いました。\n「ドラゴン牧場の工作員ですね」と静かに言うと——男の顔色が変わりました。\n黙って荷物をまとめ、逃げていきました',
    next: 'c3_b02'
  },
  c3_b02: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_s,
    speaker: 'れんとん',
    text: '証拠を突きつけたら、商人は逃げ去りました。\nよかった……危なかった……',
    next: 'c3_merge'
  },

  c3_c01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'おじさんも、刺さるようなつらいことがあったんですよね……？\n（身の上話を聞き始める）',
    next: 'c3_c02'
  },
  c3_c02: {
    type: 'talk', bg: BG.hiroba_s, chara: C.sagishi,
    speaker: '詐欺師',
    text: '……なぜ分かった。（毒気を抜かれて）\nお金は少し受け取ったが……重要なヒントを置いていこう',
    next: 'c3_merge'
  },

  c3_merge: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_s,
    speaker: 'れんとん',
    text: '俺のこの手と、みんなへの気持ちは消えてない！ もう一度、泥臭くやり直すぞ！',
    next: 'c3_merge2'
  },
  c3_merge2: {
    type: 'talk', bg: BG.hiroba_s, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'その意気です。次は、急増する客への宿泊場所という課題を解決しましょう。\n第4章「民泊大作戦」の始まりです！',
    next: 'c3_merge3'
  },

  c3_merge3: {
    type: 'talk', bg: BG.hiroba_s, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……一つ聞いていいか、れんとん。\nおめぇ、なんでそんなにこの村のためにがんばれるんだ？ おめぇにとって、ここは他人の村だろうが',
    next: 'c3_merge4'
  },
  c3_merge4: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_n,
    speaker: 'れんとん',
    text: '……正直、最初は「困った人がいるから助ける」くらいの気持ちでした。\nでも今は違う。ゲンさんの背中を見てると、なんか……置いて帰れないんですよ',
    next: 'c4_chapter'
  },
  // ==================== 第4章 ====================
  c4_chapter: {
    type: 'chapter', bgm: 'tanoshii', bg: BG.yado,
    chapterNum: '第 4 章',
    chapterTitle: 'カオスな大家族と民泊大作戦',
    next: 'c4_01'
  },
  c4_01: {
    type: 'talk', bg: BG.yado, chara: C.renton_n,
    speaker: 'れんとん',
    text: '温泉が評判を呼んできたのに……村にまともな宿が一軒もない！\n観光客が「泊まる場所がないから帰ります」って……',
    next: 'c4_02'
  },
  c4_02: {
    type: 'talk', bg: BG.yado, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'そうだ！ 空き家がいっぱいあるじゃん！\n民泊、やろう！',
    next: 'c4_03'
  },

  c4_03: {
    type: 'talk', bg: BG.yado, chara: C.sae_n,
    speaker: 'さえおばちゃん',
    text: 'うちの裏の離れ、もう20年使ってないけど……掃除すれば使えるかしら。\n母の形見の桐ダンスも、旅人に使ってもらえるなら悪くないわね',
    next: 'c4_04'
  },
  c4_04: {
    type: 'talk', bg: BG.yado, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'ゲンさんが最初に「俺んとこの蔵も使え」と言い出した。\nそしたら次々と——「うちも」「ここもどうだ」って声が上がってきて。\n気づいたら村全体が一つの大きな宿になってた',
    next: 'lesson_insight'
  },
  lesson_insight: {
    type: 'talk', bg: BG.yado, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'ただ「古い家に泊める」だけでは不満が出ます。ここで重要なのが「ユーザー・インサイト」の把握です',
    next: 'lesson_insight_2'
  },
  lesson_insight_2: {
    type: 'talk', bg: BG.yado, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'お客さんが言葉にしていないけど、行動の奥に隐れている「本当の気持ち」のことです。\n表面のニーズ「泊まる場所がほしい」の奥には——「ここでしか味わえない体験と人の温かさがほしい」があります',
    next: 'lesson_insight_3'
  },
  lesson_insight_3: {
    type: 'talk', bg: BG.yado, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: 'れんとんさんの「大家族パパ」としての経験、ここで活きますよ！',
    next: 'lesson_insight_4'
  },
  lesson_insight_4: {
    type: 'talk', bg: BG.yado, chara: C.rika_s,
    speaker: 'りかちゃん',
    text: '家全体を一つのエンタメにしちゃいましょう！',
    next: 'c4_choice'
  },

  c4_choice: {
    type: 'choice', bg: BG.yado, chara: C.renton_n,
    speaker: '', text: 'Q：どんなスタイルの民泊にしますか？',
    choices: [
      { label: 'A', text: 'れんとんがパパ役！ドタバタホームステイ「賑やか大家族プラン」', effect: {T:25, F:5, N:10}, next: 'c4_a01' },
      { label: 'B', text: 'プロの技で快眠保証。疲れた旅人に特化した「癒やしの湯治プラン」', effect: {T:15, F:10, N:0}, next: 'c4_b01' },
      { label: 'C', text: '全室Wi-Fi完備＆推しグッズだらけ。「オタクの館プラン」', effect: {T:0, F:10, N:25}, next: 'c4_c01' },
    ]
  },

  c4_a01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_s,
    speaker: 'れんとん',
    text: '飯だぞー！ 風呂入れよー！\n（村の子供たちを集めて世話を焼きまくる）',
    next: 'c4_a01b'
  },
  c4_a01b: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん',
    text: '旅人の子どもが転んで膝を擦りむいた。\n消毒して包帯を巻いてやると「おじさん、ここにずっといてよ」って言った。\n……ずるいなあ。そういうこと言われると、弱いんだよなあ',
    next: 'c4_a02'
  },
  c4_a02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.rika_s,
    speaker: 'りかちゃん',
    text: '「また実家に帰ってきてもいい？」とリピーターが続出！\nこれぞ情緒的価値——スペックじゃなく、感情で繋がるブランドです',
    next: 'c4_merge'
  },

  c4_b01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_s,
    speaker: 'れんとん',
    text: '客一人ひとりの姿勢をチェックして最適な枕を藁で自作！\n「数年ぶりに熟睡できた」という旅人が続出しました',
    next: 'c4_b02'
  },
  c4_b02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_s,
    speaker: 'ゆきちゃん',
    text: '機能的価値の提供ですね。\n確実なベネフィットがあるから価格競争に巻き込まれません',
    next: 'c4_merge'
  },

  c4_c01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'この作品の3巻がいかに神かっていう話なんですけど聞きますか！？\n（夜な夜なオタク談義が始まる）',
    next: 'c4_c02'
  },
  c4_c02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: '「オタクが安心して泊まれる宿」としてSNSで拡散！\n共通の推しを持つ旅人が異世界中から集まってます！',
    next: 'c4_merge'
  },

  c4_merge: {
    type: 'talk', bg: BG.hiroba_n, chara: C.gen_s,
    speaker: 'ゲンさん',
    text: '……れんとん。おめぇが来てから、この村の夜に明かりが増えたな。\nおもちがいた頃とは違うが……これはこれで、悪くねぇ',
    next: 'c5_chapter'
  },

  // ==================== 第5章 ====================
  c5_chapter: {
    type: 'chapter', bgm: 'tanoshii', bg: BG.hiroba_n,
    chapterNum: '第 5 章',
    chapterTitle: '金髪エルフと聖地巡礼',
    next: 'c5_01'
  },
  c5_01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_n,
    speaker: 'エルフのリーダー',
    text: 'ふん、ただの寂れた村ね。おもちがいた頃はまだしも……\n今のこの村に、私たちが滞在する価値があるかしら？',
    next: 'c5_02'
  },
  c5_02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん（心の声）',
    text: 'うわぁ、めっちゃ性格キツい……。\nあ、でも、この金髪……！ なんかアニメで見たような……',
    next: 'c5_03'
  },

  c5_03: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'すみません、よければ村をご案内しますよ！',
    next: 'c5_03b'
  },
  c5_03b: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_n,
    speaker: 'エルフのリーダー',
    text: '……お断り。寂れた村の案内など、時間の無駄ですわ',
    next: 'c5_03c'
  },
  c5_03c: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん（心の声）',
    text: 'バッサリ……。\nでも、なんであの子、泣きそうな顔してたんだろう',
    next: 'c5_04'
  },
  c5_04: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: '（小声で）れんとんさん、エルフ族はプライドが高い種族です。\n正面から攻めても壁を作るだけ。「刺さる入り口」を見つけることが大切です',
    next: 'lesson_niche'
  },
  lesson_niche: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: '全員に好かれようとするのはやめましょう。万人に受けるサービスは、誰の心にも残りません',
    next: 'lesson_niche_2'
  },
  lesson_niche_2: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'ニッチ戦略とは、大手が入ってこない小さな市場を、深く丁寧に攻める戦略です。\n「量より質」「広く浅くより、狭く深く」が合言葉！',
    next: 'lesson_niche_3'
  },
  lesson_niche_3: {
    type: 'talk', bg: BG.hiroba_n, chara: C.rika_n,
    speaker: 'りかちゃん',
    text: '特定の属性を持つ人たちだけに、猎烈に刺さる世界観を提示するんです。\nれんとんさん、あなたの得意分野じゃないですか？',
    next: 'lesson_niche_4'
  },
  lesson_niche_4: {
    type: 'talk', bg: BG.hiroba_n, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: '金髪、ツンデレ、エルフ……！\nれんとんさんの脳内データベースが火を吹く時ですよ！',
    next: 'c5_choice'
  },

  c5_choice: {
    type: 'choice', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: '', text: 'Q：金髪エルフの使節団をどうもてなしますか？',
    choices: [
      { label: 'A', text: '「絶対似合います！」とアニメ風衣装を差し出す全力コスプレ接待', effect: {T:0, F:10, N:25}, next: 'c5_a01' },
      { label: 'B', text: '村の景色を伝説のアニメの舞台に見立てた「聖地巡礼プロデュース」', effect: {T:10, F:15, N:10}, next: 'c5_b01' },
      { label: 'C', text: 'もてなしをやめ、ただのファンとして「金髪エルフの素晴らしさ」を熱弁', effect: {T:25, F:0, N:5}, next: 'c5_c01' },
    ]
  },

  c5_a01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_n,
    speaker: 'エルフのリーダー',
    text: '……（最初は怒るが、衣装のクオリティと熱意に負けて着用する）\nまあ……これはこれで、悪くないわね',
    next: 'c5_a02'
  },
  c5_a02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: '「動く金髪エルフ」を一目見ようと野次馬が殺到！\nこれぞビジュアル・マーケティング！',
    next: 'c5_a03'
  },
  c5_a03: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_n,
    speaker: 'エルフのリーダー',
    text: '……さっき、なぜ泣きそうだったか、気になっていたでしょう。\nおもちのことを思い出したの。あの子は昔、我が国にも来てくれた。\n村人みんなに愛されていたあの笑顔が……この村の雰囲気に重なって',
    next: 'c5_a04'
  },
  c5_a04: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'そうか……おもちはここだけじゃなくて、いろんな場所で愛されてたんだな。\n（だからゲンさんだけじゃなく、みんながあんなに悲しんでたんだ）',
    next: 'c5_merge'
  },

  c5_b01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'ここの温泉は、伝説の聖女が涙した場所なんです……\n（即興でアニメ風の設定を付け加える）',
    next: 'c5_b02'
  },
  c5_b02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_k,
    speaker: 'エルフのリーダー',
    text: '……（感動して目に涙を浮かべる）\n自国で「奇跡の村」として宣伝します',
    next: 'c5_b03'
  },
  c5_b03: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_k,
    speaker: 'エルフのリーダー',
    text: '……最初にこの村を見たとき、泣きそうになったのは——\nおもちの気配がまだ残っていたから。あの子は我が国にも来てくれたことがある。\nこの村の温かさが……あの子と同じにおいがするの',
    next: 'c5_b04'
  },
  c5_b04: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'おもちって……そんなにいろんな場所で愛されてたんだ。\nゲンさんに教えてあげたいな、この話',
    next: 'c5_merge'
  },

  c5_c01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_s,
    speaker: 'れんとん',
    text: '金髪の良さは、その黄金の輝きが内面のツンデレさを引き立てて……\n（3時間後も語り続けている）',
    next: 'c5_c01b'
  },
  c5_c01b: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_sad,
    speaker: 'ゆきちゃん',
    text: '（りかちゃんに小声で）……あの人、止まらないですね。\n（りかちゃん）「守護霊業17年。あんな人初めて見た」\n（二人して遠い目になっている）',
    next: 'c5_c02'
  },
  c5_c02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_k,
    speaker: 'エルフのリーダー',
    text: '……そこまで私（の種族）を理解している者はいないわ。\n（感動して）あなたと、独占的な友好条約を結びたい',
    next: 'c5_c03'
  },
  c5_c03: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_k,
    speaker: 'エルフのリーダー',
    text: '……一つ、正直に話すわ。\nさっき泣きそうだったのは……おもちのことを思い出したから。\nあの子は我が国にも来てくれた。この村の空気が、あの子の温かさに似ていて',
    next: 'c5_c04'
  },
  c5_c04: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん（心の声）',
    text: 'おもちはこの村だけじゃなく、世界中で愛されてたんだ。\nだから……この村にはその「おもちの温かさ」を受け継ぐ責任がある気がする',
    next: 'c5_merge'
  },

  c5_merge: {
    type: 'talk', bgm: 'shizuka', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん（心の声）',
    text: 'やったー！ 村が金髪エルフの聖地になったぞー！\n……あれ、なんか背筋が寒いような？',
    next: 'c6_chapter'
  },

  // ==================== 第6章 ====================
  c6_chapter: {
    type: 'chapter', bgm: 'ayashii', bg: BG.hiroba_n,
    chapterNum: '第 6 章',
    chapterTitle: 'SNS炎上！？レントーン村、世界へ',
    next: 'c6_01'
  },
  c6_01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_sad,
    speaker: 'れんとん',
    text: 'えええっ！？ 異世界通信（SNS）に書き込まれた！\n「おもちもいないのに聖地とか言って金儲け。れんとんって奴、人が良すぎて胡散臭すぎる。詐欺師じゃないの？」',
    next: 'c6_02'
  },
  c6_02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_sad,
    speaker: 'れんとん',
    text: '詐欺師じゃないよ！ 俺はただみんなに楽しんでほしくて……\n魔法端末の通知が止まらない！ 助けて守護霊ちゃん！',
    next: 'c6_03'
  },

  c6_03: {
    type: 'talk', bg: BG.hiroba_n, chara: C.sae_sh,
    speaker: 'さえおばちゃん',
    text: 'れんとんさん……村の外が大変なことになってるって聞いたんだけど。\n本当に大丈夫？ みんな、心配してるのよ。\nでも……あたしは信じてるからね',
    next: 'c6_04'
  },
  c6_04: {
    type: 'talk', bg: BG.hiroba_n, chara: C.gen_n,
    speaker: 'ゲンさん',
    text: '……（縁側で一人、遠くを見つめている）\n（れんとんが声をかけると）「……おめぇの責任じゃねぇ。\nが、どう収めるかはおめぇが決めろ。俺は……おめぇを信じてやる」',
    next: 'lesson_cap'
  },
  lesson_cap: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'これは「キャリング・キャパシティ（受入容量）」の限界を超えたことで起きた摩擦です。急激な認知拡大にインフラが追いついていません',
    next: 'lesson_cap_2'
  },
  lesson_cap_2: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: '観光地や事業が受け入れられる最大の人数・規模のこと。急ぎすぎると騒音・ゴミ・村の疲弊が起き、信頼が崩れます。\n持続可能な成長には、上限を守ることが大切です',
    next: 'lesson_cap_3'
  },
  lesson_cap_3: {
    type: 'talk', bg: BG.hiroba_n, chara: C.rika_n,
    speaker: 'りかちゃん',
    text: 'ここで感情的に反論するのは最悪の手。\n真醴な情報公開と、ファンとの絆が試されていますよ',
    next: 'lesson_cap_4'
  },
  lesson_cap_4: {
    type: 'talk', bg: BG.hiroba_n, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: 'ピンチはチャンスです！ 逆手に取っちゃいましょう！',
    next: 'c6_choice'
  },

  c6_choice: {
    type: 'choice', bg: BG.hiroba_n, chara: C.renton_sad,
    speaker: '', text: 'Q：炎上をどう乗り越えますか？',
    choices: [
      { label: 'A', text: '「おもちは確かにいません」と認め、受入人数を制限して地道な運営に戻す', effect: {T:25, F:0, N:-5}, next: 'c6_a01' },
      { label: 'B', text: '「豆腐の角に頭をぶつけて死んだ男です」と死に様を自虐ネタ動画にして投稿', effect: {T:10, F:10, N:20}, next: 'c6_b01' },
      { label: 'C', text: 'これまでの常連客やエルフたちに「ありのままの村」を代わりに発信してもらう', effect: {T:15, F:0, N:15}, next: 'c6_c01' },
    ]
  },

  c6_a01: {
    type: 'talk', bg: BG.hiroba_s, chara: C.renton_sad,
    speaker: 'れんとん',
    text: '広場で一人ひとりに頭を下げて回りました。\n「今はキャパオーバーです。またゆっくり来てください」',
    next: 'c6_a02'
  },
  c6_a02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_s,
    speaker: 'ゆきちゃん',
    text: '一時的に客は減りましたが……「あそこは誠実な村だ」という評価が定着。\n良質なリピーターだけが残るようになりました',
    next: 'c6_merge'
  },

  c6_b01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_s,
    speaker: 'れんとん',
    text: 'こんなに詰めが甘い男が、緻密な詐欺なんてできるわけないでしょ！\n（豆腐で死ぬ再現ドラマを自ら演じて投稿）',
    next: 'c6_b02'
  },
  c6_b02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: '「死因が面白すぎる」「この天然、放っておけない」とアンチが爆速でファンに反転！\nれんとんさん、キャラ立ちすぎ！',
    next: 'c6_merge'
  },

  c6_c01: {
    type: 'talk', bg: BG.hiroba_n, chara: C.elf_k,
    speaker: 'エルフのリーダー',
    text: 'あそこは心の故郷よ、嘘を言わないで。\n（アンチのコメントに一斉反論する）',
    next: 'c6_c02'
  },
  c6_c02: {
    type: 'talk', bg: BG.hiroba_n, chara: C.rika_s,
    speaker: 'りかちゃん',
    text: 'これこそが「愛されるブランド」の真骨頂！\n広告では買えない最強の資産です',
    next: 'c6_merge'
  },

  c6_merge: {
    type: 'talk', bgm: 'shizuka', bg: BG.hiroba_n, chara: C.gen_s,
    speaker: 'ゲンさん',
    text: 'れんとんよ。おめぇ、本当にすごい奴だな。\n……おもちがいた頃より、今の方が村のみんながいい顔してやがる',
    next: 'c6_merge2'
  },
  c6_merge2: {
    type: 'talk', bg: BG.hiroba_n, chara: C.renton_n,
    speaker: 'れんとん',
    text: 'ゲンさん……その言葉、聞けてよかった。\n（心の中で）俺、ここに来てよかった。豆腐の角に感謝しないといけないな',
    next: 'c6_merge3'
  },
  c6_merge3: {
    type: 'talk', bg: BG.hiroba_n, chara: C.yuki_s,
    speaker: 'ゆきちゃん',
    text: 'れんとんさん。村の人たちが今、広場に集まっています。\n……みんなで、れんとんさんにお礼が言いたいって',
    next: 'c6_end'
  },
  c6_end: {
    type: 'talk', bg: BG.yuugure, chara: C.yuki_n,
    speaker: 'ゆきちゃん',
    text: 'れんとんさん、おめでとうございます。村の再生は完了しました。\n今のこの村には、もう「おもち」がいなくても自立して歩んでいく力があります',
    next: 'c6_end2'
  },
  c6_end2: {
    type: 'talk', bg: BG.yuugure, chara: C.renton_sad,
    speaker: 'れんとん',
    text: 'そっか……。なんだか、あっというまだったなあ',
    next: 'c6_end3'
  },
  c6_end3: {
    type: 'talk', bg: BG.yuugure, chara: C.rika_n,
    speaker: 'りかちゃん',
    text: 'そして、村が完成したということは……。あなたが元の世界に戻るためのゲートが開いたということです。\n豆腐の角にぶつかる直前の時間に戻れますよ',
    next: 'c6_end4'
  },
  c6_end4: {
    type: 'talk', bg: BG.yuugure, chara: C.neru_s,
    speaker: 'ねるちゃん',
    text: 'れんとんさん、どうしますか？',
    next: 'final_choice'
  },

  // ==================== 最終章 ====================
  final_choice: {
    type: 'choice', bg: BG.yuugure, chara: C.renton_n,
    speaker: '', text: 'Q：れんとん、あなたはこれからどうしますか？',
    choices: [
      { label: 'A', text: 'この村に残る——ここが俺の新しい居場所だ。村のみんなと生きていく', effect: {T:0, F:0, N:0}, next: '__end_a__' },
      { label: 'B', text: '現代に戻る——子どもたちが待ってる。豆腐の前の時間に戻ろう', effect: {T:0, F:0, N:0}, next: 'route_b' },
    ]
  },

route_b: {
    type: 'talk', bg: BG.supermarket, chara: null,
    speaker: '',
    text: 'ゲートをくぐった瞬間、真っ白な光に包まれる。\n\n気がつくと——スーパーの床。豆腐コーナー。\n「幻の極・堅豆腐」がぐちゃぐちゃに潰れていた。\n\nどうやら頭でぶつかって気絶しただけで、豆腐の方が先に逝ったらしい。',
    next: 'route_b2'
  },
  route_b2: {
    type: 'talk', bg: BG.supermarket, chara: C.renton_s,
    speaker: 'れんとん',
    text: '……俺、生きてる。豆腐まみれだけど、生きてる。\n（店員さんに介抱されながら立ち上がり、豆腐代を払って帰路につく）',
    next: '__end_b__'
  },

  // エンディングはgame.jsで動的に決定する（ダミーシーン）
  '__end_a__': { type: 'talk', bg: BG.yuugure, chara: null, speaker: '', text: '', next: null },
  '__end_b__': { type: 'talk', bg: BG.supermarket, chara: null, speaker: '', text: '', next: null },
};
