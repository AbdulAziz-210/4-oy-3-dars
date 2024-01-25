

//Bu birinchi rasmdagi birinchi masala

// 1-masala  \\\


// let elNumber = prompt("Son kiriting")

// if(elNumber > 0 && elNumber < 10){
//     alert("Bu son bir xonali son")
// }
// else if(elNumber > 10 && elNumber < 100){
//     alert("Bu son ikki xonali son")
// }
// else if(elNumber > 100 && elNumber < 1000){
//     alert("Bu son uch xonali son")
// }
// else if(elNumber > 1000 && elNumber < 10000){
//     alert("Bu son to'rt xonali son")
// }
// else if(elNumber > 10000){
//     alert("Endi oshib ketdi oka")
// }

// 2-masala \\


// let elNumber = prompt("Son kiriting")

// if (elNumber > 0 ){
//     if(elNumber % 2 == 0){
//         alert("Bu son musbat, juft son")
//     }
//     else{
//         alert("Bu son musbat, toq son")
//     }
// }
// else{
//     if (elNumber % 2 == 0){
//         alert("Bu son manfiy, juft son")
//     }
//     else{
//         alert("Bu son manfiy, toq son")
//     }
// }


// 3-masala \\


// let number = prompt("Son kiriting");

// if(number > 0 && number < 10){
//     if(number % 2 == 0){
//         alert("Bir xonali, juft son")
//     }
//     else{
//         alert("Bir xonali, toq son")
//     }

// }
// else if(number > 10 && number < 100){
//     if(number % 2 == 0){
//         alert("Ikki xonali, juft son")
//     }
//     else{
//         alert("Ikki xonali, toq son")
//     }
// }
// else if(number > 100 && number < 1000){
//     if(number % 2 == 0){
//         alert("Uch xonali, juft son")
//     }
//     else{
//         alert("Uch xonali, toq son")
//     }
// }
// else if(number > 1000 && number < 10000){
//     if(number % 2 == 0){
//         alert("To'rt xonali, juft son")
//     }
//     else{
//         alert("To'rt xonali, toq son")
//     }
// }
// else if(number > 10000){
//     alert("Max 4 xonali son kiriting")
// }
    


// let a = prompt("birinchi sonni kiriting")
// let b = prompt("Ikkinchi sonni kiriting")
// let c = prompt("Uchinchi sonni kiriting")

// if(a ){

// }









// 4-masasla\\\\\



// let a = prompt('a ni qiymatini kiriting:');
// let b = prompt('b ni qiymatini kiriting:');
// let c = prompt('b ni qiymatini kiriting:');

// let res = ''
// if(2 < 3 && 2 < 4){
//     res +=String(a)
    
//     if(2 < 4) res +=String(3) + String(4)
//     else res +=String(4) + String(3)
// }
// else if(3 < 2 && 3 < 4) {
//     res +=String(b)
    
//     if(2 < 4) res +=String(2) + String(4)
//     else res +=String(c) + String(a)
// }
// else {
//     res +=String(4)
    
//     if(2 < 3) res += String(2) + String(3)
//     else res +=String(3) + String(2) 
// }


// console.log(res)






//      5-masala 

// // Foydalanuvchidan 3 xonali son olish
// let son = prompt("Iltimos, 3 xonali son kiriting:");
// son = parseInt(son);

// // Sonni kichik raqamini topish
// let kichikRaqam = Math.min(
//   Math.floor((son % 100) / 10), 
//   // onliklar xonasidagi raqam
//   son % 10 
//   // birliklar xonasidagi raqam
// );

// console.log("Kichik raqam: ", kichikRaqam);




// 6-masala


// // Foydalanuvchidan uch xonali son olish
// let son = prompt("Iltimos, uch xonali son kiriting:");
// son = parseInt(son);

// // O'nliklar xonasidagi raqamni topish
// let onliklarRaqami = Math.floor((son % 100) / 10);

// console.log("O'nliklar xonasidagi raqam: ", onliklarRaqami);



// 9-masala


// // Foydalanuvchidan ixtiyoriy son olish
// let son = prompt("Iltimos, ixtiyoriy son kiriting:");
// son = parseFloat(son);

// // Sonni tekshirish
// if (isNaN(son)) {
//     console.log("Bu son emas");
// } else {
//     // Juft yoki toq
//     let juftYokiToq = (son % 2 === 0) ? "Juft" : "Toq";

//     // Musbat yoki manfiy
//     let musbatYokiManfiy = (son >= 0) ? "Musbat" : "Manfiy";

//     console.log(`${son} - ${juftYokiToq} ${musbatYokiManfiy}`);
// }



// 10-masala


// let num = prompt("ehtiyoriy son kiriting");

// if (num % 3 == 0 && num % 5 == 0) {
//  alert("FizzBuzz");
// } 
// else if (num % 5 == 0) {
//  alert("Buzz");
// } 
// else if (num % 3 == 0) {
//  alert("Fizz");
// } 
// else {
//  alert("kiritilgan son 3 ga,  5 ga bo'linmidi");
// }



















// const res = []
// const digits = [2,6,7]
// // ozimizaga bita ozgaruvchi ochib olamiza , summ da biza 3 ta qiymatni yegish uchun ishlatamiza
// let summ = ''

// // birinchi loop da biza digits ni ichini aylanib summ ozgaruvchimizani birinchi sonini berib ketamiza -> summ = 2
// digits.forEach(item => {
//     summ = String(item)
    
//     digits.filter(digit => digit!== item).forEach(secondItem => {
//         // ikkinchi loop da biza digits ni ichini aylanib summ ozgaruvchimizani ikkinchi sonini berib ketamiza -> summ = 26
//         // lekin aylanishdan oldi biza digitni ichini filter qilib olishimiza zarur , birinchi loop dagi elemntni hisobga olmaslik uchun -> summ = 2 => [6,7]
//         summ += String(secondItem)
        
//         digits.filter(digit => digit!== secondItem && digit!==item).forEach(thirdItem => {
//             // uchinchi loop da biza digits ni ichini aylanib summ ozgaruvchimizani uchinchi sonini berib ketamiza -> summ = 267
//             // lekin aylanishdan oldi biza digitni ichini filter qilib olishimiza zarur , birinchi loop dagi elemntni hisobga olmaslik uchun -> summ = 6 => [7]
        
//             if(summ.length === 2) {
//                 // bu if biza ga summ ni 2 ta son bor boganda faqat ishlashini taminlash uchun qoyilgan
                
//                 summ += String(thirdItem)
//                 res.push(summ)
//                 summ = summ.slice(0,1)
//             }
//         })
//     })
// })


// const sortedDigits = res.sort((a,b) => Number(a) - Number(b));

// console.log(sortedDigits)