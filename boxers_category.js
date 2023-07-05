/*
Check if two boxers can fight or not based on their
weight category
*/

let peso1 = 85;
let peso2 = 57;

let categoriaPeso1;
let categoriaPeso2;

if (peso1 < 55) {
  categoriaPeso1 = "peso leve";
} else if (peso1 >= 55 && peso1 < 65) {
  categoriaPeso1 = "peso meio-medio";
} else if (peso1 >= 65 && peso1 < 75) {
  categoriaPeso1 = "peso medio";
} else if (peso1 >= 75 && peso1 < 85) {
  categoriaPeso1 = "peso meio-pesado";
} else if (peso1 >= 85) {
  categoriaPeso1 = "peso pesado";
}

if (peso2 < 55) {
  categoriaPeso2 = "peso leve";
} else if (peso2 >= 55 && peso2 < 65) {
  categoriaPeso2 = "peso meio-medio";
} else if (peso2 >= 65 && peso2 < 75) {
  categoriaPeso2 = "peso medio";
} else if (peso2 >= 75 && peso2 < 85) {
  categoriaPeso2 = "peso meio-pesado";
} else if (peso2 >= 85) {
  categoriaPeso2 = "peso pesado";
}

if (categoriaPeso1 === categoriaPeso2) {
  console.log("PODEM LUTAR");
} else {
  console.log("NAO PODEM LUTAR");
}