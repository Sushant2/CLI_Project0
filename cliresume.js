var inquirer = require("inquirer");
const cp = require("child_process");
function displayDetails() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selection",
        choices: ["About", "Skills", "Projects", "Linkedin"],
      },
    ])
    .then((choices) => {
      // Use user feedback for... whatever!!
      if (choices.selection == "About") {
        console.log("Autodidact | MERN | CSE Student | Pepcoder");
        displayNext()
      } else if (choices.selection == "Skills") {
        console.log("C++, DSA, JAVA, OOPS, MERN, Git");
        displayNext()
      } else if (choices.selection == "Projects") {
        cp.execSync("start chrome https://github.com/Sushant2");
        displayNext()
      } else if (choices.selection == "Linkedin") {
        cp.execSync("start chrome https://www.linkedin.com/in/ersushant/");
        displayNext()
      }
    });
}

displayDetails();

function displayNext(){
    var inquirer = require('inquirer');
    inquirer.prompt([
        {
            type: 'list',
            name: 'Go back',
            choices:['back']
        }
    ])
    .then((choice)=>{
        if(choice.Goback = 'back'){
            displayDetails();
        }
    })
}
