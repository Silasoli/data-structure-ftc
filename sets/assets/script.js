const frutas = new Set();
frutas.add("Goiaba")
frutas.add("Groselha");
frutas.add("Uva");
frutas.add("Jaca");
frutas.add("Kiwi");

console.log("Frutas" , frutas)

frutas.delete("Kiwi");

console.log("Frutas", frutas);

const verduras = new Set();

verduras.add("Acelga");
verduras.add("Alface");
verduras.add("Agrião");
verduras.add("Brócolis");
verduras.add("Couve");

console.log("Verduras", verduras);

const feiraDaSemana = frutas.union(verduras);

console.log("Feira Da Semana", feiraDaSemana);



