//CODIGO PARA LA CONSOLA
function Encript(CiphText, CiphNum) {
  let str = "";
  [...CiphText].forEach((char) => {
    let car = char.charCodeAt() + CiphNum;
    if (car >= 91 && car <= 91 + CiphNum) {
      car = 64 + car - 90;
    } else if (car >= 123 && car <= 123 + CiphNum) {
      car = 96 + car - 122;
    }
    switch (car) {
      case 32 + CiphNum:
        car = 32;
        break;
      case 241 + CiphNum:
        car = 110 + CiphNum;
        break;
      case 209 + CiphNum:
        car = 78 + CiphNum;
        break;
    }
    str += String.fromCharCode(car);
  });
  return str;
}

function Decript(CiphText, CiphNum) {
  let str = "";
  [...CiphText].forEach((char) => {
    let car = char.charCodeAt() - CiphNum;
    if (car <= 64 && car >= 64 - CiphNum) {
      car = 91 - (65 - car);
    } else if (car <= 96 && car >= 96 - CiphNum) {
      car = 123 - (97 - car);
    }
    switch (car) {
      case 32 - CiphNum:
        car = 32;
        break;
    }
    str += String.fromCharCode(car);
  });
  return str;
}

//CODIGO PARA LA INTERFAZ

var ECte=""
var ECnu=0
var DECte=""
var DECnu=0
function ECN(){
ECnu=parseInt(document.getElementById("ECNumber").value);
UpdateE()
}

function ECT(){
ECte=document.getElementById("ECText").value.toString();
UpdateE()
}

function UpdateE(){
  document.getElementById("ECRes").innerHTML=Encript(ECte,ECnu);
}

function DECN(){
  DECnu=parseInt(document.getElementById("DECNumber").value);
  UpdateD()
  }
  
  function DECT(){
  DECte=document.getElementById("DECText").value.toString();
  UpdateD()
  }
  
  function UpdateD(){
    document.getElementById("DECRes").innerHTML=Decript(DECte,DECnu);
  }