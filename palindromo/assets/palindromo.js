function checkPalindromo() {
  const array1 = new Pilha();
  const array2 = new Pilha();
  const word = document
    .getElementById("num")
    .value.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (const letter of word) {
    array1.push(letter);
  }

  for (let index = array1.size() - 1; index >= 0; index--) {
    array2.push(array1.items[index]);
  }

  const result = String(array1.items) == String(array2.items);
  return showResult(result);
}

function showResult(result){
  if (result) {
    alertResult("success", "É");
  } else {
    alertResult("error", "Não é");
  }
}

function alertResult(icon, result) {
  return Swal.fire({
    icon,
    title: `${result} um palíndromo`,
  });
}
