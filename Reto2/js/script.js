var dinero = 5;
var juego = true;

function Welcome() {
  document.getElementById("moni").innerHTML = dinero;
  console.log(
    "Bienvenido! Tienes " +
      dinero +
      " dolares iniciales\nPuedes apostar usando Apostar(<numero a apostar>,<dinero apostado>)"
  );
}
function Apostar(Numero, Apuesta) {
  if (juego) {
    if (dinero - Apuesta < 0) {
      return "No tienes suficiente dinero para hacer esta apuesta";
    } else if (Numero >= 1 && Numero <= 6) {
      let dado = 0;
      dado = Math.floor(Math.random() * 6) + 1;
      if (dado == Numero) {
        dinero = dinero + Apuesta;
        Actualizar();
        return "Ganaste " + Apuesta + "!";
      } else {
        dinero = dinero - Apuesta;
        Actualizar();
        return "Perdiste " + Apuesta + "!";
      }
    } else {
      return "Ese numero del dado no existe we";
    }
  } else {
    return "Ya acabo el juego, no puedes apostar mas, actualiza la pagina o algo xd";
  }
}

function Actualizar() {
  document.getElementById("moni").innerHTML = dinero;
  if (dinero >= 200) {
    juego = false;
    alert("TIENES " + dinero + "! HAS GANADO! FELICIDADES!");
    document.getElementById("SysMsg").innerHTML =
      "TIENES " + dinero + "! HAS GANADO! FELICIDADES!";
  } else if (dinero == 0) {
    juego = false;
    alert("TIENES " + dinero + "! Has perdido :c");
    document.getElementById("SysMsg").innerHTML =
      "TIENES " + dinero + "! Has perdido :c";
  } else {
    return (
      "Tienes " +
      dinero +
      " dolares\nPuedes apostar usando Apostar(<numero a apostar>,<dinero apostado>)"
    );
  }
}

function BET() {
  document.getElementById("BetRes").innerHTML = Apostar(
    parseInt(document.getElementById("BetNumber").value),
    parseInt(document.getElementById("BetMoney").value)
  );
}
