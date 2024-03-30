#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";
let myBalance = 50000; // Dollar
let myPin = 23456;
let pinanswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number",
});
if (pinanswer.pin === myPin) {
    console.log("Correct pin entered");
    let operationanswer = await inquirer.prompt({
        name: "operation",
        message: "please select from following options",
        type: "list",
        choices: ["fast cash", "withdraw amount", "check balance"],
    });
    if (operationanswer.operation === "fast cash") {
        let amountanswer = await inquirer.prompt({
            name: "amount",
            message: "please select the amount from the following",
            type: "list",
            choices: ["1000", "2500", "5000", "10000"],
        });
        myBalance -= amountanswer.amount;
        console.log("your remaining balance is" + myBalance);
    }
    else if (operationanswer.operation === "withdraw amount") {
        let amountanswer = await inquirer.prompt({
            name: "amount",
            message: "Enter your amount",
            type: "number",
        });
        if (amountanswer.amount <= myBalance) {
            {
                myBalance -= amountanswer.amount;
            }
            console.log("Your remaining balance is" + myBalance);
        }
        else if (amountanswer.amount > myBalance) {
            console.log("Insufficient amount");
        }
    }
    else if (operationanswer.operation === "check balance") {
        console.log("Your current balance is" + myBalance);
    }
}
else {
    console.log("Incorrect pin entered");
}
