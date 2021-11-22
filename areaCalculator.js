const calculateRectangleArea = function (length, width) {
    const recArea = length * width;
    if (length < 0 || width < 0) {
        console.log(undefined)
    }
    else {
        return length * width;
    }
    
}
console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

const calculateTriangleArea = function (length, base) {
    if (length < 0 || base < 0) {
        console.log(undefined)
    }
    else {
        return length * base/2;
    }
    
}
console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

const calculateCircleArea = function (raduis) {
    const circArea = Math.PI * raduis * raduis;
    if (raduis < 0) {
        console.log(undefined)
    }
    else {
        return circArea;
    }
    
}
console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));