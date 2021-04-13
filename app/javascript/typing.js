function key_down (e) {
  e.preventDefault();
  const inputWord = document.getElementById('input_word');
  const questionEnglishWord = document.getElementById('question_english_word');
  if (e.code == 'Backspace' || e.code == 'Delete') {
    inputWord.innerHTML = inputWord.innerHTML.slice(0, -1)
  }
  if (e.code.includes('Key')) {
    inputWord.innerHTML += e.key
  }
  if (e.code == 'Enter') {
    if (questionEnglishWord.innerHTML == inputWord.innerHTML) {
      set_text()
    }
  }
}

function set_text () {
  const inputWord = document.getElementById('input_word');
  inputWord.innerHTML = ''
  const XHR = new XMLHttpRequest();
  XHR.open("GET", "/typings/new", true);
  XHR.responseType = "json";
  XHR.send();
  XHR.onload = () => {
    const questionEnglishWord = document.getElementById('question_english_word');
    const questionJapaneseWord = document.getElementById('question_japanese_word');
    const newEnglishWord = XHR.response.english_word;
    const newJapaneseWord = XHR.response.japanese_word;
    questionEnglishWord.innerHTML = newEnglishWord;
    questionJapaneseWord.innerHTML = newJapaneseWord;
  }
}

function key_up (e) {
  e.preventDefault();
}

window.addEventListener('keydown', key_down);
window.addEventListener('keyup', key_up);