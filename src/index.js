/**
 * スプレッド構文 ...
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(`num1 + num2 => ${num1 + num2}`);
//don't use spread
sumFunc(arr1[0], arr1[1]);
//use spread
//勝手に配列展開して順番に処理してくれる
sumFunc(...arr1);

const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...anyarr] = arr2;
// console.log(`num1, num2, ...anyarr=> ${num1}, ${num2}, ${anyarr}`);
console.log("num1=> " + num1);
console.log("num2=> " + num2);
console.log("anyarr=> " + anyarr);
// console.log(anyarr);

//配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

//arr4と同じ中身の配列を新しく生成したい
const arr6 = [...arr4];
arr6[0] = 100; //arr6の書き換え
console.log(`arr6=> ${arr6}`);
console.log(`arr4が書き換わっていないことの確認 arr4=> ${arr4}`);

//配列の中身の結合もできる
const arr7 = [...arr4, ...arr5];
console.log(`arr7=> ${arr7}`);

//イコールでもできるよね？
const arr8 = arr4;
console.log(`arr8=> ${arr8}`);
arr8[0] = 100; //狙い通りarr8の最初のオブジェクトの中身が書き換わる
console.log(`arr4=> ${arr4}`); //参照元が同じなので、arr4の中身も書き換わってしまう
