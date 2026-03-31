function valorHipo(cateto1, cateto2){
    const hipotenusa = Math.sqrt((cateto1 * cateto1) + (cateto2 * cateto2));
    return hipotenusa;
}

const cateto1 = 3;
const cateto2 = 4;
const hipotenusa= valorHipo(cateto1, cateto2);

console.log("valor da hipotenusa é: "+ hipotenusa);
