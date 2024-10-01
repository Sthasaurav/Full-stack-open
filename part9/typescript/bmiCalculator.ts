const calculateBmi = (height: number, weight: number) => {
  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters);
  
  if(bmi<18.5)
{  return `Calculated BMI is ${bmi} i.e Underweight`
}
if(bmi>=18.5 && bmi<25){
  return `Calculated BMI is ${bmi} i.e Normal Range`
}
if(bmi<30 && bmi>=25){
  return `Calculated BMI is ${bmi} i.e Overweight`
}
if(bmi>=30)
{  return `Calculated BMI is ${bmi} i.e Obesity`
}

};

console.log(calculateBmi(180, 74));
