#! /usr/bin/env node
import inquirer from 'inquirer';
const Quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1:What is the correct way to check if two values are not equal in typescript?",
        choices: ["a == b", "a ===b", "a = b", "a !==b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Which of the following character is commonly allowed in variable name in typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Which operator is commonly used to string concatenation in typescript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "In Typescript, Which symbol is commonly used to terminate a statement?",
        choices: [".", ":", ";", ","]
    },
    {
        name: "question_5",
        type: "list",
        message: "Which method of inquirer.js is used to start prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    },
]);
let score = 0;
switch (Quiz.question_1) {
    case "a !==b":
        console.log("1. correct!");
        ++score;
        break;
    default:
        console.log("1. Incorrect!");
}
switch (Quiz.question_2) {
    case "$":
        console.log("2. correct!");
        ++score;
        break;
    default:
        console.log("2. Incorrect!");
}
switch (Quiz.question_3) {
    case "+":
        console.log("3. correct!");
        ++score;
        break;
    default:
        console.log("3. Incorrect!");
}
switch (Quiz.question_4) {
    case ";":
        console.log("4. correct!");
        ++score;
        break;
    default:
        console.log("4. Incorrect!");
}
switch (Quiz.question_5) {
    case "prompt()":
        console.log("5. correct!");
        ++score;
        break;
    default:
        console.log("5. Incorrect!");
}
console.log(`score: ${score}`);
