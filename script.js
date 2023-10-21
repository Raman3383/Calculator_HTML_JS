const button = document.querySelector("button");
const textInput1 = document.querySelector("#text-input1");
const textInput2 = document.querySelector("#text-input2");

function add(){
    
    if(checkEmpty()){
        alert('Enter values for a and b');
    }
    else{
        var a = parseInt(textInput1.value);
        var b = parseInt(textInput2.value);
        var sum = a + b;
        alert('Sum of ' + a +' and ' + b + ' is '+ sum);
    }  
    textInput1.value='';
    textInput2.value='';
}
function subtract(){
    if(checkEmpty()){
        alert('Enter values for a and b');
    }else{
        var a = parseInt(textInput1.value);
        var b = parseInt(textInput2.value);
        var subtract = a - b;
        alert('Difference  between ' + a +' and ' + b + ' is '+ subtract);
    }  
    textInput1.value='';
    textInput2.value=''; 
}
function multiply(){
    if(checkEmpty()){
        alert('Enter values for a and b');
    }else{
        var a = parseInt(textInput1.value);
        var b = parseInt(textInput2.value);
        var product = a * b;
        alert('Product of ' + a +' and ' + b + ' is '+ product);
    }  
    textInput1.value='';
    textInput2.value='';
}
function divide(){
    if(checkEmpty()){
        alert('Enter values for a and b');
    }else{
        var a = parseInt(textInput1.value);
        var b = parseInt(textInput2.value);
        var division = a / b;
        alert('Product of ' + a +' and ' + b + ' is '+ division);
    }  
    textInput1.value='';
    textInput2.value='';
}
function checkEmpty(){
    if( textInput1.value === ''  && textInput1.value===''){
        return true;
    }
    else{
        return false;
    }
}
