// for(let num = 0; num < 16; num++){
//     if(num % 2 === 0){
//         console.log(num + " even")
//     }else{
//         console.log(num + " odd")
//     }
// }

// sum of two Array
// const array1 = [1, 0, 2, 3, 4];
// const array2 = [3, 5, 6, 7, 8, 13];
// let sum = [];
// for(let i = 0; i < array1.length;i++){
//     sum.push(array1[i] + array2[i])
// }
// sum.push(array2[array2.length - 1])
// console.log(sum);

// scores equal to or greater than 40
// const scores = [73, 35, 40, 68, 67, 91, 42, 48, 39, 55, 21, 95];
// for(let i = 0; i < scores.length; i++){
//     if(scores[i] >= 40){
//         console.log(scores[i]);
//     }
// }


// largest scores

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
// let highScore = Math.max(...scores);
// console.log(highScore);


// smallest scores

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
// let lowScore = Math.min(...scores);
// console.log(lowScore);

// Average total of scores

// const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
// const scores = [40, 40, 40];

// let total = 0;
// for(let j = 0;j < scores.length;j++){
//     total+= scores[j];
// };
// let average = total /scores.length;
// console.log(average);

// const scores = [];
// let total = 0;
// if(scores.length > 0){
// for(let j = 0;j < scores.length;j++){
//     total+= scores[j];
// let average = total /scores.length;
// }
// console.log(average);
// }else{
//     console.log("code is not working");
// };


const scores = [73, 35, 68, 67, 91, 42, 48, 55, 21, 95];
let total = 0;
let average = 0;
for(let j = 0;j < scores.length;j++){
    total+= scores[j];
 average = total /scores.length;
}

for(let j = 0; j < scores.length;j++){
    if (scores[j] < average + 10 && scores[j] > average - 10){
        console.log(scores[j]);

    }
}
;


