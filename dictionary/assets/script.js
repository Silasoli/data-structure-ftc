const dict = new Dictionary();

dict.set("Brubs Rios", "(42) 99797-8378");
dict.set("Poliana Arapiraca", "(99) 99656-3678");

// dict.forEach((chave, valor) => {
//   console.log(`Chave: ${chave},Valor ${valor}`);
// });

addOptions();
showQtd();

function addOptions() {
  if (dict.size() < 1) return;
  dict.forEach(function callback(chave, valor) {
    const select = document.getElementById("select");
    const option = new Option(
      `Nome: ${chave}, Telefone: ${valor}`,
      chave.trim()
    );
    select.add(option);
  });
}

function deleteOptions() {
  const select = document.getElementById("select");
  const selectLength = select.options.length;
  for (i = selectLength; i >= 1; i--) {
    select.remove(i);
  }
}

function removeItem() {
  const select = document.getElementById("select");
  const text = select.options[select.selectedIndex].value;
  deleteOptions();
  dict.remove(text);
  showQtd();
  addOptions();
  alertResult("removido");
}

function addItem() {
  deleteOptions();
  const person = document.getElementById("person");
  const phone = document.getElementById("phone");
  dict.set(`${person.value}`, `${phone.value}`);
  showQtd();
  person.value = "";
  phone.value = "";
  showQtd();
  addOptions();
  alertResult("adicionado");
}

function showQtd() {
  const btn = document.getElementById("qtdPersons");
  btn.textContent = `Quantidade de pessoas: ${dict.size()}`;
}

function alertResult(result) {
  return Swal.fire({
    icon: "success",
    title: `Item ${result} com sucesso`,
  });
}
