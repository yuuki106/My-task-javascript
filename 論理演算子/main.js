// var numA = 20;
// var numB = 40;

// if (numA == 20 && numB == 40) {
// console.log("ANDの条件と一致した処理");
// console.log(numA == 20 && numB == 40);
// } else {
// console.log("ANDの条件と一致しなかった処理");
// console.log(numA == 20 && numB == 40);
// };

// var numA = 20;
// var numB = 40;
// if (numA == 20 || numB == 40) {
// console.log("ANDの条件と一致した処理");
// console.log(numA == 20 || numB == 40);
// } else {
// console.log("ANDの条件と一致しなかった処理");
// console.log(numA == 20 || numB == 40);
// };


// var boolean = false;
// if (!boolean) {
// console.log("NOTの条件と一致した処理");
// console.log(boolean);
// } else {
// console.log("NOTの条件と一致しなかった処理");
// console.log(boolean);
// };


// 1. AND(&&)の条件を作成し、その処理に入るよう作ってください。(elseの処理も作成してください)
var mathScore = 80;
var englishScore = 80;
console.log(`数学の点数は${mathScore}点、英語の点数は${englishScore}点です。`);
if (mathScore >= 80 && englishScore >= 80) {
  console.log("よく出来ました!!");
} else if (mathScore >= 30 && englishScore >= 30) {
  console.log("まあまあです!!");
} else {
  console.log("追試です");
};
// ----------------------------------------------
// ----------------------------------------------

// 2. OR(||)の条件を作成し、その処理に入るよう作ってください。(elseの処理も作成してください)
var money = 150;
var point = 100;
var price = 250;
console.log(`所持金は${money}円、所持ポイントは${point}Pです。`);
console.log(`${price}円の商品を購入しようとしています。`);
if (money >= price || point >= price) {
  console.log("商品を購入できます。");
} else if (money + point >= price) {
  console.log(`ポイントを${(price - money)}P消費すれば商品を購入できます。`);
} else {
  console.log("商品を購入できません");
};
// ----------------------------------------------
// ----------------------------------------------

// 3. NOT(!)の条件を作成し、その処理に入るよう作ってください。比較条件は数値型の比較でお願いしま
// す。(elseの処理も作成してください)
var num = 100;
if (num !== 100) {
  if (num < 100 && num >= 50) {
    console.log("numは100未満ですが50以上です");
  } else if (num < 50 && num >= 10) {
    console.log("numは50未満ですが10以上です");
  } else if (num < 10) {
    console.log("numは10未満です");
  } else {
    console.log("numに100を超える数値が入力されています。0~100までの数値を入力して下さい。");
  };
} else {
  console.log("numは100です。");
};
