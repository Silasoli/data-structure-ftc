function getNumbers() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) return alert('Preencha os 2 campos com valores numéricos!!!');

    if (num1 > num2) alert(`O número: ${num1} é maior que o número: ${num2}`);
    else if (num1 < num2) alert(`O número: ${num2} é maior que o número: ${num1}`);
    else if (num2 === num1) alert(`Os números: ${num1} e ${num2} são iguais`);
}