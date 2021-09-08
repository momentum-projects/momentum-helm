const val1 = window.prompt('first number: ');
const val2 = window.prompt('second number: ');
alert("The sum is: " + (parseInt(val1 || "") + parseInt(val2 || "")));