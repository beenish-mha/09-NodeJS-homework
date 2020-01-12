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
function generatePdf(answers) {
    return `
myDoc.font("times roman")
    .fontsize("28")
    .text("hello Beenish")
  `}
  promptUser()
  .then(function(answers) {
    const pdfFile = generatepdf(answers);

    return writeFileAsync("index.pdf", pdfFile);
  })