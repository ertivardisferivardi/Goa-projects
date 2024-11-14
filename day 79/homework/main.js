// function findArea(a,b){
//     this.a = a;
//     this.b = b;
//     this.area = function(){
//         return this.a * this.b;
//     };
// }

// const rectangle = new findArea(5, 10);
// console.log( "The area of the rectangle is " + rectangle.area());

// function findAreaOfCircle(radius){
//     this.radius = radius;
//     this.area = function(){
//         return Math.PI * Math.pow(this.radius, 2);
//     };
// }

// const circle = new findAreaOfCircle(3);

// console.log( "The area of the circle is " + circle.area());

function findAreaOfTriangle(a,b,c){
    this.a = a;
    this.b = b;
    this.c = c;
    this.area = function(){
        let s = (this.a + this.b + this.c) / 2;
        return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
    }
}
const triangle = new findAreaOfTriangle(3,4,5);
console.log("The are of triangle is " + triangle.area())