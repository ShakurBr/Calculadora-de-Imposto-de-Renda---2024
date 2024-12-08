document.getElementById("calculate").addEventListener("click", () => {
    const income = parseFloat(document.getElementById("income").value);
    const resultElement = document.getElementById("result");
  
    if (isNaN(income) || income <= 0) {
      resultElement.textContent = "Por favor, insira um valor válido.";
      resultElement.style.color = "red";
      return;
    }
  
    let tax = 0;
  
    if (income <= 2259.20) {
      // Faixa 1: Isento
      resultElement.textContent = "Valor isento de imposto de renda.";
      resultElement.style.color = "green";
      return;
    } else if (income <= 2826.65) {
      // Faixa 2: 7,5% - Dedução R$169,44
      tax = income * 0.075 - 169.44;
    } else if (income <= 3751.05) {
      // Faixa 3: 15% - Dedução R$381,44
      tax = income * 0.15 - 381.44;
    } else if (income <= 4664.68) {
      // Faixa 4: 22,5% - Dedução R$662,77
      tax = income * 0.225 - 662.77;
    } else {
      // Faixa 5: 27,5% - Dedução R$896,00
      tax = income * 0.275 - 896.00;
    }
  
    // Exibir o resultado
    if (tax <= 0) {
      resultElement.textContent = "Valor isento de imposto de renda.";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = `O imposto devido é: R$ ${tax.toFixed(2)}`;
      resultElement.style.color = "blue";
    }
  });
  