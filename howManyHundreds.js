const howMany = function (num) {
    const remainder =  num % 100;
    if (remainder === 0) {
        return num/100;
    }
    else {
        return (num - remainder)/100;
    }
}
console.log('The Number 1000 has ' + howMany(1000) + ' hundreds');
console.log('The Number 894 has ' + howMany(894) + ' hundreds');
console.log('The Number 520 has ' + howMany(520) + ' hundreds');
console.log('The Number 123456 has ' + howMany(123456) + ' hundreds');
console.log('The Number 999 has ' + howMany(999) + ' hundreds');
console.log('The Number 7 has ' + howMany(7) + ' hundreds');