function checkPalindrome() {
  const array1 = new Pilha();
  const array2 = new Pilha();
  const word = document
    .getElementById("num")
    .value.toLowerCase().normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (const letter of word) {
    array1.pushStack(letter);
  }

  for (let index = array1.sizeStack() - 1; index >= 0; index--) {
    array2.pushStack(array1.items[index]);
  }

  const result = String(array1.items) == String(array2.items);
  const resultString = result ? "É" : "Não é";

  return Swal.fire(`${resultString} um palíndromo`);
}
