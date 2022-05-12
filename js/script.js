const uploadBtn = document.getElementById('upload');
const outputImg = document.getElementById('outputImg');
const result = document.getElementById('result');

function ratio(width, height) {
  let num1 = width / height;
  let num2;
  let isInterger = false;

  for (let i = 1; !isInterger; i++) {
    isInterger = Number.isInteger(num1 * i);

    if (isInterger) {
      num1 = num1 * i;
      num2 = i;
      result.innerHTML = `${num1} : ${num2}`;
    }
  }
}

function uploadCalc() {
  const width = outputImg.naturalWidth;
  const height = outputImg.naturalHeight;

  ratio(width, height);
}

function keyCalc() {
  const widthInput = document.getElementById('width');
  const heightInput = document.getElementById('height');
  const width = widthInput.value;
  const height = heightInput.value;

  if (width && height) {
    ratio(width, height);

    // Cleaning uploaded image
    uploadBtn.value = '';
    outputImg.src = '';
  };
}

uploadBtn.addEventListener('change', event => {
  const imageFile = event.target.files[0];

  outputImg.src = URL.createObjectURL(imageFile);
  outputImg.addEventListener('load', () => uploadCalc());
})

document.addEventListener('keyup', () => keyCalc());