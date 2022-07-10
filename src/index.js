/**
 * var変数（上書き、再宣言可能）
 */
var var1 = "var1";
console.log(var1);

//var変数は上書き可能
var1 = "上書き";
console.log(var1);

//var変数は再宣言可能
var var1 = "再宣言";
console.log(var1);

/**********************
 * let変数(上書き可能、再宣言不可)
 *********************/
let val2 = "let";
console.log(val2);

//letは上書き可能
val2 = "let上書き";
console.log(val2);

//letは再宣言不可
//↓はコンパイルエラー
//let val2 = "あかん";

/*****************
 * const（上書き不可、再宣言不可）
 ****************/
const val3 = "const";
console.log(val3);

//上書きはコンパイルエラー
//val3 = "const上書き";

//再宣言コンパイルエラー
//const val3 = "再宣言";

/**
 * constの場合でもオブジェクトの場合は上書きできる
 */
const constObj = {
  name: "ねこ",
  age: 28
};
constObj.name = "ねこすき";
console.log("*****constObj.name*****", constObj);

//オブジェクトの追加も可能
constObj.address = "nyanko";
console.log("*****constObj.name*****", constObj);

const animalObj = ["cat", "dog"];
animalObj[1] = "bird";
console.log("*****animalObj[1]*****", animalObj);

animalObj.push("monkey");
console.log("*****animalObj*****", animalObj);
