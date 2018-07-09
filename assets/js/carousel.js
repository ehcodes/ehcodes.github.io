// what can the user do?
// what does the user expect?
// What can the user see?

//skip through photos using two buttons
//back button to go backwards
//skip button to go forwards
//buttons should loop - if i click back on the first picture it should go to the last picture
//buttons should loop - if i click back on the last picture it should go to the first picture

//user can see one picture and two buttons
var carousel = [
  "assets/img/carousel/uno.jpg",
  "assets/img/carousel/dos.jpg",
  "assets/img/carousel/tres.jpeg",
  "assets/img/carousel/quattro.png",
  "assets/img/carousel/cinco.jpg"
];

$(document).ready(function(){
  var pictureIndex = 0
  $('#back').on("click", function(){
    if(pictureIndex == 0 ){
      pictureIndex = carousel.length - 1
    }else{
      pictureIndex = pictureIndex - 1
    }
    $('#imgCarousel').attr('src', carousel[pictureIndex])
  })

  $('#skip').on("click", function(){
    if(pictureIndex == 4){
      pictureIndex = carousel.length - 5;
    }else{
      pictureIndex++
    }
    $('#imgCarousel').attr('src', carousel[pictureIndex])
    console.log(pictureIndex)
  })
});
