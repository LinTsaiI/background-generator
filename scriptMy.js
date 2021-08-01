// 1. Write code so that the colour inputs match the background generated on the first page load. 

// 2. Display the initial CSS linear gradient property on page load.

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.

var css = document.querySelector(".css");      //<h3 class="css"> 作為顯示出color picker的CSS style的區塊
var color1 = document.querySelector(".color1");      //<input class="color1">
var color2 = document.querySelector(".color2");      //<input class="color2">
var body = document.getElementById("gradient");      // background-color is in <body>
var left = document.querySelector(".left");      //<h3 class="left">
var right = document.querySelector(".right");      //<h3 class="right">
var btn = document.getElementById("btn");


//此處<input type="color"> 使用"input" Event
//.style.background =""，寫法為CSS的描述語句要放在引號""中，因color1.value & color2.value 為變數，因此不放在引號中，並用＋連接。
function setGradient() {
  //改動background-color
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  //在<h3 class="css">處顯示此時的css代碼
  css.textContent = body.style.background + ";";
  //在<h3 class="left">處顯示色碼
  left.textContent = "Color1(left): " + color1.value;
  //在<h3 class="right">處顯示色碼
  right.textContent = "Color2(left): " + color2.value;
}

//創造隨機的＃(十六進位)色碼
/*
Math.random() 可隨機給出0~1之間的符點數(<1)
number.toString(16) 表示將數字轉為16進位的string
.slice(beginIndex, endIndex) 依據給定的起始字串index，將字串濃縮回傳一個新的字串
*/
function random() {
  var n = (Math.random() * 0xffffff * 1000000).toString(16);      //Each hexadecimal digit stands for four bits, and an F means four 1-bits. Therefore 0xFFFF is 0b1111111111111111 in binary. 0xFFFFFF is the hexadecimal way of writing 16777215. '0x' 加在數字前表示十六進位數值的方式
  return "#" + n.slice(0, 6);      //表示取字串的0~6位數
}

/*另一種表示法：
'#' + (Math.random() * 0xFFFFFF << 0).toString(16);
<< 0 為Math.floor()的表示法，代表function returns the largest integer less than or equal to a given number.
*/

function randomColor() {
  var randomColor1 = random();
  var randomColor2 = random();
  //改動background-color
  body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
  css.textContent = body.style.background + ";";
  left.textContent = "Color1(left): " + randomColor1;
  color1.value = randomColor1;
  right.textContent = "Color2(left): " + randomColor2;
  color2.value = randomColor2;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomColor);



