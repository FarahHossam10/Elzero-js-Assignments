


let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let newArray = numsAndStrings.map((ele) => {
    return !isNaN(parseInt(ele)) ? -ele : "";
}).filter((ele) => {
    return ele != "";
});

console.log(newArray);     // [-1, -10, 10, 20, -5, -3]