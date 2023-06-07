//let age = prompt("おいくつですか");
//console.log(age);
//console.log(parseInt(age));

//let age = prompt("おいくつですか");
//age = parseInt(age);利用して文字列を数字に変換
//if (isNaN(age)) {
//  console.log("数字じゃない");
//} else if (age >= 30) {
//  console.log("30より大きい");
//} else {
//console.log("30よりちっちゃい");
//}

//let classh1_title = document.querySelector(".classh1_title");　CSSレセクタを使用して
//classh1_title.innerText("AAAAA");

const classA = document.querySelector(".classA");

// 2. constとfunctoinが何が違うの

function handleClick() {
  console.log("クリックされました！！");
}

// classA.addEventListener("click", handleClick);

function testClick(type, handleClick) {
  console.log(`Type : ${type}が実行されました。`);
  handleClick();
}

testClick("click", handleClick);

// 定義
// classA
// handleClick
// testClick

// 実行結果
// Type : "click"が実行されました。
// クリックされました！！

// 実行中
// testClick("click", handleClick);

function showMessage() {
  alert("Hello world");
}
