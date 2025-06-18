const preview = document.getElementById("preview");
const styles = document.getElementById("styles");
const ranges = document.querySelectorAll(".settings input");
const copyButton = document.getElementById("copy-styles");

ranges.forEach((silder) => {
  silder.addEventListener("input", generateStyles);
});

function generateStyles() {
  const xShadow = document.getElementById("x-shadow").value;
  const yShadow = document.getElementById("y-shadow").value;
  const blurRadius = document.getElementById("blur-r").value;
  const spreadRadius = document.getElementById("spread-r").value;
  const shadowColor = document.getElementById("shadow-color").value;
  const shadowOpacity = document.getElementById("shadow-opacity").value;
  const shadowInset = document.getElementById("inset-shadow").checked;
  const borderRadius = document.getElementById("border-r").value;

  const boxShadow = `${shadowInset ? "inset" : ""} ${xShadow}px ${yShadow}px ${blurRadius}px ${spreadRadius}px ${hexToRgba(shadowColor, shadowOpacity)}`;
  preview.style.boxShadow = boxShadow;
  preview.style.borderRadius = `${borderRadius}px`;

  styles.textContent = `box-shadow: ${boxShadow};\n border-radius: ${borderRadius}px;`;
}


function hexToRgba(shdowColor, shadowOpacity) {
  const r = parseInt(shdowColor.substr(1, 2), 16)
  const g = parseInt(shdowColor.substr(3, 2), 16);
  const b = parseInt(shdowColor.substr(5, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${shadowOpacity})`
}


function copyStyles() {
  styles.select();
  document.execCommand("copy");
  copyButton.innerText = "Copied!"
  setTimeout(() => {
    copyButton.innerText = "Copy Styles"

  }, 1000)
}

generateStyles()

