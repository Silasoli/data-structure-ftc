const fila = new Queue();

fila.enqueue("Silas");
fila.enqueue("Sabrina");
fila.enqueue("Levi");
fila.enqueue("Kadmo");
addOptions();
showQtd();

function addOptions() {
  const itens = fila.toString().split(",");
  if (fila.size() < 1) return;
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
  deleteOptions();
  showLastRemoved(fila.peek());
  fila.dequeue();
  showQtd();
  addOptions();
  alertResult("removido");
}

function addItem() {
  deleteOptions();
  const input = document.getElementById("num");
  const enqueue = fila.enqueue(input.value);
  input.value = "";
  showQtd();
  addOptions();
  alertResult("adicionado");
  verifyEnqueue(enqueue);
}

function showQtd() {
  const btn = document.getElementById("qtdPersons");
  btn.textContent = `Quantidade de pessoas: ${fila.size()}`;
}

function showLastRemoved(name) {
  const btn = document.getElementById("lastRemoved");
  if (name === undefined) btn.textContent = `A fila está vazia`;
  else btn.textContent = `Último item removido: ${name}`;
}

function alertResult(result, icon = "success") {
  let title = `Item ${result} com sucesso`;
  if (icon === "error") title = result;
  return Swal.fire({
    icon,
    title,
  });
}

function verifyEnqueue(element) {
  if (element) return alertResult(element, "error");
  else return alertResult("adicionado");
}
