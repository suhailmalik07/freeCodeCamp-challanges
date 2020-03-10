function rangeOfNumbers(startNum, endNum) {
    if (endNum < startNum) {
        return [];
    } else {
        const rangeOfNumbersArray = rangeOfNumbers(startNum, endNum - 1);
        rangeOfNumbersArray.push(endNum);
        return rangeOfNumbersArray;
    }
};


console.log(rangeOfNumbers(1, 5)) // should return [1, 2, 3, 4, 5] using recursion