$(document).ready(function() {

  //define function to turn off all lights
  function turnOff(){
    //turnoff all the lights
    $('.commonLight').css('opacity', .2)
  }
  //define function to change light to red
  function changeToRed() {
    //call the funtion that resets all the lights
    turnOff()
    //turn on the red light
    $('#redLight').css('opacity', 1)
    //destroy the setInterval for red
    clearInterval(RedLight)
  }
  //define function to change light to yellow
  function changeToYellow() {
    //call the funtion that resets all the lights
    turnOff()
    //turn on the yellow light
    $('#yellowLight').css('opacity', 1)
    //destroy the setInterval for yellow
    clearInterval(YellowLight)
  }
  //define a function to change the light to green
  function changeToGreen() {
    //call the funtion that resets all the lights
    turnOff()
    //turn on the green light
    $('#greenLight').css('opacity', 1)
    //destroy the setInterval for green
    clearInterval(GreenLight)
    //loop the lights
    YellowLight = setInterval(changeToYellow, 4000)
    RedLight = setInterval(changeToRed, 6000)
    GreenLight = setInterval(changeToGreen, 10000)
  }
//call the functions to change the lights
  var YellowLight = setInterval(changeToYellow, 4000)
  var RedLight = setInterval(changeToRed, 6000)
  var GreenLight = setInterval(changeToGreen, 10000)
})

// how do you give value to a time? how do you set a countdown to reset?
