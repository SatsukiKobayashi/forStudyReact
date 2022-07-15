/**
 * map filter(配列の処理)
 */
const nameArr = ["にゃんこ", "おねこ", "ねこ"];
for (let i = 0; i < nameArr.length; i++) {
  console.log(nameArr[i]);
}

//map(第一引数:配列の中身, 第二引数:index)
//mapはアロー関数を使って受け取った値をなんらかの処理して新しい配列を生成する
const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

//名前のみ出力
nameArr.map((name) => console.log(name));
//indexも出力
nameArr.map((name, index) => console.log(`${index + 1}番目は、${name}です。`));

//自分で
const nekoArr = ["さび", "みけ", "ちゃとら"];
const nekoArr2 = nekoArr.map((nekoName) => {
  return nekoName;
});
console.log(nekoArr2);

nekoArr.map((nekoName) => console.log(nekoName));

//filter
//アロー関数を使用して、ブラケットの中で条件式書いて、配列の中から一致する中身だけ取り出せる
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  //奇数の数字だけ取り出す
  return num % 2 === 1;
});
console.log(newNumArr);

//実践
const nekoArr3 = ["しろ", "くろ", "きじ"];
const nekoArr4 = nekoArr3.filter((nekoNameArr) => {
  //特定の文字列を含むもののみ抽出
  return nekoNameArr.match(/ろ/);
});
console.log(nekoArr4);
