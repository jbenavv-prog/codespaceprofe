function calc(operation) {
  const firstValue = parseInt(document.querySelector(".first-value").value);
  const secondValue = parseInt(document.querySelector(".second-value").value);
  let result = 0;

  //   if (operation == "+") {
  //     result = firstValue + secondValue;
  //   } else if (operation == "-") {
  //     result = firstValue - secondValue;
  //   } else if (operation == "/") {
  //     result = firstValue / secondValue;
  //   } else if (operation == "*"){
  //     result = firstValue * secondValue;
  //   } else if (operation == "^"){
  //     result = firstValue ** secondValue;
  //   }

  switch (operation) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "/":
      result = firstValue / secondValue;
      break;
    case "*":
      result = firstValue * secondValue;
      break;
    case "^":
      result = firstValue ** secondValue;
      break;
  }

  document.querySelector(".result-cage").value = result;
}
