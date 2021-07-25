const generateReadMe = require('./markdown.js')
const { prompt } = require('inquirer')
const util = require("util")
const fs = require('fs')

const questions = [ 
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide dependencies needed to be installed to use.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for how to use.'
    },
    {
      type:'list',
      name:'license',
      message:'Please choose a license:',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0','BSD 3','None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide guidelines for how to contribute.'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Write tests for your app.'
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Questions:'
    }
  ]

function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => {
    console.log(fileName)
    console.log(data)
    if (err) { console.log(err) }
    console.log('README has been generated!')
  })
}
// function to initialize program
function init() {
  prompt(questions)
    .then(data => {
      writeToFile('readMe.md', generateReadMe(data));
      console.log(data)
    })
}
// function call to initialize program
init();