var firstValue = prompt("Enter number:")
var lastValue = prompt("Enter last number:")
alert(firstValue * lastValue)
alert("Calculator!")
var firstNum = prompt("Enter first number:" , "");
var lastNum = prompt("Enter last number:" , "");

var bodmas = prompt("What do you want ? 1.Multiplication 2.Devide 3.Addition 4.Substraction" , "");
if(bodmas == "1"){
    alert(firstNum * lastNum)
};
if(bodmas === "2"){
    alert(firstNum / lastNum)
};
if(bodmas === "3"){
    alert((+firstNum) + (+lastNum))
};
if(bodmas === "4"){
    alert(firstNum - lastNum)
};
