// 1*
// var userNum = window.prompt("Please Enter A Number");
// console.log(Number(userNum));
// *************
// 2*
// var userNum = window.prompt("Please Enter A Number");
// if (Number(userNum) % 3 === 0 && Number(userNum) % 4 === 0) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
// *************
// 3*
// var userFirstNum = window.prompt("Please Enter Your First Number");
// var userSecondNum = window.prompt("Please Enter Your Second Number");
// if (Number(userFirstNum) > Number(userSecondNum)) {
//   console.log(userFirstNum);
// } else {
//   console.log(userSecondNum);
// }
// *************
// 4*
// var userNum = window.prompt("Please Enter A Number");
// if (Number(userNum) > 0 || Number(userNum) === 0) {
//   console.log("Positive Number");
// } else {
//   console.log("Negative Number");
// }
// *************
// 5*
// var userFirstNum = Number(window.prompt("Please Enter Your First Number"));
// var userSecondNum = Number(window.prompt("Please Enter Your Second Number"));
// var userThirdNum = Number(window.prompt("Please Enter Your Third Number"));
// if (userFirstNum > userSecondNum && userFirstNum > userThirdNum) {
//   console.log("max element = " + userFirstNum);
// } else if (userSecondNum > userFirstNum && userSecondNum > userThirdNum) {
//   console.log("max element = " + userSecondNum);
// } else if (userThirdNum > userSecondNum && userThirdNum > userFirstNum) {
//   console.log("max element = " + userThirdNum);
// } else {
//   console.log("Please Make Sure You Enter Numbers");
// }
// if (userFirstNum < userSecondNum && userFirstNum < userThirdNum) {
//   console.log("min element = " + userFirstNum);
// } else if (userSecondNum < userFirstNum && userSecondNum < userThirdNum) {
//   console.log("min element = " + userSecondNum);
// } else if (userThirdNum < userSecondNum && userThirdNum < userFirstNum) {
//   console.log("min element = " + userThirdNum);
// } else {
//   console.log("Please Make Sure You Enter Numbers");
// }
// *************
// 6*
// var userNum = Number(window.prompt("Please Enter A Number"));
// if (userNum % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// *************
// 8*
// var char = window.prompt("Enter A Character");
// if (
//   char === "a" ||
//   char === "A" ||
//   char === "e" ||
//   char === "E" ||
//   char === "i" ||
//   char === "I" ||
//   char === "o" ||
//   char === "O" ||
//   char === "u" ||
//   char === "U"
// ) {
//   console.log("vowel");
// } else {
//   console.log("consonant");
// }
// *************
// 9*
// var userNum = Number(window.prompt("Please Enter A Number"));
// for (var i = 0; i < userNum; i++) {
//   console.log(i + 1);
// }
// *************
// 10*
// var userNum = Number(window.prompt("Please Enter A Number"));
// for (var i = 0; i < 12; i++) {
//   console.log((i + 1) * userNum);
// }
// *************
// 11*
// var userNum = Number(window.prompt("Please Enter A Number"));
// for (var i = 0; i < userNum; i++) {
//   if ((i + 1) % 2 === 0) {
//     console.log(i + 1);
//   }
// }
// *************
// 12*
// var num1 = Number(window.prompt("Enter A  Number "));
// var num2 = Number(window.prompt("Enter A  Number "));
// let sum = 1;
// for (var i = 0; i < num2; i++) {
//   sum *= num1;
// }
// console.log(sum);
// *************
// 12*
// var userFirstSubject = Number(window.prompt("Please Enter A First Subject"));
// var userSecondSubject = Number(window.prompt("Please Enter A Second Subject"));
// var userThirdSubject = Number(window.prompt("Please Enter A Third Subject"));
// var userFourthSubject = Number(window.prompt("Please Enter A Fourth Subject"));
// var userFifthSubject = Number(window.prompt("Please Enter A Fifth Subject"));
// var total =
//   userFirstSubject +
//   userSecondSubject +
//   userThirdSubject +
//   userFourthSubject +
//   userFifthSubject;
// var average = total / 5;
// var percent = (total / 500) * 100;
// console.log("Total marks = " + total);
// console.log("Avg marks = " + average);
// console.log("Percentage = " + percent);
// *************
// 13*
// var num = Number(window.prompt("Enter A  Month Number "));
// if (
//   num === 1 ||
//   num === 3 ||
//   num === 5 ||
//   num === 7 ||
//   num === 8 ||
//   num === 10 ||
//   num === 12
// ) {
//   console.log("Days In Month Is 31");
// } else if (num === 2) {
//   console.log("Days In Month Is 28 days and 29 in every leap year");
// } else if (num === 4 || num === 6 || num === 9 || num === 11) {
//   console.log("Days In Month Is 30");
// } else if (num > 12) {
//   console.log("There Are Only 12 Months ");
// } else {
//   console.log("Please Enter A Number");
// }
// *************
// 14*
// var userFirstSubject = Number(
//   window.prompt("Please Enter A First Subject mark")
// );
// var userSecondSubject = Number(
//   window.prompt("Please Enter A Second Subject mark")
// );
// var userThirdSubject = Number(
//   window.prompt("Please Enter A Third Subject mark")
// );
// var userFourthSubject = Number(
//   window.prompt("Please Enter A Fourth Subject mark")
// );
// var userFifthSubject = Number(
//   window.prompt("Please Enter A Fifth Subject mark")
// );
// var total =
//   userFirstSubject +
//   userSecondSubject +
//   userThirdSubject +
//   userFourthSubject +
//   userFifthSubject;
// var percent = (total / 500) * 100;
// if (percent >= 90) {
//   console.log("GRAD A");
// } else if (percent >= 80) {
//   console.log("GRAD B");
// } else if (percent >= 70) {
//   console.log("GRAD C");
// } else if (percent >= 60) {
//   console.log("GRAD D");
// } else if (percent >= 40) {
//   console.log("GRAD E");
// } else if (percent < 40) {
//   console.log("GRAD F");
// }
// *************
// 15*
// var num = Number(window.prompt("Enter A  Month Number "));
// switch (true) {
//   case num === 1 ||
//     num === 3 ||
//     num === 5 ||
//     num === 7 ||
//     num === 8 ||
//     num === 10 ||
//     num === 12:
//     console.log("Days In Month Is 31");
//     break;
//   case num === 2:
//     console.log("Days In Month Is 28 days and 29 in every leap year");
//     break;
//   case num === 4 || num === 6 || num === 9 || num === 11:
//     console.log("Days In Month Is 30");
//     break;
//   case num > 12:
//     console.log("There Are Only 12 Months");
//     break;
//   default:
//     console.log("Please Enter A Number");
// }
// *************
// 16*
// var char = window.prompt("Enter A Character");
// switch (true) {
//   case char === "a" ||
//     char === "A" ||
//     char === "e" ||
//     char === "E" ||
//     char === "i" ||
//     char === "I" ||
//     char === "o" ||
//     char === "O" ||
//     char === "u" ||
//     char === "U":
//     console.log("vowel");
//     break;
//   default:
//     console.log("consonant");
// }
// *************
// 17*
// var num1 = Number(window.prompt("Enter A  Number "));
// var num2 = Number(window.prompt("Enter A  Number "));
// switch (true) {
//   case num1 > num2:
//     console.log(`${num1} is Greater Than ${num2}`);
//     break;
//   case num2 > num1:
//     console.log(`${num2} is Greater Than ${num1}`);
//     break;
//   default:
//     console.log("Please Enter A Number");
// }
// *************
// 18*
// var num = Number(window.prompt("Enter A  Number "));
// switch (true) {
//   case num % 2 === 0:
//     console.log(`Number ${num} is Even`);
//     break;
//   case num % 2 !== 0:
//     console.log(`Number ${num} is Odd`);
//     break;
// default:
//     console.log("Please Enter A Number");
// }
// *************
// 19*
// var num = Number(window.prompt("Enter A  Number "));
// switch (true) {
//   case num > 0:
//     console.log(`Number ${num} is Positive`);
//     break;
//   case num < 0:
//     console.log(`Number ${num} is Negative`);
//     break;
//   case num === 0:
//     console.log(`Number is Equal To  ${num} `);
//     break;
//   default:
//     console.log("Please Enter A Number");
// }
// *************
// 20*
// var num1 = Number(window.prompt("Enter the first number:"));
// var operator = window.prompt("Enter an operator (+, -, *, /):");
// var num2 = Number(window.prompt("Enter the second number:"));

// var result = 0;
// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     console.log(result);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log(result);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log(result);
//     break;
//   case "/":
//     result = num1 / num2;
//     console.log(result);
//     break;
//   default:
//     result = "Invalid operator!";
//     console.log(result);
// }
