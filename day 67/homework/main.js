

// ## **10 Simple Constructor Exercises**

// ### 1. **Basic Constructor with Properties**
//    - Create a `Person` constructor with properties `name` and `age`.  
//    - Add a method `introduce()` that logs:  
//      `"Hi, I am <name> and I am <age> years old."`
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.introduce = function (){
//         console.log("hello i am " + name +  " and I am " + age + "years old")
//     }
        
// }

// const person1 = new Person('Alice', 25);

// person1.introduce();




// ### 2. **Constructor with Default Parameter Value**
//    - Create a `Book` constructor with parameters `title` and `author`.  
//    - If no `author` is provided, set it to `"Unknown"`.  
//    - Add a method `getDetails()` to print the book's details.
// function Book(title, author) {
//     this.title = title;
//     this.author = author || "Unknown";
//     this.getDetails = function () {
//         console.log(`${this.title} by ${this.author}`);
//     }
// }
// const Library1 = new Book("City Library",["1998","Time traveler"]);
// Library1.getDetails();



// ### 3. **Constructor with Arrays**
//    - Create a `Classroom` constructor that takes an array of `students`.  
//    - Add a method `countStudents()` to log the number of students in the array.
// function Classroom(students){
//     this.students = students;
//     this.countStudents = function () {
//         console.log(`There are ${this.students.length} students in the class.`);
//     }
// }
// const classroom = new Classroom(["John", "John", "John"]);
// classroom.countStudents();




// ### 5. **Constructor with Boolean State**
//    - Create a `Light` constructor with a `state` property initialized to `"off"`.  
//    - Add a method `toggle()` to switch the state between `"on"` and `"off"`.
// function Light(state) {
//   this.state = state;
//   this.toggle = function () {
//     if (this.state === "on") {
//       this.state = "off";
//     } else {
//       this.state = "on";
//     }
//   };
// }
// const light = new Light("on");
// light.toggle();
// console.log(light.state);

// ---

// ### 6. **Product Constructor with Properties**
//    - Create a `Product` constructor with properties `name` and `price`.  
//    - Add a method `getDetails()` to log:  
//      `"Product: <name>, Price: <price> USD"`
// function Product(name, price) {
//     this.name = name;
//     this.price = price;
//     this.getDetails = function (){
//         console.log("product:" + name + ", Price: " + price + " USD");
//     }
// }
// const product = new Product("iPhone", 1000);
// product.getDetails();

// ---

// ### 7. **Constructor with Object Properties**
//    - Create a `User` constructor with properties `username` and `contact` (an object containing `email` and `phone`).  
//    - Add a method `getContactInfo()` to print the user’s contact information.


// function User(username, contact){
//     this.username = username;
//     this.contact = contact;
//     this.getContactInfo = function () {
//         console.log(`Username: ${this.username}, Email: ${this.contact.email}, Phone: ${this.contact.phone}`);
//     }
// }
// const user = new User('Luka', { email: 'nanoviobiznas@gmail.com', phone: '+381631234567' });
// user.getContactInfo();
// ---



// ---

// ### 9. **Cart Constructor with Array Management**
//    - Create a `Cart` constructor with an empty `items` array.  
//    - Add methods `addItem(item)` to add an item and `getItems()` to print all items.
// function Cart(items) {
//     this.items = items;
//     this.addItem = function (item) {
//         this.items.push(item);
//     }
//     this.getItems = function () {
//         console.log(this.items);
//     }
// }
// const cart = new Cart(["Melon", "Banana"]);
// cart.addItem('apple');
// cart.addItem('orange');
// cart.getItems();


// ---

// ### 10. **Conditional Logic in Constructor**
//    - Create a `Student` constructor with properties `name` and `marks` (an array of numbers).  
//    - Add a method `hasPassed()` that returns `true` if the average mark is 50 or above, otherwise `false`.
// function Student(name, marks) {
//   this.name = name;
//   this.marks = marks;
//   let result = 0;
//   this.hasPassed = function() {
//     for(let i = 0; i < this.marks.length; i++){
//         result += this.marks[i];
        
      
//       }
//     if (result / marks.length >= 50){
//         console.log(name + " has passed");
//     }else{
//         console.log(name + " has failed");
//     }  
    
   
//   }
// }
// const student = new Student("James", [50, 40, 45, 65, 20]);
// student.hasPassed();
// const student1 = new Student("Luka", [70, 50, 65, 45, 70]);
// student1.hasPassed();

// ---