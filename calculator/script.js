const display = document.getElementById('display');


function appendToDisplay(input){
  display.value += input;
}
function calculate(){
  display.value = eval(display.value);
}
function cleardisplay(){
  display.value = "";
}
function backspace(){
  display.value = display.value.slice(0,-1);
}

// construction notice
const sin = document.getElementById('sin-btn');
const cos = document.getElementById('cos-btn');
const tan = document.getElementById('tan-btn');

sin.onclick= function(){
  alert("This function is under construction!")
}

cos.onclick= function(){
  alert("This function is under construction!")
}
tan.onclick= function(){
  alert("This function is under construction!")
}
// notice end
