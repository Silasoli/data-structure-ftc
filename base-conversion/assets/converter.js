
addOptions()
function addOptions() {
  for (let index = 2; index <= 16; index++) {
    const select = document.getElementById("select");
    const option = new Option(index, index);
    select.add(option);    
  }
}

function decimalTobase() {
  const number = Number(document.getElementById("num").value);
  const base = Number(document.getElementById("select").value);

  if (isNaN(number) || number === 0)
    return alertResult("error", "<p>Digite apenas números inteiros maiores que zero!</p>");

  return alertResult(
    "success",
    `<p>Conversão realizada com sucesso:</p>
  <p>Resultado:	${converter(base, number)}</p>`
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

