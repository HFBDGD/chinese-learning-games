const lessons = [
 {title:'一起洗手',icon:'🫧',theme:'生活',text:['我和媽媽洗手。','媽媽用水洗手。'],focus:['洗手'],extra:'我、和、媽媽、用',questions:[{q:'誰和媽媽洗手？',options:['我','爸爸','哥哥'],answer:'我',evidence:0,explain:'第一句寫「我和媽媽洗手。」問「誰」，就搵做呢件事嘅人。'},{q:'媽媽用甚麼洗手？',options:['水','豆','種子'],answer:'水',evidence:1,explain:'第二句寫「媽媽用水洗手。」問「用甚麼」，答案係「水」。'}],fill:{q:'媽媽用甚麼洗手？',before:'媽媽用',after:'洗手。',options:['水','豆','種子'],answer:'水',evidence:1,explain:'將「水」放入句子，再讀一次「媽媽用水洗手。」'}},
 {title:'坐巴士',icon:'🚌',theme:'交通',text:['爸爸坐巴士。','我坐火車。'],focus:['巴士','火車'],extra:'爸爸、坐、我',questions:[{q:'誰坐巴士？',options:['媽媽','我','爸爸'],answer:'爸爸',evidence:0,explain:'第一句寫「爸爸坐巴士。」搵到「巴士」，再睇係邊個坐。'},{q:'我坐甚麼？',options:['輪船','火車','飛機'],answer:'火車',evidence:1,explain:'第二句寫「我坐火車。」留意題目問嘅係「我」。'}],fill:{q:'我坐甚麼？',before:'我坐',after:'。',options:['飛機','火車','巴士'],answer:'火車',evidence:1,explain:'完整答案係「我坐火車。」'}},
 {title:'小小種子',icon:'🌱',theme:'植物',text:['我有一粒種子。','爸爸灌水。','種子長出苗。','我想看花，但是只看見苗。'],focus:['種子','灌水','苗'],extra:'我、有、一、粒、爸爸、長出、想、看花、但是、只、看見',questions:[{q:'我有甚麼？',options:['禮物','種子','汽車'],answer:'種子',evidence:0,explain:'第一句寫「我有一粒種子。」問「有甚麼」，就搵擁有嘅嘢。'},{q:'誰灌水？',options:['我','媽媽','爸爸'],answer:'爸爸',evidence:1,explain:'第二句寫「爸爸灌水。」問「誰」，就搵人。'}],fill:{q:'種子長出甚麼？',before:'種子長出',after:'。',options:['苗','豆','雨點'],answer:'苗',evidence:2,explain:'第三句寫「種子長出苗。」將「苗」放入句子。'}},
 {title:'蝴蝶和蜜蜂',icon:'🦋',theme:'春天',text:['蝴蝶在花上。','蜜蜂也在花上。'],focus:['蝴蝶','蜜蜂'],extra:'在、花、上、也',questions:[{q:'蝴蝶在哪裏？',options:['水塘裏','花上','車上'],answer:'花上',evidence:0,explain:'第一句寫「蝴蝶在花上。」問「在哪裏」，就搵地方。'},{q:'誰也在花上？',options:['蜜蜂','爸爸','媽媽'],answer:'蜜蜂',evidence:1,explain:'第二句寫「蜜蜂也在花上。」題目有「也」，可以返第二句搵。'}],fill:{q:'誰也在花上？',before:'',after:'也在花上。',options:['蝴蝶','蜜蜂','我'],answer:'蜜蜂',evidence:1,explain:'完整答案係「蜜蜂也在花上。」'}},
 {title:'小小水塘',icon:'💧',theme:'下雨',text:['雨點落在水塘裏。','我在水塘旁看蝴蝶。'],focus:['雨點','水塘','蝴蝶'],extra:'落、在、裏、我、旁、看',questions:[{q:'甚麼落在水塘裏？',options:['禮物','汽車','雨點'],answer:'雨點',evidence:0,explain:'第一句寫「雨點落在水塘裏。」搵做「落」呢個動作嘅嘢。'},{q:'我在水塘旁看甚麼？',options:['飛機','蝴蝶','火車'],answer:'蝴蝶',evidence:1,explain:'第二句寫「我在水塘旁看蝴蝶。」留意「看」後面嘅詞語。'}],fill:{q:'雨點落在哪裏？',before:'雨點落在',after:'裏。',options:['聖堂','水塘','巴士'],answer:'水塘',evidence:0,explain:'將「水塘」放入句子，完整答案係「雨點落在水塘裏。」'}},
 {title:'去聖堂',icon:'🎶',theme:'聖堂',text:['今天，我和媽媽去聖堂。','我們在聖堂唱歌。','媽媽給我一份禮物。'],focus:['聖堂','唱歌','禮物'],extra:'今天、我、和、媽媽、去、我們、在、給、一、份',questions:[{q:'我和媽媽去哪裏？',options:['聖堂','水塘','火車'],answer:'聖堂',evidence:0,explain:'第一句寫「今天，我和媽媽去聖堂。」問「去哪裏」，就搵地方。'},{q:'我們在聖堂做甚麼？',options:['洗手','灌水','唱歌'],answer:'唱歌',evidence:1,explain:'第二句寫「我們在聖堂唱歌。」問「做甚麼」，就搵動作。'}],fill:{q:'媽媽給我甚麼？',before:'媽媽給我一份',after:'。',options:['禮物','種子','豆'],answer:'禮物',evidence:2,explain:'第三句寫「媽媽給我一份禮物。」讀返成句，檢查答案。'}}
];
// Keep the original lesson indices so saved progress and wrong-answer IDs still match.
const levels = [
  { label: '初級', skill: '認人物同物件', lessons: [0, 1] },
  { label: '中級', skill: '留意地方同細節', lessons: [3, 4] },
  { label: '高級', skill: '逐句讀，搵前後線索', lessons: [2, 5] }
];
const allWords='水塘 灌水 洗手 雨點 交通 汽車 輪船 飛機 安全 巴士 火車 電車 春風 種子 豆 苗 蝴蝶 蜜蜂 聖堂 耶穌 誕生 唱歌 禮物';
const storageKey = 'chineseLearningGamesV2';
const profileNames = { elder: '哥哥', younger: '細佬' };
const requestedProfile = new URLSearchParams(location.search).get('profile');
const storedProfile = loadHub().activeProfile;
const profile = Object.hasOwn(profileNames, requestedProfile) ? requestedProfile
  : Object.hasOwn(profileNames, storedProfile) ? storedProfile : 'elder';

function loadHub() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved?.profiles) return saved;
  } catch {}
  return { activeProfile: null, profiles: {} };
}

function emptyProfile() {
  return {
    wrong: { listen: [], read: [], sentence: [], write: [] },
    completed: { listen: 0, read: 0, sentence: 0, write: 0 }
  };
}

const savedProfile = loadHub().profiles[profile] ?? emptyProfile();
const questionId = (lesson, question) => `reading-${lesson + 1}-${question + 1}`;
const knownQuestions = new Set(lessons.flatMap((_, lesson) =>
  [0, 1, 2].map(question => questionId(lesson, question))));
const savedWrong = savedProfile.wrong.read;
const wrong = new Set(Array.isArray(savedWrong) ? savedWrong.filter(id => knownQuestions.has(id)) : []);
let completed = savedProfile.completed.read > 0 && Array.isArray(savedProfile.readingCompleted)
  ? [...new Set(savedProfile.readingCompleted.filter(n => Number.isInteger(n) && n >= 0 && n < lessons.length))]
  : [];
let review = null;
let activeLevel = levels.findIndex((_, n) => !levelComplete(n));
if (activeLevel === -1) activeLevel = levels.length - 1;
let index = firstLesson(activeLevel);
let beforeReview;
const answers = lessons.map(() => [null, null, null]);
const checked = lessons.map(() => [false, false, false]);
let speechId=0,currentUtterance=null,readPosition=0,activeChar=null,voice=null;
let holdTimer=null,holdTarget=null,held=false,pressPoint=null;

function saveProgress() {
  try {
    const hub = loadHub();
    const record = hub.profiles[profile] ??= emptyProfile();
    record.wrong.read = [...wrong];
    record.completed.read = completed.length;
    record.readingCompleted = completed;
    localStorage.setItem(storageKey, JSON.stringify(hub));
  } catch {}
}

function recordAnswer(question, value) {
  const lesson = lessons[index];
  const expected = (question === 2 ? lesson.fill : lesson.questions[question]).answer;
  const id = questionId(index, question);
  if (value !== expected) {
    wrong.add(id);
  } else if (review) {
    wrong.delete(id);
  }
  saveProgress();
  updateReviewButton();
}

function levelComplete(n) {
  return levels[n].lessons.every(lesson => completed.includes(lesson));
}

function levelUnlocked(n) {
  return levels.slice(0, n).every((_, earlier) => levelComplete(earlier));
}

function firstLesson(n) {
  const pages = levels[n].lessons;
  return pages.find(lesson => !completed.includes(lesson)) ?? pages[0];
}

function changeLevel(n) {
  if (!levelUnlocked(n)) return;
  review = null;
  activeLevel = n;
  changeLesson(firstLesson(n));
  main.focus({ preventScroll: true });
}

function updateLevels() {
  const buttons = [...document.querySelectorAll('[data-level]')];
  levels.forEach((level, n) => {
    const button = buttons[n];
    const count = level.lessons.filter(lesson => completed.includes(lesson)).length;
    button.disabled = !levelUnlocked(n);
    button.setAttribute('aria-pressed', String(!review && activeLevel === n));
    button.querySelector('.level-status').textContent = button.disabled
      ? `🔒 先完成${levels[n - 1].label}`
      : count === level.lessons.length ? '✓ 已完成' : `${count} / ${level.lessons.length} 篇完成`;
  });
}

function visibleLessons() {
  return review ? [...review.keys()] : levels[activeLevel].lessons;
}

function visibleQuestions() {
  return review ? review.get(index) : [0, 1, 2];
}

function updateReviewButton() {
  const button = document.getElementById('review-wrong');
  button.textContent = review ? `返回${levels[activeLevel].label} · 錯題 ${wrong.size}` : `錯題重練（${wrong.size}）`;
  button.setAttribute('aria-pressed', String(Boolean(review)));
  button.disabled = !review && wrong.size === 0;
}

function resetLessonAnswers(lesson) {
  answers[lesson] = [null, null, null];
  checked[lesson] = [false, false, false];
}

function toggleReview() {
  if (review) {
    review = null;
    changeLesson(beforeReview);
    return;
  }
  const queue = new Map();
  for (let lesson = 0; lesson < lessons.length; lesson++) {
    const questions = [0, 1, 2].filter(n => wrong.has(questionId(lesson, n)));
    if (questions.length) {
      queue.set(lesson, questions);
      resetLessonAnswers(lesson);
    }
  }
  if (!queue.size) return;
  beforeReview = index;
  review = queue;
  changeLesson(queue.keys().next().value);
}

const main=document.getElementById('main');
const escapeHTML=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function chars(text,scope){return [...text].map((ch,n)=>/[\p{Script=Han}]/u.test(ch)?`<span class="char" tabindex="0" role="button" aria-label="讀${ch}" data-scope="${scope}" data-pos="${n}">${escapeHTML(ch)}</span>`:escapeHTML(ch)).join('')}
function render(){
 const l=lessons[index];
 const pages = visibleLessons();
 const questions = visibleQuestions();
 const pageIndex = pages.indexOf(index);
 const levelLabel = review ? '錯題重練' : levels[activeLevel].label;
 updateLevels();
 updateReviewButton();
 document.getElementById('lessons').innerHTML = `<div class="section-label">${levelLabel}短文</div>` +
   pages.map((n, position) => {
     const lesson = lessons[n];
     return `<button class="lesson ${n === index ? 'active' : ''}" data-lesson="${n}" ${n === index ? 'aria-current="page"' : ''}><span class="num">${position + 1}</span><span><strong>${lesson.title}</strong><small>${lesson.theme} · ${lesson.text.length}句短文</small><small class="tick">${completed.includes(n) ? '✓ 已完成' : ''}</small></span></button>`;
   }).join('') + '<p class="aside-note">一次讀一篇就可以。<br>搵到答案，再指住原文讀一讀。</p>';
 main.innerHTML=`<section class="card" aria-label="短文"><div class="progress-track"><div style="width:${(pageIndex+1)/pages.length*100}%"></div></div><div class="card-top"><div><div class="eyebrow">${levelLabel} · 第 ${pageIndex+1} 篇 / 共 ${pages.length} 篇 · ${l.theme}</div><h2>${l.title}</h2></div><div class="scene" aria-hidden="true">${l.icon}</div></div><div class="reading"><div class="passage" id="passage">${l.text.map((s,n)=>`<span class="sentence" data-sentence="${n}">${chars(s,'p'+n)}</span>`).join('')}</div><div class="controls"><button class="primary" id="read">▶ 跟讀全文</button><button class="secondary" id="stop" disabled>■ 停一停</button><label class="speed">讀字速度<select id="speed"><option value="0.7">慢慢讀</option><option value="0.9">正常</option></select></label></div><p class="hint">跟住黃色背景讀 · 長按任何中文字，聽一聽</p><div class="voice-status" id="voice-status" role="status"></div><div class="wordpop" id="wordpop"><strong id="selected-char"></strong><small>再聽一次，然後接住讀。</small><button class="small-button" id="repeat-char">再聽一次</button><button class="small-button" id="continue">由呢個字讀起</button></div></div><div class="guide"><b>一齊試</b>　① 睇題目問乜　② 返短文搵答案　③ 答完讀返一次</div></section><section class="questions" aria-label="閱讀理解題目"><div class="questions-head"><h3>讀完，一齊答一答</h3><span>${review?`錯題重練 · ${questions.length} 題`:'2 題選擇 · 1 題填充'}</span></div>${l.questions.map((q,n)=>`<article class="question" ${questions.includes(n)?'':'hidden'}><div class="q-title"><span class="q-number">${n+1}</span><span class="q-text">${chars(q.q,'q'+n)}</span><button class="speaker" data-speak="q${n}" aria-label="朗讀第${n+1}題">♫</button></div><div class="answers">${q.options.map((a,k)=>`<button class="option" data-answer="${n}" data-value="${a}" aria-pressed="false">${chars(a,'a'+n+k)}</button>`).join('')}</div><div class="feedback" id="feedback-${n}" role="status"></div></article>`).join('')}<article class="question" ${questions.includes(2)?'':'hidden'}><div class="q-title"><span class="q-number">3</span><span class="q-text">${chars(l.fill.q,'q2')}<br><small style="font-size:13px;color:#75846f;font-weight:400">點一下字卡，完成句子。</small></span><button class="speaker" data-speak="q2" aria-label="朗讀第三題">♫</button></div><div class="fill-sentence">${chars(l.fill.before,'fb')}<span class="blank" id="blank">？</span>${chars(l.fill.after,'fa')}</div><div class="wordbank">${l.fill.options.map((a,k)=>`<button class="option" data-answer="2" data-value="${a}" aria-pressed="false">${chars(a,'f'+k)}</button>`).join('')}</div><button class="primary" id="check-fill">檢查答案</button><div class="feedback" id="feedback-2" role="status"></div></article><div id="finish"></div></section><div class="bottom-nav"><button class="secondary" id="prev" ${pageIndex===0?'disabled':''}>← 上一篇</button><button class="primary" id="next" ${pageIndex===pages.length-1?'disabled':''}>下一篇 →</button></div><details class="parent"><summary>家長小提示與本篇用字</summary><p>先陪孩子逐句讀，示範指住原文搵答案。先做兩題選擇題，再用字卡完成句子。填充屬額外練習。老師範圍列明閱讀理解為選擇題，另有看圖選詞填充。</p><p>本篇範圍詞語　${l.focus.join('、')}<br>輔助用字　${l.extra}</p><p>六篇短文分初級、中級、高級。每級兩篇都答啱，就可以去下一級。全份認讀範圍共有 23 個詞語。<br>${allWords}</p><p>朗讀採用裝置提供的廣東話聲音。跟讀會逐字發聲及亮起背景，字與字之間有短暫停頓。多音字請家長按句意陪讀。本機按哥哥同細佬分開記錄完成篇目同錯題。答錯嘅題目可以用「錯題重練」再做。</p><button class="small-button" id="reset">重新做本篇</button></details>`;
 document.querySelectorAll('[data-lesson]').forEach(b=>b.onclick=()=>changeLesson(Number(b.dataset.lesson)));
 document.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>choose(Number(b.dataset.answer),b.dataset.value));
 document.querySelectorAll('[data-speak]').forEach(b=>b.onclick=()=>readSequence([...document.querySelectorAll(`[data-scope="${b.dataset.speak}"]`)]));
 document.getElementById('read').onclick=()=>{document.getElementById('wordpop').classList.remove('show');readPosition=0;readSequence(passageChars())};
 document.getElementById('stop').onclick=stopSpeech;
 document.getElementById('continue').onclick=()=>{document.getElementById('wordpop').classList.remove('show');readSequence(passageChars().slice(readPosition))};
 document.getElementById('repeat-char').onclick=()=>activeChar&&readSequence([activeChar]);
 document.getElementById('prev').onclick=()=>changeLesson(pages[pageIndex-1]);document.getElementById('next').onclick=()=>changeLesson(pages[pageIndex+1]);
 document.getElementById('check-fill').onclick=()=>{if(!answers[index][2]){setFeedback(2,'先揀一張字卡，再檢查。',false);return}checked[index][2]=true;recordAnswer(2,answers[index][2]);updateAnswer(2)};
 document.getElementById('reset').onclick=()=>{stopSpeech();resetLessonAnswers(index);render()};
 questions.forEach(updateAnswer);updateVoice();
}
function passageChars(){return [...document.querySelectorAll('#passage .char')]}
function changeLesson(n){if(!visibleLessons().includes(n))return;stopSpeech();index=n;activeChar=null;render();main.scrollIntoView({behavior:'smooth',block:'start'})}
function choose(n,value){answers[index][n]=value;checked[index][n]=n<2;if(n<2)recordAnswer(n,value);updateAnswer(n)}
function setFeedback(n,message,good){let el=document.getElementById('feedback-'+n);el.textContent=message;el.className='feedback '+(good?'good':'try')}
function updateAnswer(n){const l=lessons[index],q=n<2?l.questions[n]:l.fill,val=answers[index][n],good=val===q.answer;document.querySelectorAll(`[data-answer="${n}"]`).forEach(b=>{const selected=b.dataset.value===val;b.classList.toggle('chosen',selected);b.classList.toggle('correct',selected&&good&&checked[index][n]);b.setAttribute('aria-pressed',String(selected))});if(n===2)document.getElementById('blank').textContent=val||'？';if(!val||!checked[index][n]){document.getElementById('feedback-'+n).textContent='';updateFinish();return}if(good){setFeedback(n,'✓ 答啱喇！'+q.explain,true);document.querySelectorAll('#passage .evidence').forEach(e=>e.classList.remove('evidence'));document.querySelectorAll(`[data-sentence="${q.evidence}"] .char`).forEach(e=>e.classList.add('evidence'))}else{setFeedback(n,`再試一次。返短文第${['一','二','三','四'][q.evidence]}句搵一搵。`,false)}updateFinish()}
function updateFinish() {
  const lesson = lessons[index];
  const done = visibleQuestions().every(n => checked[index][n] &&
    answers[index][n] === (n < 2 ? lesson.questions[n].answer : lesson.fill.answer));
  if (done && !review && !completed.includes(index)) {
    completed.push(index);
    saveProgress();
    updateLevels();
    document.querySelector(`[data-lesson="${index}"] .tick`).textContent = '✓ 已完成';
  }
  const finish = document.getElementById('finish');
  if (!done) {
    finish.replaceChildren();
    return;
  }
  const finishedLevel = !review && levelComplete(activeLevel);
  const nextLevel = levels[activeLevel + 1];
  const message = review ? '呢篇嘅錯題重練完成！' : '呢篇完成喇！';
  const milestone = !finishedLevel ? '' : nextLevel
    ? `<p>你完成咗${levels[activeLevel].label}兩篇短文！${nextLevel.label}已解鎖。</p><button class="primary" id="next-level">去${nextLevel.label} →</button>`
    : '<p>你完成咗三個級別，共六篇短文！</p>';
  finish.innerHTML = `<div class="finish"><strong>✦ ${message}</strong><br>指住原文，同爸爸媽媽講吓你喺邊度搵到答案。${milestone}</div>`;
  const nextButton = document.getElementById('next-level');
  if (nextButton) nextButton.onclick = () => changeLevel(activeLevel + 1);
}

function updateVoice(){if(!('speechSynthesis'in window)){voice=null;document.getElementById('voice-status').textContent='呢個瀏覽器未能朗讀，請用 iPad Safari 開啟。';return}const voices=speechSynthesis.getVoices();voice=voices.find(v=>/^zh(?:[-_]Hant)?[-_]HK$/i.test(v.lang))||voices.find(v=>/^yue/i.test(v.lang))||null;document.getElementById('voice-status').textContent=voice?'':'未找到廣東話聲音。請先在裝置加入廣東話語音，再重新開啟此頁。'}
function stopSpeech(){speechId++;if('speechSynthesis'in window)speechSynthesis.cancel();currentUtterance=null;document.querySelectorAll('.speaking').forEach(e=>e.classList.remove('speaking'));const stop=document.getElementById('stop');if(stop)stop.disabled=true;const read=document.getElementById('read');if(read)read.textContent='▶ 跟讀全文'}
function readSequence(nodes){stopSpeech();updateVoice();if(!voice||!nodes.length)return;const id=speechId;document.getElementById('stop').disabled=false;document.getElementById('read').textContent='♫ 跟住讀…';let cursor=0;
 function speakNext(){if(id!==speechId)return;if(cursor>=nodes.length){stopSpeech();return}const el=nodes[cursor++];const u=new SpeechSynthesisUtterance(el.textContent);currentUtterance=u;u.voice=voice;u.lang=voice.lang;u.rate=Number(document.getElementById('speed').value);u.onstart=()=>{if(id!==speechId)return;document.querySelectorAll('.speaking').forEach(e=>e.classList.remove('speaking'));el.classList.add('speaking');const p=passageChars().indexOf(el);if(p>=0)readPosition=p};u.onend=()=>{if(id!==speechId)return;el.classList.remove('speaking');speakNext()};u.onerror=()=>{if(id!==speechId)return;stopSpeech();document.getElementById('voice-status').textContent='朗讀暫時未成功，請再按一次，並確認裝置音量。'};speechSynthesis.speak(u)}speakNext()}
function longRead(el){activeChar=el;const p=passageChars().indexOf(el);readPosition=p>=0?p:0;document.getElementById('selected-char').textContent=el.textContent;document.getElementById('wordpop').classList.add('show');document.getElementById('continue').hidden=p<0;readSequence([el])}
function clearHold(){clearTimeout(holdTimer);holdTimer=null;holdTarget=null;pressPoint=null}
document.addEventListener('pointerdown',e=>{const el=e.target.closest('.char');clearHold();held=false;if(!el)return;holdTarget=el;pressPoint={x:e.clientX,y:e.clientY};holdTimer=setTimeout(()=>{held=true},500)});
document.addEventListener('pointermove',e=>{if(pressPoint&&Math.hypot(e.clientX-pressPoint.x,e.clientY-pressPoint.y)>12)clearHold()});
document.addEventListener('pointerup', e => {
  const target = holdTarget;
  clearHold();
  if (held && target && e.target.closest('.char') === target) longRead(target);
});
document.addEventListener('pointercancel', () => { clearHold(); held = false; });
document.addEventListener('contextmenu',e=>{if(e.target.closest('.char'))e.preventDefault()});
document.addEventListener('keydown',e=>{if(e.target.matches('.char')&&(e.key==='Enter'||e.key===' ')){e.preventDefault();e.stopPropagation();longRead(e.target)}});
document.addEventListener('click', e => {
  if (!held || !activeChar || e.detail === 0) return;
  const option = activeChar.closest('[data-answer]');
  if (activeChar.contains(e.target) || option?.contains(e.target)) {
    e.preventDefault();
    e.stopPropagation();
    held = false;
  }
}, true);
document.addEventListener('visibilitychange',()=>{if(document.hidden)stopSpeech()});
const parentButton = document.getElementById('parent-button');
const parentDialog = document.getElementById('parent-dialog');
const name = profileNames[profile];
document.getElementById('profile-label').textContent = name + '嘅練習';
document.getElementById('parent-scope').textContent = `重設${name}嘅閱讀理解進度同錯題。`;
document.getElementById('review-wrong').onclick = toggleReview;
document.getElementById('levels').innerHTML = levels.map((level, n) => `
  <button type="button" class="level" data-level="${n}">
    <strong>${level.label}</strong><span>${level.skill}</span><small class="level-status"></small>
  </button>`).join('');
document.querySelectorAll('[data-level]').forEach(button => {
  button.onclick = () => changeLevel(Number(button.dataset.level));
});
let parentHold;
function openParent() {
  stopSpeech();
  parentDialog.showModal();
}
parentButton.addEventListener('pointerdown', () => {
  clearTimeout(parentHold);
  parentHold = setTimeout(openParent, 2000);
});
for (const event of ['pointerup', 'pointercancel', 'pointerleave']) {
  parentButton.addEventListener(event, () => clearTimeout(parentHold));
}
parentButton.addEventListener('contextmenu', event => event.preventDefault());
parentButton.addEventListener('keydown', event => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openParent();
  }
});
document.getElementById('parent-reset').onclick = () => {
  stopSpeech();
  completed = [];
  wrong.clear();
  review = null;
  activeLevel = 0;
  index = firstLesson(activeLevel);
  lessons.forEach((_, n) => resetLessonAnswers(n));
  saveProgress();
  parentDialog.close();
  render();
};
render();if('speechSynthesis'in window)speechSynthesis.addEventListener('voiceschanged',updateVoice);
