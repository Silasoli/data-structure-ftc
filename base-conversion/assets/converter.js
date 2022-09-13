function decimalTobase() {
  const number = Number(document.getElementById("num").value);

  if (isNaN(number) || number === 0)
    return alertResult("error", "<p>Digite apenas números inteiros maiores que zero!</p>");

  const bin = converter(2, number);
  const oct = converter(8, number);
  const hex = converter(16, number);

  return alertResult(
    "success",
    `
  <p>Conversão realizada com sucesso:</p>
  <p>Binário:	${bin}</p>
  <p>Octal:	${oct}</p>
  <p>Hexadecimal:	${hex}</p>
  `
  );
}

function converter(base, value) {
  const array = new Pilha();
  const digts = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let rest;
  let numerBinaryInString = "";
  while (value > 0) {
    rest = Math.floor(value % base);
    array.pushStack(rest);
    value = Math.floor(value / base);
  }
  while (!array.isEmptyStack()) {
    numerBinaryInString += digts[array.popStack()];
  }
  return String(numerBinaryInString);
}

function alertResult(icon, html) {
  return Swal.fire({
    icon,
    html,
  });
}
