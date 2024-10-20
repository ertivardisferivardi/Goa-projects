// Greeting Function
// Create a function greet that accepts a name as a parameter and greets the person. If no name is provided, the default name should be "Guest".
// function greet(name = "Guest") {
//     console.log(`Hello, ${name}!`);
// }
// greet()
// Addition with Default Parameters
// Write a function add_numbers that takes two numbers and returns their sum. The second number should have a default value of 0.
// function add_numbers(num1, num2 = 0) {
   
//     console.log(num1 + num2)
// } 
// add_numbers(10,23)
// // Rectangle Area Calculator
// // Create a function calculate_area to find the area of a rectangle. It should take two parameters: length and width. If the width is not provided, use a default value of 1.
// function calculate_area(length, width = 1 ){
//     console.log(length * width)
// }

// calculate_area(10,)

// Temperature Conversion
// Write a function convert_temperature to convert temperatures between Celsius and Fahrenheit. It should have two parameters: temperature and scale (either "C" for Celsius or "F" for Fahrenheit), with "C" as the default scale.
// function convert_temperature(temperature, scale = 'C') {
//     if (scale === 'C') {
//         console.log((9 / 5) * temperature + 32);
//     } else if (scale === 'F') {
//         console.log((5 / 9) * (temperature - 32)); 
//     }
// }
// convert_temperature(30,)

// Shopping List
// Create a function add_to_shopping_list that accepts an item and a quantity. The quantity should default to 1 if not provided.
// function add_to_shopping_list(item,quantity=1) {
//     console.log('Adding '+ quantity +" "+ item + ' to the shopping list.');
// }
// add_to_shopping_list('banana',4)

// Power Function
// Write a function power that calculates the power of a number with a default exponent value of 2 (i.e., square).
// function power(num,power=2){
//     console.log(num**power)
// }
// power(9,3)

// Personalized Message
// Create a function create_message that generates a personalized message given a name and an optional greeting ("Hello" as default).
// function create_message(name,greeting = "What's up My boi"){
//     console.log(greeting + " " + name);
// }
// create_message("levan")
// Calculate Discount
// Write a function apply_discount that calculates the final price of an item after applying a discount. The discount should be a default of 10%.
// function apply_discount(amount,discount = 10) {
//     console.log(amount -(amount*discount)/100)
// }

// apply_discount(100,23)
// Introduction Function
// Create a function introduce that takes a name, age, and country. If age and country are not provided, they should default to "unknown".
// function introduce(name, age = "unknown", country = "unknown") {
//     if (age === "unknown" && country === "unknown") {
//         console.log(`My name is ${name}, my age is ${age} and also My country is ${country}.`);
//     } else if (age === "unknown") {
//         console.log(`My name is ${name}, my age is ${age} and I'm from ${country}.`);
//     } else if (country === "unknown") {
//         console.log(`My name is ${name}, I'm ${age} years old and my country is ${country}.`);
//     } else {
//         console.log(`My name is ${name}, I'm ${age} years old and I'm from ${country}.`);
//     }
// }

// introduce("Levani")
// Calculate Final Price
// Write a function calculate_price that takes the price of an item and a sales tax. The sales tax should default to 5%.
// function calculate_price(item,salestax=5) {
//     console.log(item + (item*salestax)/100)
// }

// calculate_price(75)
// Find the Maximum
// Create a function find_max that accepts three numbers and returns the largest one using comparison operators and if-else statements.
// function find_max(num1,num2,num3){
//     if (num1 > num2 && num1 > num3){
//         console.log(num1)
//     }else if (num2 > num1 && num2 > num3){
//         console.log(num2)
//     }else {
//         console.log(num3)
//     }
// }
// find_max(10,0,3)