/******************************************
Project 2 - Option 2
FX05543
 ******************************************/

function calcAdd() {
  // Phép cộng
  var no1 = document.getElementById("num1");
  var no2 = document.getElementById("num2");
  var rs = document.getElementById("reSult");
  var add = parseFloat(no1.value) + parseFloat(no2.value);
  rs.value = add; // Trả về kết quả trong hộp
}

function calcSub() {
  // Phép trừ
  var no1 = document.getElementById("num1");
  var no2 = document.getElementById("num2");
  var rs = document.getElementById("reSult");
  var sub = parseFloat(no1.value) - parseFloat(no2.value);
  rs.value = sub; // Trả về kết quả trong hộp
}

function calcMul() {
  // Phép nhân
  var no1 = document.getElementById("num1");
  var no2 = document.getElementById("num2");
  var rs = document.getElementById("reSult");
  var mul = parseFloat(no1.value) * parseFloat(no2.value);
  rs.value = mul; // Trả về kết quả trong hộp
}

function calcDiv() {
  // Phép chia hết
  var no1 = document.getElementById("num1");
  var no2 = document.getElementById("num2");
  var rs = document.getElementById("reSult");
  var div = parseFloat(no1.value) / parseFloat(no2.value);
  rs.value = div; // Trả về kết quả trong hộp
}

function calcMod() {
  // Phép chia lấy dư
  var no1 = document.getElementById("num1");
  var no2 = document.getElementById("num2");
  var rs = document.getElementById("reSult");
  var mod = parseFloat(no1.value) % parseFloat(no2.value);
  rs.value = mod; // Trả về kết quả trong hộp
}

function calcExp() {
  // Phép luỹ thừa
  var no1 = document.getElementById("num1");
  var no2 = document.getElementById("num2");
  var rs = document.getElementById("reSult");
  var exp = Math.pow(parseFloat(no1.value), parseFloat(no2.value));
  rs.value = exp; // Trả về kết quả trong hộp
}
