let randomNumber = 0;

function start() {
  randomNumber = Math.floor(Math.random() * (101 - 0) + 0);
}

start();

function verify() {
  const num = Number(document.getElementById("num").value);

  if (isNaN(num)) return Swal.fire("Digite apenas valores numéricos!!!");

  if (num === randomNumber) return reStart();
  else if (num > randomNumber)
    Swal.fire(`O número digitado é maior que o número gerado`);
  else if (num < randomNumber)
    Swal.fire(`O número digitado é menor que o número gerado`);
}

function reStart() {
  Swal.fire("Você acertou!!");
  start();
}
