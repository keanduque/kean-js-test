/* 
PART 2 Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
    1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
    2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
    3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const markObj = {
    fullname    : "Mark Miller",
    mass        : 78,
    height      : 1.69,
    calcBMI : function (){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}
const johnObj = {
    fullname    : "John Smith",
    mass        : 922,
    height      : 1.95,
    calcBMI : function (){
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}
markObj.calcBMI();
console.log(markObj.BMI);

johnObj.calcBMI();
console.log(johnObj.BMI);

const markHigherBMI = `${markObj.fullname}'s BMI (${markObj.BMI}) is higher than ${johnObj.fullname}'s ${johnObj.BMI}`;

const johnHigherBMI = `${johnObj.fullname}'s BMI (${johnObj.BMI}) is higher than ${markObj.fullname}'s ${markObj.BMI}`;

(markObj.BMI > johnObj.BMI) ? console.log(markHigherBMI) : console.log(johnHigherBMI); 










