

// 1. 変数の中にtrueまたは、falseが代入された時の処理を作ってください。
var boolean = false;
var booleanResult = boolean ? "処理が実行されました。":"処理がキャンセルされました。"
console.log(booleanResult);

// 2. 代入された変数の中が5より大きい時にtrueの処理と、5より小さい時にfalseの処理を作ってください。
var num1 = 5;
var checkNum1 = num1 > 5 ? "num1は5より大きいです": "num1は5以下です";
console.log(checkNum1);

// 3. 代入された変数の中が5より小さい時にtrueの処理と、5より小さい時にfalseの処理を作ってくださ
// い。
var num2 = 5;
var checkNum2 = num2 < 5 ? "num2は5より小さいです": "num2は5以上です";
console.log(checkNum2);

// 4. 代入された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理を作ってください。
var num3 = 10;
var checkNum3 = num3 >= 10 ? "num3は10以上です。": "num3は10より小さいです。";
console.log(checkNum3);

// 5. 代入された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理にしてください。
var value = null;
var checkValue = (value) ? "値が存在します。": "値が存在しません。";
console.log(checkValue);
