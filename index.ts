#! /user/bin/env node

import inquirer from 'inquirer';

// Printing A Wellcome Message
console.log("\n\tWellcome to \'qureshi44\' - CLI Simpale Calculator\n");

// Asking Qustions From Usere Through inquirer

const answer = await inquirer.prompt([
    { Message: "enter your firstnumbar", type: "numbar", name: "firstnumbar" },
    {
      Message: "enter your secendnumbar",
      type: "numbar",
      name: "secendnumbar",
    },
    {
      message: "select one of opreter to perfom action",
      type: "list",
      name: "opreter",
      choices: ["ADDITION","SUBTRAION","MULTIPALCTION","DIVISON"],
    },
  ]);

  // candition statment
      if (answer.opreter ==="ADDITION"){
  console.log(answer.firstnumbar + answer.secendnumbar); 
}else if (answer.opreter ==="SUBTRAION"){
  console.log(answer.firstnumbar - answer.secendnumbar);
}else if (answer.opreter ==="MULTIPALCTION"){
  console.log(answer.firstnumbar * answer.secendnumbar);
}else if (answer.opreter ==="DIVISON"){
  console.log(answer.firstnumbar / answer.secendnumbar);
}
       else{"plz select correct opreter"};