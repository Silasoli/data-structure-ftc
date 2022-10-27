const dict = new Dictionary();

dict.set("Silas", "silas@ftc.edu.br");
dict.set("iago", "ftc@ftc.edu.br");

dict.forEach((chave, valor) => {
  console.log(`Chave: ${chave},Valor ${valor}`);
});
