


let nums = [2, 12, 11, 5, 10, 1, 99];

let ans = nums.reduce((acc, ele) => {
    return ele % 2 != 0 ? acc + ele : acc * ele;
}, 1);

console.log(ans);   // 500