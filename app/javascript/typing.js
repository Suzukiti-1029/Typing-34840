function key_down (e) {
  const yourWord = document.getElementById('your_word');
  if (e.code == 'Backspace' || e.code == 'Delete') {
    yourWord.innerHTML = yourWord.innerHTML.slice(0, -1)
  }
  if (e.code.includes('Key')) {
    yourWord.innerHTML += e.key
  }
}

function key_up (e) {

}

window.addEventListener('keydown', key_down);
window.addEventListener('keyup', key_up);