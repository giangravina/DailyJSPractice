/*****************************
* CODING CHALLENGE 2
*/

/*

John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


*/

var john = {
    fullName: 'Johnny Woodpecker',
    bills: [124, 48, 268, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) 
        {
          //determine percentage based on tipping rules
          var percentage;
          var bill = this.bills[i];

          if (bill < 50)
          {
            percentage = .2;
          } else if (bill > 50 && bill < 200 )
          {
            percentage = .15;   
          } else {
            percentage = .10;
          }


          //add result to corresponding arrays
          this.tips[i] = bill * percentage;
          this.finalValues[i] = bill + bill * percentage;
        }
    }

}

john.calcTips();
console.log(john);







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
