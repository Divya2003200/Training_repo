 
function myCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}

function resetCounter() {
   let counter = 0;
  return function() {
    counter = 0;  // Reset the counter to 0
    return counter;
  };
 
}
const add = myCounter();
const reset=resetCounter();
function myFunction(){
  document.getElementById("demo").innerHTML = add();
}

function myFunctionReset(){
  document.getElementById("demo").innerHTML = reset();
}
 
