// 1) შექმენით ფუნქცია სახელად filter, რომელსაც ექნება ერთი პარამეტრი სახელად numberArr,
//  ამ პარამეტრს უნდა გადაეცემოდეს მასივი (იგივე სია), თვქენი დავალებაა გაფილტროთ მიღებული სია, 
//  ფუნქციაში შექმენით ერთი მასივი სახელად evenNUmbers გადაურეთ პარამეტრში ჩასმუილ მასივს for ციკლით და ყველა ლუწი რიცხვი დაამატეთ
//   evenNumbers მასივში, საბოლოოდ კი დააბრუნეთ მასივი როდესაც მორჩება for ციკლის მუშაობა (evenNumbers მასივი სადაც იქნება მოცემული
//      მხოლოდ ლუწი რიცხვები)

function evenNumbers(numberArr){
    let evenNumbers = [];
    for(let i = 0;i<numberArr.length;i++){
        if (numberArr[i] % 2 === 0){
            evenNumbers.push(numberArr[i])
        }
    }
    return evenNumbers;
}
const numberss = [1,2,3,4,5,6,7,8,9,10];
const filltered = evenNumbers(numberss);

alert("Even numbers only " + filltered);