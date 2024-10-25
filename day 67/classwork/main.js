// function Person(firstName, lastName,car,height,weight){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.car = car;
//     this.height = height;
//     this.weight = weight;
// }
// const Person1 = new Person("Luka","Murgvashvili","BMW",1.84,85);

// console.log(Person1);

// const Person2 = new Person("Nika","Baidauri","bike",1.60,60);
// console.log(Person2);

// const Person3 = new Person("Sofia","Murashvili","Mercedes",1.78,75);

// console.log(Person3);

// const Person4 = new Person("Elene","Iashvili","Mercedes",1.74,71);

// console.log(Person4);

// const Person5 = new Person("Nino","Iashvili","Mercedes",1.59,61);

// console.log(Person5);

// Basic Constructor
// Create a constructor function Person that takes two parameters: name and age.
// Add a method introduce() that logs:
// "Hi, I am <name> and I am <age> years old."

//    Example Input:
   
//    const person1 = new Person('Alice', 25);
//    person1.introduce();
//    // Output: Hi, I am Alice and I am 25 years old.
   


// ---

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.introduce = function (){
//         console.log("hello i am " + name +  " and I am " + age + "years old")
//     }
        
// }

// const person1 = new Person('Alice', 25);

// person1.introduce();

// Constructor with Default Values
// Create a constructor function Car with parameters brand and year.
// If the year isn't provided, set a default value of 2020.
// Add a method describe() to print:
// "This is a <brand> from <year>."
// function Car(brand,year){
//     this.brand = brand;
//     this.year =year;
//     this.describe = function(){
//         console.log("This is a " + brand + " from " + year)
//     }
// }
// const cars = new Car("BMW",2007);
// cars.describe();

// function Library(name,books){
//     this.name = name;
//     this.books = books;
//     this.BookList = function(){
//         console.log(name + "'s book from " + books )    
//     }
    
// }
// const Library1 = new Library("City Library",["1998","Time traveler"]);
// Library1.BookList();

// function Rectangle(width,height){
//     this.width = width;
//     this.height = height;
//     this.calculateArea = function(){
//         console.log("Width = " + width + " Height = " + height + " Rectangles area is " + width * height)
//     }
// }

// const rectangle1 = new Rectangle(10,5);
// rectangle1.calculateArea();

// function Student(name,marks){
//     this.name = name;
//     this.marks = marks;
//     this.calculateAverage = function(){
//         let sum = 0;
//         for(let i = 0; i < marks.length; i++){
//             sum += marks[i];
//         }
//         console.log(name + "'s average of marks is " + sum / marks.length)
//         if(sum < 50){
//             console.log(sum / marks.length + " failed")
//         }
//         else{
//             console.log(sum / marks.length + " passed")
//         }
//     }
// }

// const student1 = new Student("John", [90,85,78,95]);
// const student2 = new Student("Bob", [30,45,38,45]);

// student1.calculateAverage();
// student2.calculateAverage();

// function Counter() {
//     this.value = 0;
  
  
//   this.increment = function() {
//     this.value += 1;
//   };
  
//   this.getValue = function() {
//     return this.value;
//   };
//   }
//   const counter = new Counter();
//   counter.increment();
//   counter.increment();
  
  

  
//   console.log(counter.getValue()); 

// function Phone(brand,price,model){
//     this.brand = brand;
//     this.price = price;
//     this.model = model;
//     this.info = function(){
//         console.log(`This is a ${this.brand} phone, model is ${this.model}, priceis ${this.price}$$$`)
//     }
// }

// const iPhone = new Phone("Apple", 1000, "iPhone 12");
// iPhone.info();
  
