const flg1 = true;
const flg2 = false;
const rsltFlg1 = flg1 && flg2 ? "1and2 are true" : "どちらかはtrueでない";
console.log(rsltFlg1);

const rsltFlg2 =
  flg1 || flg2 ? "どちらかはtrue" : "どちらもtrue or どちらもfalse";
console.log(rsltFlg2);

// || は左側がfalseの場合、右側を返す
// nullはfalseに分類される
const num = null;
const fee = num || "金額未設定";
console.log(fee);

// これは左側がnullでない(false)でないので左側が返される
const num2 = 100;
const fee2 = num2 || "金額未設定";
console.log(fee2);

// 左がfalseなら左側を返す模様
const num3 = null;
const fee3 = num3 && "something set";
console.log(fee3);

// && は左側がtrueなら右側を返す
const num4 = 50;
const fee4 = num4 && "something set";
console.log(fee4);
