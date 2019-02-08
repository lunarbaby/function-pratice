"use strict";
//function(string, number){console logs string times number}

function logStringTimesANumber(string, number){
    let logString = string;
    let mulitpyString = logString.repeat(number);
    console.log(mulitpyString);
}
logStringTimesANumber("Hello ", 5);

//function(string, number){creates an array of string times number then console.log array}

function arrayWithStringMulitpy(string, number){
    let arrayWithString = [];
    let arrayString = string;
    let i = 0;
    while (i < number){
       arrayWithString.push(arrayString);
       i++; 
    }
    console.log(arrayWithString);
    consoleLogAnArray(arrayWithString);
}
arrayWithStringMulitpy("Good Day ", 6);

//function(array){console.logs array}

function consoleLogAnArray(array){
    console.log(array);
}

consoleLogAnArray(["Monday", "Tuesday", "Wednesday"]);