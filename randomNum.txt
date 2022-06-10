function randomNumber(param) {
    let numbers = [];
    while (numbers.length < param) {
        let num = Math.floor(Math.random() * param) + 1
        if (numbers.indexOf(num) === -1) {
            numbers.push(num)
        }
    }
    return numbers;
}

console.log(randomNumber(10000))