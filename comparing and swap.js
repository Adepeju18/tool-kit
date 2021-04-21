let swap1;
let swap2;
const scores = [73, 35, 68, 67, 20, 91, 42, 48, 55, 21, 95];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] < scores[i + 1]) {
        swap1 = scores[i];
        swap2 = scores[i + 1];
        scores[i + 1] = swap2;
        scores[i] = swap2;

    }
}
console.log(scores);

// smallest element at index 0 and largest element in last index
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > scores[i + 1]) {
//         newScores = scores[i];
//         scores[i] = scores[i + 1];
//         scores[i + 1] = newScores;
//         i = -1;

//     }
// }
// console.log(scores);

// largest element at index 0 and smallest element in last index
// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] < scores[i + 1]) {
//         newScores = scores[i];
//         scores[i] = scores[i + 1];
//         scores[i + 1]=newScores;
//         i = -1;
        
//     }
// }
// console.log(scores);
    


