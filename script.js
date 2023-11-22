function separaNumeros() {
  // Obtém o texto do textarea de entrada
  const textoEntrada = document.getElementById("textoEntrada").value;

  // Converte o texto para um array de números
  const numeros = textoEntrada.split(" ");

  // Cria um array vazio para armazenar os resultados
  const resultados = [];

  // Itera sobre os números
  for (let i = 0; i < numeros.length; i++) {
    // Verifica se o número tem 9 dígitos
    if (numeros[i].length === 9) {
      // Adiciona o número ao array de resultados
      resultados.push(numeros[i]);
    } else {
      // Adiciona o número ao array de resultados, preenchendo com zeros
      resultados.push(numeros[i].padStart(9, "0"));
    }
  }

  // Obtém o textarea de saída
  const textoSaida = document.getElementById("textoSaida");

  // Limpa o textarea de saída
  textoSaida.value = "";

  // Itera sobre os resultados
  for (let i = 0; i < resultados.length; i++) {
    // Adiciona o número a textarea de saída
    textoSaida.value +=   resultados[i].replaceAll("\n", "/");
  }
// Adiciona uma opção de copiar o texto const
  const botaoCopiar = document.createElement("button");
  botaoCopiar.textContent = "Copiar";
  botaoCopiar.addEventListener("click", function () {
    // Copia o texto do textarea de saída
    document.execCommand("copy");
  });
  textoSaida.appendChild(botaoCopiar);
}

// Adiciona um evento de clique ao botão enviar
document.getElementById("botaoEnviar").addEventListener("click", separaNumeros);
