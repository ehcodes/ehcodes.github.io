function runJS() {

  function replaceImg(){
    let imgSrc = [
      '<img class="replaceImg" src="../imgs/img-car/1.jpg" alt="the first image in the carousel">',
      '<img class="replaceImg" src="../imgs/img-car/2.jpg" alt="the second image in the carousel">',
      '<img class="replaceImg" src="../imgs/img-car/3.jpg" alt="the third image in the carousel">',
      '<img class="replaceImg" src="../imgs/img-car/4.jpg" alt="the fourth image in the carousel">',
      '<img class="replaceImg" src="../imgs/img-car/5.jpg" alt="the fifth image in the carousel">'
    ]

    let imgSection = document.querySelector('.replaceSection');
    const last = document.querySelector('#backButton');
    const next = document.querySelector('#forwardButton');

    function nextImage(count){
      next.addEventListener('click', () => {
        imgSection.innerHTML=imgSrc[count]
        count++
        if(count>4){
          count=0;
        }
      })
    }
    nextImage(0)

    function lastImage(count){
      last.addEventListener('click', () => {
        imgSection.innerHTML=imgSrc[count]
        count--
        if(count==-1){
          count=4;
        }
      })
    }
    lastImage(4)
  }
  replaceImg()
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", runJS);
} else {
  runJS();
}
