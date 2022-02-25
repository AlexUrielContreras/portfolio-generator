// adds the required npm packages
const inquire = require("inquirer");
// getting the promise objects from generate site js for the promises and links pages together so data can be transfer 
const { writeFile, copyFile } = require('./utils/generate-site.js')
const generatePage = require('./src/page-template.js')

// function to prompt user for there name, github, and if they'll like to add a bio
const promptUser = () => {
   return inquire.prompt([
      {
         type: 'input',
         name: 'name',
         message: 'What is your name?',
         // validate makes sure that the user answers the question
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
         type: 'confirm',
         name: 'confirmAbout',
         message: 'Would you like you like to enter some information about yourself for an "about" section?',
         default: true
      },
      {
         // when recive the answer form confirmAbout and see if its true or false to see if the question should be asked 
         type: 'input',
         name: 'about',
         message: 'Provide some information about yourself:',
         when: ({ confirmAbout }) => {
            if (confirmAbout) {
               return true 
            }else {
               return false
            }
         }
      }
   ]); 
};

const promptProject = portfolioData => {
   console.log(`
   =================
   Add a New Project
   =================
   `);
    // if there's no project array property, this creates one
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
   // when all questions are answered it pushes data to the portfolioData.projects array
   // checks to see if confirmAddProject was true
   // if turn uses a callback with the data inside it to asked the questions again
   // if false send data to page-template
   .then(projectData => {
      portfolioData.projects.push(projectData);
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
      return generatePage(portfolioData);
   })
   .then(pageHtml => {
      return writeFile(pageHtml);
   })
   .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
   }) 
   .then(copyFileResponse => {
      console.log(copyFileResponse)
   })
   .catch(err => {
      console.log(err)
   });
     











