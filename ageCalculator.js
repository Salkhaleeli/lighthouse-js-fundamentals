const ageCalculator = function (name, yearOfBirth, currentYear) {
    const yourAge = currentYear - yearOfBirth;
    return name + ' is ' + yourAge + " years old";
  }
  console.log(ageCalculator('Suzie', 1989, 2021));
  console.log(ageCalculator('Jack', 2008, 2020));
  console.log(ageCalculator('Ali', 2020, 2020));