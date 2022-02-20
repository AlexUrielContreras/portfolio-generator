const inquire = require("inquirer");


const promptUser = () => {
   return inquire.prompt([
      {
         type: 'input',
         name: 'name',
         message: 'What is your name?',
         validate: nameInput => {
            if (nameInput) {
               return true 
            }else {
               console.log('Pleaser enter your name!')
               return false
            }
         }
      }, 
      {
         type: 'input',
         name: 'github',
         message: 'Enter your Github Username:',
         validate: githubInput => {
            if (githubInput) {
               return true;
            }else {
               console.log('Please enter your Github username')
               return false
            }
         }
      },
      {
         type: 'input',
         name: 'about',
         message: 'Provide some information about yourself:'
      }
   ]); 
};

const promptProject = portfolioData => {
   console.log(`
   =================
   Add a New Project
   =================
   `);
    // if there's no project array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
   }
   return inquire.prompt([
      {
         type: 'input',
         name: 'name',
         message: 'What is the name of your project?',
         validate: projectNameInput => {
            if (projectNameInput) {
               return true;
            }else {
               console.log('Please enter a project name')
               return false
            }
         }
      },
      {
         type: 'input',
         name: 'description',
         message: 'Provide a description of the project (Required)',
         validate: descriptionInput => {
            if (descriptionInput) {
               return true;
            }else {
               console.log('Pleaser enter a project description')
               return false
            }
         }
      },
      {
         type: 'checkbox',
         name: 'languages',
         message: 'What did you use to built this project with (Choose all the apply)',
         choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
         type: 'input',
         name: 'link',
         message: 'Enter the Giuthub link to your project. (Required)',
         validate: linkInput => {
            if (linkInput) {
               return true;
            }else {
               console.log('Please enter your github project link')
               return flase
            }
         }
      },
      {
         type: 'confirm',
         name: 'feature',
         message: 'Would you like to feature this project?',
         default: false
      },
      {
         type: 'confirm',
         name: 'confirmAddProject',
         message: 'Would you like yo enter another project',
         default: false
      }
   ])
   .then(projectData => {
      portfolioData.projects.push(portfolioData);
      if (projectData.confirmAddProject) {
         return promptProject(portfolioData)
      }else{
         return portfolioData
      }
   });
     
};

promptUser()
   .then(promptProject)
   .then(portfolioData => {
      console.log(portfolioData);
   });       








//const fs = require('fs');
//const generatePage = require('./src/page-template.js');

// takes command-line argument and makes them into arrays starting at index 2 
// and including the last index
//const [name, github] = profileDataArgs;



//fs.writeFile('index.html', generatePage(name, github), err => {
   //if (err) throw err;
   //console.log('Portfolio complete! Check out index.html to see the output!');
//});

