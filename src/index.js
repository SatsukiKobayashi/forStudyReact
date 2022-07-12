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

//公式より
const foo = (x, y, z) => console.log(x, y, z);
var args = [0, 1, 2];
//applyは配列を使う関数を呼び出す際に引数に配列を渡すことができる関数
//第一引数=処理したいオブジェクト(this, windowなど)
//第二引数=渡したい配列
foo.apply(null, args);
foo(...args);

var [x, y, ...rest] = [1, 2, 3, 4];
console.log(x, y, rest);

//配列の代入
//スプレッド演算子を使用すると、配列の拡張バージョンを別の配列に簡単に代入できます
var list = [1, 2];
list = [...list, 3, 4]; //listの中身を一気に定義
console.log(list);

//間も使える
var list2 = [...list]; //listの中身と同じものを用意する
list2 = [0, ...list2, 5, 6]; //間をスプレッド演算子で埋める
console.log(list2);

const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };
console.log(point3D);

//最初に来るものは、後で来るものによって上書きされます
//(多分変数名かぶってるやつは後勝ってことだと思う)
const point4D = { ...point2D };
const anotherPoint3D = { x: 5, z: 4, ...point4D };
console.log(anotherPoint3D);
const yetAnotherPoint3D = { ...point4D, x: 5, z: 4 };
console.log(yetAnotherPoint3D);

const foo2 = { a: 1, b: 2, c: 0 };
const bar = { c: 1, d: 2 };
//foo2とbarの統合
const foobar = { ...foo2, ...bar };
console.log(foobar);
