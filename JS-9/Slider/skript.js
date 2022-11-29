const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const img = document.querySelectorAll(".container img");
let i = 0;
next.onclick = () =>{
  img[i].style.opacity = '0';
  if (i==img.length-1) {
    i=0;
    img[i].style.opacity = '1';
  }
  else {
    img[i+1].style.opacity = '1';
    i++
  }
};
prev.onclick = () =>{
  img[i].style.opacity = '0';
  if (i==0) {
    i=img.length-1;
    img[i].style.opacity = '1';
  }
  else {
    img[i-1].style.opacity = '1';
    i--
  }
}
