const number = ["aj", "am", "aa", "au", "ay", "ap", "aq", "ax", "at", "ag"];
const t1 = window.performance.now();
for (let x = 0; x < number.length; x++) {
    for (let i = 0; i < number.length - x; i++) {
        if (number[i] > number[i + 1]) {
            let temp = number[i];
            number[i] = number[i + 1];
            number[i + 1] = temp;
        }
    }
}
console.log(window.performance.now() - t1);
console.log(number)