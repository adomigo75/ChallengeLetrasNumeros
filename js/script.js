// Variables Globales
const btna1 = document.getElementById("A1");
const btnb2 = document.getElementById("B2");
const btnc3 = document.getElementById("C3");
const btnd4 = document.getElementById("D4");
const btne5 = document.getElementById("E5");
const btnf6 = document.getElementById("F6");
const btng7 = document.getElementById("G7");
const btnh8 = document.getElementById("H8");
const btni9 = document.getElementById("I9");
const btnj0 = document.getElementById("J0");
const btncl = document.getElementById("CL");
const btncn = document.getElementById("CN");

//Toma de los h3 a escribir en el HTML
const letrashtml = document.getElementById("RL");
const numeroshtml = document.getElementById("RN");

let letras = "";
let numbers = "";

//Funcion para la letras
function letraa1() {
  if (letras === "") {
    letrashtml.innerHTML = "A";
    letras = "A";
  } else if (letras === "ABCDEFGHIJ" && numbers === "") {
    numeroshtml.innerHTML = "1";
    numbers = "1";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letrab2() {
  if (letras === "A") {
    letrashtml.innerHTML = "AB";
    letras = letras + "B";
  } else if (letras === "ABCDEFGHIJ" && numbers === "1") {
    numeroshtml.innerHTML = "12";
    numbers = numbers + "2";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letrac3() {
  if (letras === "AB") {
    letrashtml.innerHTML = "ABC";
    letras = letras + "C";
  } else if (letras === "ABCDEFGHIJ" && numbers === "12") {
    numeroshtml.innerHTML = "123";
    numbers = numbers + "3";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letrad4() {
  if (letras === "ABC") {
    letrashtml.innerHTML = "ABCD";
    letras = letras + "D";
  } else if (letras === "ABCDEFGHIJ" && numbers === "123") {
    numeroshtml.innerHTML = "1234";
    numbers = numbers + "4";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letrae5() {
  if (letras === "ABCD") {
    letrashtml.innerHTML = "ABCDE";
    letras = letras + "E";
  } else if (letras === "ABCDEFGHIJ" && numbers === "1234") {
    numeroshtml.innerHTML = "12345";
    numbers = numbers + "5";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letraf6() {
  if (letras === "ABCDE") {
    letrashtml.innerHTML = "ABCDEF";
    letras = letras + "F";
  } else if (letras === "ABCDEFGHIJ" && numbers === "12345") {
    numeroshtml.innerHTML = "123456";
    numbers = numbers + "6";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letrag7() {
  if (letras === "ABCDEF") {
    letrashtml.innerHTML = "ABCDEFG";
    letras = letras + "G";
  } else if (letras === "ABCDEFGHIJ" && numbers === "123456") {
    numeroshtml.innerHTML = "1234567";
    numbers = numbers + "7";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letrah8() {
  if (letras === "ABCDEFG") {
    letrashtml.innerHTML = "ABCDEFGH";
    letras = letras + "H";
  } else if (letras === "ABCDEFGHIJ" && numbers === "1234567") {
    numeroshtml.innerHTML = "12345678";
    numbers = numbers + "8";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letrai9() {
  if (letras === "ABCDEFGH") {
    letrashtml.innerHTML = "ABCDEFGHI";
    letras = letras + "I";
  } else if (letras === "ABCDEFGHIJ" && numbers === "12345678") {
    numeroshtml.innerHTML = "123456789";
    numbers = numbers + "9";
  } else {
    alert("Siga el orden de las letras");
  }
}

function letraj0() {
  if (letras === "ABCDEFGHI") {
    letrashtml.innerHTML = "ABCDEFGHIJ";
    letras = letras + "J";
    numbers = "";
  } else if (letras === "ABCDEFGHIJ" && numbers === "123456789") {
    numeroshtml.innerHTML = "1234567890";
    numbers = numbers + "0";
  } else {
    alert("Siga el orden de las letra");
  }
}
function letracl() {
  if (letras != "") letras = "";
  letrashtml.innerHTML = "";
}
function letracn() {
  if (numbers != "") numbers = "";
  numeroshtml.innerHTML = "";
}

//evento click
//A1.oneclick = letraa1();
A1.onclick = function () {
  letraa1();
};
B2.onclick = function () {
  letrab2();
};
C3.onclick = function () {
  letrac3();
};
D4.onclick = function () {
  letrad4();
};
E5.onclick = function () {
  letrae5();
};
F6.onclick = function () {
  letraf6();
};
G7.onclick = function () {
  letrag7();
};
H8.onclick = function () {
  letrah8();
};
I9.onclick = function () {
  letrai9();
};
J0.onclick = function () {
  letraj0();
};
CN.onclick = function () {
  letracn();
};
CL.onclick = function () {
  letracl();
};
