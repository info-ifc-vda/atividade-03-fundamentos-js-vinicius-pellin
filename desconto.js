function calcularDesconto(preco, desconto) {
const valorDesconto = preco *(desconto / 100)
return valorDesconto;
}

const preco = 100;
const desconto = 50;
const valorDesconto = calcularDesconto(preco, desconto);

console.log("Valor do desconto" + valorDesconto);