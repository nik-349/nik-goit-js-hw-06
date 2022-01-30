

const ref = {
refBody: document.querySelector('body'),
refButton: document.querySelector('button'),
refDivColorText: document.querySelector('.color')
}


ref.refButton.addEventListener('click', clickButtonChange);


function clickButtonChange() {
  const color = ref.refBody.style.background = getRandomHexColor()
  ref.refDivColorText.textContent = `-${color}`
}


function getRandomHexColor(element) {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

