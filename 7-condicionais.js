console.log("Trabalhando com condicionais.");
const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;
//if (idadeComprador >= 18) {
//    console.log(`Comprador maior de idade.`);
//    listaDeDestinos.splice(1, 1);
//} else if (estaAcompanhada) {
//    console.log(`Comprador acompanhado.`);
//    listaDeDestinos.splice(1, 1);
//} else {
//    console.log(`Não é maior de idade, não vender.`);
//}

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(`Comprador maior de idade.`);
    listaDeDestinos.splice(1, 1);
} else {
    console.log(`Não é maior de idade, não vender.`);
}

console.log(`Embarque:\n\n`);
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log(`Boa Viagem.`);
} else {
    console.log(`Não pode embarcar.`);
}
console.log("Destinos possíveis.");
console.log(listaDeDestinos);