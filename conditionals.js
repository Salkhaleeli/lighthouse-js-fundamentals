const temperature = 18;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("temperature today is", (temperature));

let whichSchool = function (age) {
    if (age < 13) {
        return "Elementary School";
    } else if (13 <= age && age <= 18) {
        return "Secondary School";    
    } else if (age > 18) {
        return "Lighthouse Labs";
    }
}
whichSchool(12);



let x = 1;

while (x <= 20) {
    if (x % 3 === 0) {
        console.log('Julia');
        
    } else if (x % 5 === 0) {
        console.log('James');        
    } else if (x % 3 === 0 && x % 5 === 0) {
        console.log('JuliaJames');
        
    } else {
        console.log(x);
    }
    x = x +1;
    
}

let x = 9
for (x = 0; x >= 1; x--) {
    console.log('hello ' +x);
    
}

































