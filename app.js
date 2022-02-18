const inquire = require("inquirer");

inquire
   .prompt([
      {
         type: 'input',
         name: 'name',
         message: 'What is your name?'
      }
   ])
   .then(answer => console.log(answer));













//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

// takes command-line argument and makes them into arrays starting at index 2 
// and including the last index
//const [name, github] = profileDataArgs;



//fs.writeFile('index.html', generatePage(name, github), err => {
   //if (err) throw err;
   //console.log('Portfolio complete! Check out index.html to see the output!');
//});

