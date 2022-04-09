// Elements
const display = document.getElementById('display');
const subtractBtn = document.getElementById('subtract');
const addBtn = document.getElementById('add');
const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');


// Variables
var currentNumber = 0;



// Main
addBtn.addEventListener("click", incremment);
subtractBtn.addEventListener("click", decremment);



// Functions
function incremment(){
  display.innerText = ++currentNumber;
  checkDisplayLimit()
}


function decremment(){
  display.innerText = --currentNumber;
  checkDisplayLimit()
}


function checkDisplayLimit(){

  // Disable button toggle
  addBtn.disabled = currentNumber == 10;
  subtractBtn.disabled = currentNumber == -10;


  // Class arrows toggle
  if(addBtn.disabled)
  arrowUp.classList.add('disabled');
  else
  arrowUp.classList.remove('disabled');

  if(subtractBtn.disabled)
  arrowDown.classList.add('disabled');
  else
  arrowDown.classList.remove('disabled');


  // Add red color in negative numbers
  display.innerText < 0 ? display.style.color = "red" : display.style.color = '#fff';

}
