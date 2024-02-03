


let myString = "EEllzzzzzzzeroo";

let newString = myString.split("").filter((ele, index) => {
    return index === myString.indexOf(ele);
}).join("");

console.log(newString);  // Elzero