
//     var enteredalphabet = prompt('Enter an alphabet:');

//     enteredalphabet = enteredalphabet.toLowerCase();

//     switch (enteredalphabet) {
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//         alert(enteredalphabet + ' is a vowel.');
//         break;
//     case 'b':
//     case 'c':
//     case 'd':
//     case 'f':
//     case 'g':
//     case 'h':
//     case 'j':
//     case 'k':
//     case 'l':
//     case 'm':
//     case 'n':
//     case 'p':
//     case 'q':
//     case 'r':
//     case 's':
//     case 't':
//     case 'v':
//     case 'w':
//     case 'x':
//     case 'y':
//     case 'z':
//         alert(enteredalphabet + ' is a consonant.');
//         break;
//     default:
//         alert(enteredalphabet + ' is not an alphabet character.');
//     }



//     var num1 = parseFloat(prompt('Enter the first number:'));

//     var num2 = parseFloat(prompt('Enter the second number:'));

//     var oprtr = prompt('Enter the operator (+, -, *, /):');

//     switch (oprtr) {
//     case '+':
//         var result = num1 + num2;
//         console.log('Result: ' + num1 + ' ' + oprtr + ' ' + num2 + ' = ' + result);
//         break;
//     case '-':
//         var result = num1 - num2;
//         console.log('Result: ' + num1 + ' ' + oprtr + ' ' + num2 + ' = ' + result);
//         break;
//     case '*':
//         var result = num1 * num2;
//         console.log('Result: ' + num1 + ' ' + oprtr + ' ' + num2 + ' = ' + result);
//         break;
//     case '/':
//         if (num2 !== 0) {
//         var result = num1 / num2;
//         console.log('Result: ' + num1 + ' ' + oprtr + ' ' + num2 + ' = ' + result);
//         } else {
//         console.log('zero is not valied');
//         }
//         break;
//     default:
//         console.log('plese enter currect operator');
//     }


// var units = parseInt(prompt('Enter the total units consumed:'));


// var totalBill = 0;

// if (units <= 50) {
//   totalBill = units * 0.5;
// } else if (units <= 150) {
//   totalBill = 50 * 0.5 + (units - 50) * 0.75;
// } else if (units <= 250) {
//   totalBill = 50 * 0.5 + 100 * 0.75 + (units - 150) * 1.2;
// } else {
//   totalBill = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (units - 250) * 1.5;
// }


// var surcharge = totalBill * 0.2;
// totalBill += surcharge;

// console.log('Total Units: ' + units);
// console.log('Total Bill: INR ' + totalBill.toFixed(2));
