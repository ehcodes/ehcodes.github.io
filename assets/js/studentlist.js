// what can the user do?
// what does the user expect?
// What can the user see?

//input student Name
//click button to add name to list

//expect a name to be added to an array
//can click another button to print the list of student to the document



//get value out of input


//event listener that fires a function



$(document).ready(function(){

  var students = [];
//event listener that fires a function
    $("button").eq(0).on("click", function(){

      var studentName = $('input').val()
      //put value into an array
      students.push(studentName)
    });

    //event listener that fires a function
    $('button').eq(1).on("click", function(){
      //loop through the array (.foreach)a
      students.forEach(function(el){
      //add each element to dom
      $('ul').append("<li>"+el+"</li>")
      });
    });
});
