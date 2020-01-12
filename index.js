const inquirer = require("inquirer");
const fs = require ("fs");
const util = require ("util");
//const pdf = require("pdfkit");
//const myDoc = new pdf;

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser(){
    return inquirer.prompt ([
    {
        type: "input",
        name: "name",
        message: "Enter your Github user name."
    },
    {
        type: "checkbox",
        name: "color",
        choices: [
            "red",
            "green",
            "blue",
            "yellow"
        ]
    },
    ])
}
function generateHTML(answers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head></head>
    <body>
    <h1>my name is ${answers.name}</h1>
    </body>
    </html>
  `}
  promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("index.html", html);
  })