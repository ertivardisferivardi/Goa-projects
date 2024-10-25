// function booleanToString(b){
//     if(b === true){
//       return "true"
//     }else{
//       return "false"
//     }
//   }
  
// function digitize(n) {
//     const numstr = String(n)
//     let reversedNum = [];
//     for(let i = numstr.length - 1;i >= 0;i--){
//       reversedNum.push(Number(numstr[i]));
//     }
//     return reversedNum;
//   }


// function getGrade (s1, s2, s3) {
//     let res = (s1 + s2 + s3)/3;
//     if(res >=90 && res <=100){
//       return 'A';
//     }else if(res >= 80 && res < 90){
//       return 'B';
//     }else if(res >= 70 && res < 80){
//       return 'C';
//     }else if(res >= 60 && res < 70){
//       return 'D';
//     }else{
//       return 'F'
//     }
//   }

// const areaOrPerimeter = function(l , w) {
//     if (l===w){
//       return l*w;
//     }
//     else{
//       return 2*(l+w);
//     }
    
//   }


// function DNAStrand(dna) {
//     let adjusteddna = "";
//     for (let i = 0;i<dna.length;i++) {
//         if (dna[i] === "A") {
//           adjusteddna += "T"; 
//         } else if (dna[i] === "T") {
//           adjusteddna += "A";
//         } else if (dna[i] === "G") {
//           adjusteddna += "C"; 
//         } else if (dna[i] === "C") {
//           adjusteddna += "G"; 
//         }else{
//           adjusteddna += dna[i];
//         }
//       } 
//       return adjusteddna;
//     }



// function reverseWords(str) {
//     const splstr = str.split(" ");
//     let result = ""
//     for(let i of splstr){
//       for(let char = i.length - 1;char >= 0;char--){
//         result += i[char];
//       }
//         result += " ";
//     }
      
       
//      result = result.slice(0,-1);
//   return result;
//   }

// function squareDigits(num){
//     const digits = String(num).split('');
//     let result = ''
//     for(let i = 0;i <digits.length;i++){
//       result += Number(digits[i] ** 2);
//     }
      
//    return Number(result)    
//   }