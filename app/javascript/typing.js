let count = 1
let score = 0
let index = 1
let tmr = 1
let sum_length = 0

function key_down_space_escape_only (e) {
  if (index == 1 || index == 4) {
    if (e.code == 'Space' || e.code == 'Escape') {
      index = 2
      score = 0
      tmr = 3.5
    }
  }
}

function key_down (e) {
  if (index == 3) {
    e.preventDefault();
    const questionEnglishWord = document.getElementById('question_english_word');
    const inputWord = document.getElementById('input_word');
    if (e.code == 'Backspace' || e.code == 'Delete') {
      inputWord.innerHTML = inputWord.innerHTML.slice(0, -1)
    }
    if (e.code.includes('Key')) {
      inputWord.innerHTML += e.key
    }
    if (e.code == 'Enter') {
      if (questionEnglishWord.innerHTML == inputWord.innerHTML) {
        score += questionEnglishWord.innerHTML.length * 10
        sum_length += questionEnglishWord.innerHTML.length
        count += 1
        set_text()
        set_question()
      } else {
        score -= 20
        set_text(false)
      }
    }
  }
}

function set_text (judge=true) {
  const questionCount = document.getElementById('question_count');
  const inputWord = document.getElementById('input_word');
  const yourScore = document.getElementById('your_score');
  if (judge) {
    questionCount.innerHTML = count
    inputWord.innerHTML = ''
  }
  yourScore.innerHTML = score
}

function set_question () {
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "/typings/new", true);
  XHR.responseType = "json";
  XHR.send();
  XHR.onload = () => {
    const questionNumber = document.getElementById('question_number');
    const questionEnglishWord = document.getElementById('question_english_word');
    const questionJapaneseWord = document.getElementById('question_japanese_word');
    questionNumber.innerHTML = XHR.response.number;
    questionEnglishWord.innerHTML = XHR.response.english_word;
    questionJapaneseWord.innerHTML = XHR.response.japanese_word;
  }
}

function key_up (e) {
}

function main () {
  setInterval(() => {
    const yourRemainingTime = document.getElementById('your_remaining_time');
    const questionSpace = document.getElementById('question_space');
    const inputForm = document.getElementById('input_form');
    if (index == 1) {
      window.addEventListener('keydown', key_down_space_escape_only);
    } else if (index == 2) {
      tmr -= 0.1;
      set_text(false)
      yourRemainingTime.innerHTML = tmr.toFixed(0);
      questionSpace.innerHTML = `
        <p class="count_number">
          Question <span id="question_count">1</span>
        </p>
        <p class="question_number" id="question_number">34</p>
        <p class="question_english_word" id="question_english_word">English</p>
        <p class="question_japanese_word" id="question_japanese_word">日本語</p>
      `
      inputForm.innerHTML = `
        <p class="input_helper">↓Your word↓</p>
        <p class="input_word" id="input_word"></p>
        <p class="judgement" id="judgement"></p>
      `
      if (tmr <= 0) {
        index = 3;
        tmr = 60
        set_question()
      }
    } else if (index == 3) {
      tmr -= 0.1;
      yourRemainingTime.innerHTML = tmr.toFixed(1);
      window.addEventListener('keydown', key_down);
      window.addEventListener('keyup', key_up);
      if (tmr <= 0) {
        tmr = 0;
        index = 4;
      }
    } else if (index == 4) {
      questionSpace.innerHTML = `
        <p class='result'>終了!</br >あなたのスコアは</br >${score}点でした!</p>
        <p class='navigation'>Escape or Space => もう一度プレイする</p>
      `
      inputForm.innerHTML = `
        <p class='result_detail'>
          スコア：${score}点</br >
          時間：60秒</br >
          正確な入力文字数：${sum_length}文字</br >
        </p>
      `
      window.addEventListener('keydown', key_down_space_escape_only);
    }
  }, 100);
}

if (location.pathname == '/') {
  window.addEventListener('load', main);
}