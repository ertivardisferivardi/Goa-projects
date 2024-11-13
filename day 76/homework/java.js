// function sumArray(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//     }
//     return sum;
//   }
  
//   function getbynames(objectarr){
//     let nammes =[];
//     for (let i = 0; i < objectarr.length; i++)
//         nammes.push(objectarr[i].name);
//     this.objectarr = objectarr;
//     this.nammes = nammes;
//     return nammes;
    
  
//   }
//   let obj1 = {name: "John", age: 30};
//   let obj2 = {name: "Sarah", age: 28};
//   let obj3 = {name: "Peter", age: 35};
//   let nammes = [obj1, obj2, obj3];
//   const newar = new getbynames(nammes);
//   console.log(nammes);

  
// const person = {
//     firstName: 'Levani',
//     lastName: 'Murgvashvili',
//     age: 17,
  
//     getFullName() {
//       return `${this.firstName} ${this.lastName}`;
//     },
  
//     celebrateBirthday() {
//       this.age += 1;
//       return `Happy Birthday! You are now ${this.age} years old.`;
//     },
  
//     introduce() {
//       return `Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`;
//     }
//   };
  
//   console.log(person.getFullName()); 
//   console.log(person.celebrateBirthday());
//   console.log(person.introduce()); 
  
  
// შევქმნათ ფუნქცია რომელსაც გადაეცემა დიდი ტექსტი ან წინადადება (სტრინგი)
//  და უნდა დააბრუნოს ყველაზე დიდი და ყველაზე პატარა ნაპოვნი სიტყვა (მასივის ფორმატში) ( [ ყველაზე პატარა, ყველაზე დიდი ] )

// function findBiggestAndSmallestWords(text) {
//   const words = text.split(' ');
//   let smallestWord = words[0];
//   let biggestWord = words[0];
//   for (let i = 1; i < words.length; i++) {
//     if (words[i].length < smallestWord.length) {
//       smallestWord = words[i];
//     }
//     if (words[i].length > biggestWord.length) {
//       biggestWord = words[i];
//     }
//   }
//   return [smallestWord, biggestWord];
// }  