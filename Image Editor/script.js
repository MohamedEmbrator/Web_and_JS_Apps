const saturate = document.getElementById("saturate");
const contrast = document.getElementById("contrast");
const brightness = document.getElementById("brightness");
const sepia = document.getElementById("sepia");
const grayscale = document.getElementById("grayscale");
const blur = document.getElementById("blur");
const hueRotate = document.getElementById("hue-rotate");
const upload = document.getElementById("upload");
const download = document.getElementById("download");
const image = document.getElementById("image");
const reset = document.querySelector("span");
const imageBox = document.querySelector(".img-box");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
function resetValues() {
  ctx.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  sepia.value = "0";
  grayscale.value = "0";
  blur.value = "0";
  hueRotate.value = "0";
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
}

window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imageBox.style.display = "none";
};

upload.onchange = function () {
  resetValues();
  download.style.display = "block";
  reset.style.display = "block";
  imageBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    image.src = file.result;
  };
  image.onload = function () {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    image.style.display = "none";
  };
};
const filters = document.querySelectorAll("ul li input");

filters.forEach((filter) => {
  filter.addEventListener("input", () => {
    ctx.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    sepia(${sepia.value}%)
    grayscale(${grayscale.value})
    blur(${blur.value}px)
    hue-rotate(${hueRotate.value}deg)
    `;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  });
});

download.onclick = function () {
  download.href = canvas.toDataURL();
};
