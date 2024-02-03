function checkStatus(a, b, c) {
    typeof a === "string"? Name = a : typeof a === "number"? Age = a : Status = a;
    typeof b === "string"? Name = b : typeof b === "number"? Age = b : Status = b;
    typeof c === "string"? Name = c : typeof c === "number"? Age = c : Status = c;
    if(Status === true) console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Available For Hire`);
    else console.log(`Hello ${Name}, Your Age Is ${Age}, You Are Not Available For Hire`);
  }
  
  // Needed Output
  checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
  checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"