interface Result
{ 
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
  }

export const calculateExercises =(dailyHours:number[],target:number):Result=>{
    const periodLength=dailyHours.length
    const trainingDays=dailyHours.filter((hours)=>hours!==0).length
    const average=(dailyHours.reduce((a,b)=>a+b,0)/periodLength)
    const success=average >= target

    let rating;
    let ratingDescription;
    if (average >= target) {
        rating = 3;
        ratingDescription = 'excellent';
      } else if (average >= target * 0.75) {
        rating = 2;
        ratingDescription = 'not too bad but could be better';
      } else {
        rating = 1;
        ratingDescription = 'Satisfactory';
      }
      return {
        periodLength,
        trainingDays,
        success,
        rating,
        ratingDescription,
        target,
        average,
      };

}

// console.log(calculateExercises([3,0,2,4.5,0,3,1],2))
// const dailyHours:number=Number(process.argv[2]);
// const dailyHours:number=Number(process.argv[2]);
// const target:number=Number(process.argv[3])

const dailyHours = process.argv.slice(2, -1).map(Number);
const target = Number(process.argv[process.argv.length - 1]);

console.log(calculateExercises(dailyHours,target))