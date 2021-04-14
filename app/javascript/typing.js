let count = 1
let score = 0
let index = 1
let tmr = 60

function key_down (e) {
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
      count += 1
      set_text()
    }
  }
}

function key_down_space_escape_only (e) {
  e.preventDefault();
  if (e.code == 'Space' || e.code == 'Escape') {
  index = 2
  }
}

function set_text () {
  const questionCount = document.getElementById('question_count');
  const inputWord = document.getElementById('input_word');
  const yourScore = document.getElementById('your_score');
  inputWord.innerHTML = ''
  questionCount.innerHTML = count
  yourScore.innerHTML = score

  const XHR = new XMLHttpRequest();
  XHR.open("GET", "/typings/new", true);
  XHR.responseType = "json";
  XHR.send();
  XHR.onload = () => {
    const questionNumber = document.getElementById('question_number');
    const questionEnglishWord = document.getElementById('question_english_word');
    const questionJapaneseWord = document.getElementById('question_japanese_word');
    const newNumber = XHR.response.number;
    const newEnglishWord = XHR.response.english_word;
    const newJapaneseWord = XHR.response.japanese_word;
    questionNumber.innerHTML = newNumber;
    questionEnglishWord.innerHTML = newEnglishWord;
    questionJapaneseWord.innerHTML = newJapaneseWord;
  }
}

function key_up (e) {
  e.preventDefault();
}

function main () {
  setInterval(() => {
  if (index == 1) {
    window.addEventListener('keydown', key_down_space_escape_only);
  } else if (index == 2) {
    tmr -= 0.1;
    const yourRemainingTime = document.getElementById('your_remaining_time');
    if (tmr <= 0) {
      tmr = 0
      clearInterval(this);
    }
    yourRemainingTime.innerHTML = tmr.toFixed(1);
    window.addEventListener('keydown', key_down);
    window.addEventListener('keyup', key_up);
  }
  }, 100);
}

window.addEventListener('load', main);