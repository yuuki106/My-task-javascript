
// 1. forを使ったループ処理を作ってください。
for (let i = 1; i <= 5; i++) {
  console.log(`${i}番目の処理を実行しました。`);
};

// 2. for inを使ったループ処理を作ってください。
var colors=["青","赤","黄","白","緑"];

for(index in colors){
  console.log(`${colors[index]}色の花`);
};

// 3. for ofを使ったループ処理を作ってください。
var games =[
  {
    title:"ファイナルファンタジー",
    genre:"RPG",
    company:"スクウェア・エニックス",
  },
  {
    title:"ドラゴンクエスト",
    genre:"RPG",
    company:"スクウェア・エニックス",
  },
  {
    title:"バイオハザード",
    genre:"ホラー",
    company:"カプコン",
  },
  {
    title:"ポケットモンスター",
    genre:"RPG",
    company:"任天堂",
  }
]
for(game of games){
  console.log(game);
};
