const range = function(start, end, step) {
    const newRange = [];
    if (start > end || step < 0 || start === undefined || end === undefined || step === undefined) {
        return newRange;
    } else {
    for (let i = start; i <= end; i += step) {
        newRange.push(i);
        }
        
    }
    return newRange;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));