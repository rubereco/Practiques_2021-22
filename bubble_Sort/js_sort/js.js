// Function sortLowToHigh: This function is used to sort any type of array 
// like String, int, char. (Note: This can't sort array that have ints and Strings)

// # 1 Creation of the array. (Note: If you use this function you don't need this line)

// # 2 t1 is used to capture the time it started (Note: This line is not practical, cause
// its executed on the browser. The browser can't see smaller amounts of time than seconds)

// # 3 This FOR arrange the amount of times it has to cicle

// # 4 This FOR watch every element of array. Every time goes through (#3) it substract the 
// amount of times it have to watch (Note: the last part is for optimization)

// # 5 Compares the elements of the array if its bigger it goes behind. (Note: if you want 
// to sort it high to low change > to <)

// # 6 Swap elements on the array

// # 7 Calculate and show the time it took

function sortLowToHigh(array) {
    const array = ["aj", "am", "aa", "au", "ay", "ap", "aq", "ax", "at", "ag"]; // (#1)
    const t1 = window.performance.now(); // (#2)
    for (let x = 0; x < array.length; x++) { // (#3)
        for (let i = 0; i < array.length - x; i++) { // (#4)
            if (array[i] > array[i + 1]) { // (#5)
                let temp = array[i]; // (#6)
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    console.log(window.performance.now() - t1); // (#7)
    console.log(array)
}