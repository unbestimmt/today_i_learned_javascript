/*
Checks if two boxers can fight or not based on the difference
of their weight. The difference can't be higher than 5 kilograms
*/

let pesos = [60, 57];
let pesoLutadorA = pesos[0];
let pesoLutadorB = pesos[1];

let aMenosB = Math.abs(pesoLutadorA - pesoLutadorB)

if (aMenosB <= 5) {
  console.log("PODEM LUTAR")
} else {
  console.log("NAO PODEM LUTAR")
}