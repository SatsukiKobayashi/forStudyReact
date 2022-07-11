/**
 * arrow fanction
 */

//before
function funcBefore(anyStr) {
  return anyStr;
}
//関数を呼び出して返却結果をコンソールに表示
console.log(funcBefore("funcBefore"));

const funcInVariable = function (aStr) {
  return aStr;
};
console.log(funcInVariable("funcInVariable"));

//use arrow fanction
//引数のカッコはなくてもいい（ただ保存すると自動整形ツールで勝手に補完される）
const funcUsingArrow = (arrwStr) => {
  return arrwStr;
};
console.log(funcUsingArrow("funcUsingArrow"));

//Arrow function 省略形
//returnを書かなくてもいい
const funcOmittedArrow = (omitStr) => omitStr;
console.log(`****funcOmittedArrow****${funcOmittedArrow("funcOmittedArrow")}`);

//数値のたし算（省略なし）
const funcCalclate = (num1, num2) => {
  return num1 + num2;
};
console.log(`*******funcCalclate******=> ${funcCalclate(2, 2)}`);

//数値のたし算（省略あり）
const omittedFuncCalc = (num1, num2) => num1 + num2;
console.log(`omittedFuncCalc=> ${omittedFuncCalc(22, 22)}`);
