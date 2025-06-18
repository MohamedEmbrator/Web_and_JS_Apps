const p = document.createElement("p");
p.id = "type";
const button = document.createElement("button");
button.id = "button";
button.innerHTML = "Start Type";
document.body.append(p, button);
const text = "Hello Your Name This Is Type Writer Effects On Text";
const paragraph = document.getElementById("type");
const typeButton = document.getElementById("button");
let i = 0;
typeButton.onclick = function () {
  let typeWriter = setInterval(() => {
    paragraph.textContent += text[i];
    if (i === text.length - 1) {
      clearInterval(typeWriter);
    }
    i++;
  }, 100);
};
