/**
 * 分割代入
 */
const myProfile = {
  name: "neko",
  age: "28"
};

//普通に書くと。。
const messageProfile = `I'm ${myProfile.name}. Age is ${myProfile.age}`;
console.log(`messageProfile=> ${messageProfile}`);

//毎回myprofile書くのはめんどくさいので分割代入使用
//先に定義したmyProfileの内容を使用
const { name, age } = myProfile;
const useDestrctMsg = `I'm ${name}. ${age} years old.`;
console.log(`useDestrctMsg=> ${useDestrctMsg}`);

//配列の場合
//従来の書き方
const hairetsu = ["neko", 7];
const noUseMsg = `分割代入なし配列　=>I'm ${hairetsu[0]}. ${hairetsu[1]} years old.`;
console.log(noUseMsg);

//順番が大事になる
const [name2, age2] = hairetsu;
const message2 = `分割代入配列使用　=> I'm ${name2}. ${age2} years old.`;
console.log(message2);

//公式より
var rect = { x: 0, y: 10, width: 15, height: 20 };
console.log(
  `rect x, y, width, height=>${rect.x},${rect.y},${rect.width},${rect.height}`
);

//分割代入
var { x, y, width, height } = rect;
console.log(`分割代入 x, y, width, height=>${x},${y},${width},${height}`);

//rectの中身上書き
rect.x = 10;
//これはすでに37行目で同じ変数を定義しているのでダメ
//{ x, y, width, height } = rect;
//これは分割代入時の37行目の変数に再代入している（再度分割代入している）
//再度分割代入し直さないと、分割代入時の変数には反映されない模様
//()は既存の変数に再代入する用みたい
({ x, y, width, height } = rect);
console.log(`分割代入後の x, y, width, height=>${x},${y},${width},${height}`);
console.log(
  `rect x, y, width, height=>${rect.x},${rect.y},${rect.width},${rect.height}`
);

//structの作成
const obj = { "some property": "some value" };

//展開した変数を、新しい変数名に割り当てる
const { "some property": someProperty } = obj;
//新しく割り当てたsomePropertyの中身が最初に定義した"some value"と一致しているか確認
console.log(someProperty === "some value");

//分割を使用して構造体の深いデータを取得
var foo = { bar: { bas: 123 } };
const {
  bar: { bas }
} = foo;
console.log(`bas=>${bas}`);

//分割でスプレッド演算子を使う
var { w, x, ...rest } = { w: 1, x: 2, y: 3, z: 4 };
console.log(w, x, rest);

// //特定のプロパティを無視
// function goto(point2D: { x: number, y: number }) {
//   //余計なものが含まれたオブジェクトが渡されたら
//   //正しく動作しない想定
// }
// const point3D = { x: 1, y: 2, z: 3 };
// const { z, ...point2D } = point3D;
// goto(point2D);

//配列の分割
// 3つ目の変数を使用せずに2つの変数を交換する方法は？
var x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y);
