

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let ans = mix.map((ele) => {
    return isNaN(parseInt(ele)) ? ele : "";
}).reduce((acc, ele) => {
    return `${acc}${ele}`;
});

console.log(ans);   // Elzero