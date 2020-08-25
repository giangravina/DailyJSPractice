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

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

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

var mike = {
    fullName: 'Mike Jones',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mike.calcTips();

john.average = calcAverage(john.tips);
mike.average = calcAverage(mike.tips);
console.log(john, mike);

if (john.average > mike.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if (mike.average > john.average) {
    console.log(mike.fullName + '\'s family pays higher tips, with an average of $' + mike.average);
}




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
