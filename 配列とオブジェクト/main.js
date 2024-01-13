
// 1. 3つ以上の値を用意して変数に代入してください。その1番目と3番目をコンソールで表示してください。
var animals = ["dog", "cat", "hamster", "bird"];
console.log(animals[0]);
console.log(animals[2]);


// 2. key、value、プロパティーについて説明してください。
// key:プロパティの項目名。
// value:キーに対する内容。
// プロパティ:keyとvalueをセットで管理するもの。

// 3. 3つほどプロパティを用意したオブジェクトを用意してコンソールで表示してください。
var mycat = {
  name: "小豆",
  kind: "ブリティッシュ・ショートヘア",
  age: "1",
}

console.log(mycat);


// 4. オブジェクトを3つ用意してそれを配列として代入してください。配列の0番目と3番目を表示させ、その中のkeyを指定してコンソールに表示させてください。

var cats = [
  {
    name: "小豆",
    kind: "ブリティッシュ・ショートヘア",
    age: "1",
  },
  {
    name:"せんべい",
    kind:"アメリカンカール",
    age:"2",
  },
  {
    name:"ところてん",
    kind:"マンチカン",
    age:"5",
  }
]
console.log(cats[0]);
console.log(cats[2]);
console.log(cats[0].name);
console.log(cats[2].kind);
