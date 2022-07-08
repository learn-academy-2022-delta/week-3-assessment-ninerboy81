// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

//const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("Fibonacci sequence", () => {
    const fibLength1 = 6
    const fibLength2 = 10
    it ("should return an array of the Fibonacci sequence", () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
}) 

// ReferenceError: fibonacci is not defined

// b) Create the function that makes the test pass.

    const fibonacci = (num) => {
        let fibArray = [1, 1]
        for (let i = 2; i < num; i++) {
            fibArray.push(fibArray[i - 2] + fibArray[i - 1])
        }
        return fibArray
    }

//psuedo code:
// first create a function
// create a variable called fibArray and set it to an array with the first two numbers in the sequence
// create a for loop that will run until the length of the array is equal to the number passed in
// create a variable called i and set it to 2
// create a variable called fibNum and set it to the sum of the previous two numbers in the array
// push the fibNum into the array
// return the array





// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

//const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

describe ("Odd numbers", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    it ("should return an array of only odd numbers sorted from least to greatest", () => {
    expect(oddNums(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(oddNums(fullArr2)).toEqual([-823, 7, 23])
    })
}
)

//ReferenceError: oddNums is not defined



// b) Create the function that makes the test pass.

    const oddNums = (arr) => {
        let oddArray = []
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number" && arr[i] % 2 !== 0) {
                oddArray.push(arr[i])
            }
        }
        return oddArray.sort((a, b) => a - b)
    }

    //psuedo code:
    // first create a function
    // create a variable called oddArray and set it to an open array
    // create a for loop that will run until the length of the array is equal to the number passed in
    // create a variable called i and set it to 0
    // create a variable called number and set it to the number at the index of the array
    // create a conditional statement that will check if the number is a number and if it is odd using modulo
    // if the number is odd, push it into the array using the .push method





// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

//const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

//const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

//const numbersToAdd3 = []
// Expected output: []

describe ("Accumulating sum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    it ("should return an array of the accumulating sum", () => {
    expect(accum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accum(numbersToAdd3)).toEqual([])
    })
}
)

//ReferenceError: accum is not defined


// b) Create the function that makes the test pass.

    const accum = (arr) => {
        let accumArray = []
        for (let i = 0; i < arr.length; i++) {
            let sum = 0
            for (let j = 0; j <= i; j++) {
                sum += arr[j]
            }
            accumArray.push(sum)
        }
        return accumArray
    }
   
//psuedo code:
// first create a function
// create a variable called accumArray and set it to an open array so that it can be filled with the accumulating sum
// create a for loop that will run until the length of the array is equal to the number passed in
// create a variable called i and set it to 0
// create a variable called sum and set it to 0
// create another for loop to be able to run through the new array
// create a variable called j and set it to 0
// use .push to add the sum of the array to the accumArray
// return the accumArray


