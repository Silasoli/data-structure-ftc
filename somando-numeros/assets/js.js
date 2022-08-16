function sum() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) return alert('Preencha os 2 campos com valores numéricos!!!');

  return Swal.fire(`${num1} + ${num2} = ${num1 + num2}`);

}

