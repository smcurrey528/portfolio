window.addEventListener("resize", resize);


function resize() {
  console.log(window.innerWidth);
  let h1 = document.getElementById('size');
  h1.innerHTML = window.innerWidth
}
