function fibonacci() {
  const num = Number(document.getElementById("num").value);
  cleanContent();

  const fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (let i = 2; i < num + 1; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  fibonacci.shift();
  putOnScreen(fibonacci);
}

function putOnScreen(array) {
  const div = document.getElementById("putOnScreen");
  const internalDiv = document.createElement("div");
  internalDiv.id = "internalDiv";
  div.appendChild(internalDiv);
  
  array.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    internalDiv.appendChild(li);
  });
}

function cleanContent() {
  const div = document.getElementById("internalDiv");
  if (div) div.outerHTML = "";
}
