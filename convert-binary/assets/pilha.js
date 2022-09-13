function decimalTobin(decimal) {
  const array = new Pilha();
  let number = document.getElementById("num").value;
  let rest;
  let numerBinaryInString = "";
  while (number > 0) {
    rest = Math.floor(number % 2);
    array.pushStack(rest);
    number = Math.floor(number / 2);
  }
  while (!array.isEmptyStack()) {
    numerBinaryInString += array.popStack();
  }

  return Swal.fire(`${numerBinaryInString}`);
}



