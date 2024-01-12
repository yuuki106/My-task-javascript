// var boolean = false;
// if(boolean){
// console.log("trueの処理");
// console.log(boolean);
// } else {
// console.log("falseの処理");
// console.log(boolean);
// };





// ----------------------------------------------
// 問題：elseを使用する時の注意点
// 回答：if文がある時だけ使用可能。elseのみを独立して使うことは出来ない。なお、ifとelseの間に処理を書いてはいけない

// ----------------------------------------------
// 問題：JavaScriptで実装した時の確認ポイント
// 回答：JavaScriptを実装した時は動くかどうかの確認は勿論、コンソールにエラーが表示されていないかも確認が必要。

// . 数値型を比較してelseの処理に入る処理を作ってください。
var score = 10;
if (score ===100){
  console.log("Great!!")
}else{
  console.log("Bad!!")
}
// . 文字列型を比較してelseの処理に入る処理を作ってください。
var text = "赤"
if (text === "青"){
  console.log("進め")
}else{
  console.log("止まれ")
}