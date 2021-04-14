let count = 1
let score = 0

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

window.addEventListener('keydown', key_down);
window.addEventListener('keyup', key_up);