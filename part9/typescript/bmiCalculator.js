var calculateBmi = function (height, weight) {
    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);
    if (bmi < 18.5) {
        return "Calculated BMI is ".concat(bmi, " i.e Underweight");
    }
    if (bmi >= 18.5 && bmi < 25) {
        return "Calculated BMI is ".concat(bmi, " i.e Normal Range");
    }
    if (bmi < 30 && bmi >= 25) {
        return "Calculated BMI is ".concat(bmi, " i.e Overweight");
    }
    if (bmi >= 30) {
        return "Calculated BMI is ".concat(bmi, " i.e Obesity");
    }
};
console.log(calculateBmi(180, 74));
