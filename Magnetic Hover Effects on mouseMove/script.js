const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  let boxWidth = box.clientWidth;
  let boxHeight = box.clientHeight;
  let moveX = (x - boxWidth / 2);
  let moveY = (y - boxHeight / 2);
  box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
});
box.addEventListener("mouseout", (e) => {
    box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`
})