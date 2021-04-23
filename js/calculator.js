function doStuff() {

// query selector for all buttons
  // numbers
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');
  const five = document.querySelector('.five');
  const six = document.querySelector('.six');
  const seven = document.querySelector('.seven');
  const eight = document.querySelector('.eight');
  const nine = document.querySelector('.nine');
  const zero = document.querySelector('.zero');
  let number = document.querySelector('.number');
  // maths
  const add = document.querySelector('.add');
  const subtract = document.querySelector('.subtract');
  const multiply = document.querySelector('.multiply');
  const divide = document.querySelector('.divide');
  let operating = document.querySelector('.operator');
  //clear
  const clear = document.querySelector('.clear');
  const equals = document.querySelector('.equals');

  let calculatorScreen = document.querySelector('.calculatorScreen')

  function calculate(){
    let operator = 'unselected'
    let firstNumber = 'unselected'
    let secondNumber = 'unselected'
    let currentValue = 0

    function getNumbers(){
      if(firstNumber == 'unselected'){
        number.addEventListener('click',()=>{
          firstNumber = `${number.value}`
        })
        getNumbers();
      }else if(secondNumber == 'unselected'){
        number.addEventListener('click',
        ()=>{
          secondNumber = `${number.value}`
        })
      }
      if(operator == 'unselected'){
        operating.addEventListener('click',
        ()=>{
          operator = `${operating.value}`
        })
      }
      getNumbers();
    }
    divide.addEventListener('click',
    ()=>{
      operator = divide.value
      console.log(`${operator}`)
      console.log('dividing')
      updateScreen()
    });
    multiply.addEventListener('click',
    ()=>{
      operator = multiply.value
      console.log(`${operator}`)
      console.log('multiplying')
      updateScreen();
    });
    subtract.addEventListener('click',
    ()=>{
      operator = subtract.value
      console.log(`${operator}`)
      console.log('subtracting')
      updateScreen();
    });
    add.addEventListener('click',
    ()=>{
      operator = add.value
      console.log(`${operator}`)
      console.log('adding')
      updateScreen();
    });
    clear.addEventListener('click',
    ()=>{
      currentValue = 0
      updateScreen();
    });

    // clear maths
    // update .calculatorScreen with the math being done????
    equals.addEventListener('click',()=>{
      return currentValue
      console.log('equals')
      updateScreen()
    })
    // update .calculatorScreen with the math being done?????
    function updateScreen(){
      calculatorScreen.innerHTML = currentValue
    }

    // .value isn't a function just write .value at the end of thing getting val from
  }
calculate()
}

if (document.readyState === "loading") {  // Loading hasn't finished yet
  document.addEventListener("DOMContentLoaded", doStuff);
} else {  // `DOMContentLoaded` has already fired
  doStuff();
}
