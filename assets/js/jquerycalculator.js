// user can add, subtract, multiply, divide with jQuery

//user inputs numbers with button
$(document).ready(function(){

    $('#Subtract').click(function(){
      //get value out of input
  		 var numberUno = parseFloat($('#userInput1').val())
       var numberDos = parseFloat($('#userInput2').val())
       //do maths
       var subtraction = numberUno - numberDos
       //alert user of result of maths
       alert(subtraction)
    });
    $('#Add').click(function(){
      //get value out of input
      var numberUno = parseFloat($('#userInput1').val())
      var numberDos = parseFloat($('#userInput2').val())
      //do maths
      var addition = numberUno + numberDos
      //alert user of result of maths
      alert(addition)
   });
   $('#Multiply').click(function(){
     //get value out of input
     var numberUno = parseFloat($('#userInput1').val())
     var numberDos = parseFloat($('#userInput2').val())
     //do maths
     var multiplied = numberUno * numberDos
     //alert user of result of maths
     alert(multiplied)
  });
  $('#Divide').click(function(){
    //get value out of input
    var numberUno = parseFloat($('#userInput1').val())
    var numberDos = parseFloat($('#userInput2').val())
    //do maths
    var divided = numberUno / numberDos
    //alert user of result of maths
    alert(divided)
  });

})
