const codigoBarras = document.getElementById("codigo-barras");
const resultado = document.getElementById("resultado");

const enviar = () => {
  const texto = codigoBarras.value;

  // Separar o texto em blocos de 9 dígitos
  const blocos = texto.split("");
  const tamanho = blocos.length;

  // Criar um array com os blocos formatados
  const codigosFormatados = [];
  for (let i = 0; i < tamanho; i += 9) {
    const bloco = blocos.slice(i, i + 9).join("");
    codigosFormatados.push(bloco.trim());
  }

  // Adicionar o texto formatado ao resultado
  resultado.textContent = codigosFormatados.join(" | ");
};

enviar();
