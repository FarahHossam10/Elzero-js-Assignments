function ageInTime(theAge) {
    if(theAge <= 10 || theAge >= 100) console.log("Age Out Of Range");
    else{
        console.log(`${theAge * 12} Months \n${theAge * 52.143} Weeks \n${theAge * 365} Days \n${theAge * 8760} Hours \n${theAge * 525600} Minutes\n${theAge * 525600 * 60} Seconds`);
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months