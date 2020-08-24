/* Coding Challenge 1 */
/* 
Mike and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).


1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.


*/

var mike = {
    fullName: 'Mike Jones',
    mass: 68,
    height: 1.65,
    calcBmi: function(){
        this.Bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var john = {
    fullName: 'Johnny Woodpecker',
    mass: 70,
    height: 2.0,
    calcBmi: function(){
        this.Bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
} 
mike.calcBmi();
john.calcBmi();
    if (john.Bmi > mike.Bmi) {
    console.log(john.fullName + '\'s' + ' level is higher at a BMI score of ' 
    + john.Bmi);
} else if (mike.Bmi > john.Bmi) {
    console.log(mike.fullName + '\'s' + ' level is higher at a BMI score of ' 
    + mike.Bmi);
} else {
    console.log('The BMI score is a draw!');
}