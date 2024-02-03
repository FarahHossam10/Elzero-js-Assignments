

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray.reduce((acc, ele) => {
    if (typeof(ele) === "object"){
        ele = ele.reduce((acc, el) => {
            return `${acc}${el}`;
        });
    }
    return `${acc}${ele}`;
});

console.log(newArray);   // Elzero