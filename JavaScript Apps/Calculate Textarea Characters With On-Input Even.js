const textArea = document.getElementById("text");
const span = document.querySelector("span");
const maxLength = textArea.getAttribute("maxlength");

textArea.oninput = function () {
  span.innerHTML = maxLength - this.value.length;
};
