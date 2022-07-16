/**
 * 三項演算子
 */
//条件 ? 条件がtrueの時の挙動 : 条件がfalseの時の挙動
//1が0より大きい時
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);

//1が0より小さい時
const val2 = 1 < 0 ? "true" : "false";
console.log(val2);

const num = 1300;
//toLocaleString()→数値の場合のみカンマ区切りに変換してくれる
console.log(num.toLocaleString());

//trueの場合サンプル
const num1 = 5000;
//typeof→変数の型が何なのかを判定してくれる
const formattedNum =
  typeof num1 === "number" ? num1.toLocaleString() : "数値ではありません";
console.log(formattedNum);

//falseの場合サンプル
const str1 = "5000";
//typeof→変数の型が何なのかを判定してくれる
const nonFormattedNum =
  typeof str1 === "number" ? str1.toLocaleString() : "数値ではありません";
console.log(nonFormattedNum);

//2つの引数の数値を足した結果が100を超えているかを確認する関数サンプル
const checkSum = (num3, num4) => {
  return num3 + num4 > 100 ? "100を超えています" : "100以内です";
};
console.log(checkSum(50, 100));
console.log(checkSum(50, 10));
