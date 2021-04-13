function key_down (e) {
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
}

function key_up (e) {
}

window.addEventListener('keydown', key_down);
window.addEventListener('keyup', key_up);