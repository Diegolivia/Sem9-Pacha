function Encript(CiphText, CiphNum) {
  let str = "";
  [...CiphText].forEach((char) => {
    let car = char.charCodeAt() + CiphNum;
    switch (car) {
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
