// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  document.querySelector(".ctverecek").innerHTML = "Funguje to!!!";
}


// TEST ZÁPISU NA GITHUB

// Úkol 1
let zelenyCtverecek;
zelenyCtverecek = document.querySelector(".ctverecek");

function zmenBarvu(){
zelenyCtverecek.style.backgroundColor = "green";
}

//Úkol 2

function zobrazVysledek(){
  document.querySelector("#vysledek").innerHTML = secti(4, 5);
}

//Úkol 3 je na řádku 21 - 22