function Encript(CiphText, CiphNum) {
  let str = "";
  [...CiphText].forEach((char) => {
    let car = char.charCodeAt() + CiphNum;
    switch (car) {
        case 35:
        car = 32;
        break;
      case 93:
        car = 67;
        break;
      case 92:
        car = 66;
        break;
      case 91:
        car = 65;
        break;
      case 123:
        car = 97;
        break;
      case 124:
        car = 98;
        break;
      case 125:
        car = 99;
        break;
      case 241 + CiphNum:
        car = 110 + CiphNum;
        break;
      case 209 + CiphNum:
        car = 78 + CiphNum;
        break;
      default:
        break;
    }
    str += String.fromCharCode(car);
  });
  console.log(str);
}

function Decript(CiphText, CiphNum) {
    let str = "";
    [...CiphText].forEach((char) => {
      let car = char.charCodeAt() - CiphNum;
      switch (car) {
        case 29:
            car = 32;
            break;
        case 62:
          car = 88;
          break;
        case 63:
          car = 89;
          break;
        case 64:
          car = 90;
          break;
        case 94:
          car = 120;
          break;
        case 95:
          car = 121;
          break;
        case 96:
          car = 122;
          break;
        default:
          break;
      }
      str += String.fromCharCode(car);
    });
    console.log(str);
  }
  