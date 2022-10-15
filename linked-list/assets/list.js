const list = new LinkedList();
list.push("Leviano");
list.push("Brandão");
list.push("Alee");
list.push("Jovem D");
//list.remove("Leviano");

addOptions();
showQtd();

function addOptions() {
  const itens = list.toString().split(",");
  if (list.size() < 1) return;
  itens.forEach(function callback(value, index) {
    const select = document.getElementById("select");
    const option = new Option(value.trim(), index);
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
  const text = select.options[select.selectedIndex].text;
  deleteOptions();
  list.remove(text);
  showLastRemoved(text);
  showQtd();
  addOptions();
  alertResult("removido");
}

function addItem() {
  deleteOptions();
  const input = document.getElementById("num");
  list.push(input.value);
  input.value = "";
  showQtd();
  addOptions();
  alertResult("adicionado");
}

function showQtd() {
  const btn = document.getElementById("qtdPersons");
  btn.textContent = `Quantidade de pessoas: ${list.size()}`;
}

function showLastRemoved(name) {
  const btn = document.getElementById("lastRemoved");
  if (name === undefined) btn.textContent = `A list está vazia`;
  else btn.textContent = `Último item removido: ${name}`;
}

function alertResult(result) {
  return Swal.fire({
    icon: "success",
    title: `Item ${result} com sucesso`,
  });
}
