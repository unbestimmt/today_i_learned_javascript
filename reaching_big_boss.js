/*
Algorithm to check wether a player can fight the big boss
or not based on collecting 3 necessary itens
*/

let itensColetados = ["arco", "pedra", "machado", "bone", "sapato", "capa"];
let itemNecessario1 = "capa"
let itemNecessario2 = "machado"
let itemNecessario3 = "arco"

let itensNecessarios = 0;

for (const item of itensColetados) {
  if (item === itemNecessario1) {
    itensNecessarios += 1;
  }
  else if (item === itemNecessario2) {
    itensNecessarios += 1;
  }
  else if (item === itemNecessario3) {
    itensNecessarios += 1;
  }
}

if (itensNecessarios === 3) {
  console.log("PODE ENFRENTAR")
} else {
  console.log("NAO PODE ENFRENTAR")
}


