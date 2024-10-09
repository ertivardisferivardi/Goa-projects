// 1) შექმენით ობიექტი სადაც ჩაწერთ თვქენი საყვარელი პერსონაჟის მონაცემებს, დაამატეთ მინიმუმ 5 კუთვნილება თავიდანვე, 
// შემდეგ დაბეჭდეთ ხუთივე კუთვნილება ცალ-ცალკე, შემდეგ შეცვალეთ რომელიმე ორი კუთვნილება და დაბეჭდეთ თავიდან ბოლომდე ობიექტი,
//  საბოლოოდ დაამატეთ ერთი კუთვნილება და წაშალეთ რომელიმე ძველი კუთვნილება, კომენტარებით აუცილებლად
//   ახზსენით თუ რას ნიშნავს ობიექტი,
//  რაში გამოიყენება, რატომ არის მაგარი, რა არის კუთვნილება და რას ნიშნევას წერტილის ნოტაცია


const car = {
    brand: "BMW",
    series:"M5",
    model: "E34",
    engine:"v8",
    year:2010,
}
car.gearbox = "manual"         
car.color = "black"         
car.hp = 400

car.model = "E60"
car.engine = "V12"

delete car.year

console.log(car.brand)
console.log(car.series)
console.log(car.model)
console.log(car.engine)
console.log(car.year)

console.log(car)
