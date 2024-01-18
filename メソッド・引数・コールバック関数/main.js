
// 1.プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。
// プロパティはkeyとvalueが書かれたもの。メソッドはvalueが関数になっているもの。定数(or変数).key名()で呼び出すことができる。

const greet = {
  morning: function () {
    console.log("おはようございます。");
  },
  afternoon: function () {
    console.log("こんにちは。");
  },
  night: function () {
    console.log("こんばんは。");
  }
}
// greet.morning()
// greet.afternoon()
// greet.night()

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

// 2.下記の関数を実行してその結果をコンソールに表示してください。
// (スコープ内に書く方法はだめです。)

function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
};
console.log(fruit("りんご", 200));

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------


// 3.下記の関数を経由して2つの関数を実行するような処理を作ってください。

function addTax(price, func) {
  // priceは値段
  // funcは実行する関数名
  // 税込み価格を計算して四捨五入して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);
  const name = func();
  console.log(`${name}の税込価格は${taxPrice}円です。`)
  return
}

function taxInTomato(){
  return "トマト"
}

function taxInOnion(){
  return "玉ねぎ"
}


// トマトの税込み価格をコンソールに表示させる処理
addTax(100,taxInTomato);

// 玉ねぎの税込み価格をコンソールに表示させる処理
addTax(200,taxInOnion);
