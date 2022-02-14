// takes command-line argument and makes them into arrays starting at index 2 
// and including the last index
const profileDataArgs = process.argv.slice(2, process.argv.length);



const printProfileData = profileDataArr => {
   profileDataArgs.forEach(profileItem => console.log(profileItem));  
};

printProfileData(profileDataArgs);