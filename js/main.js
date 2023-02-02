
// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;




/************************************
 *                                   *
 *              ON LOAD              *
 *                                   *
************************************/


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const startGame = document.getElementById("buttonStart")

startGame.addEventListener(
    "click",
    function() {
        
        const gridEl = document.getElementById("grid")
        
        const gridDimension = 100
        const gridGenerator = generateGrid(gridEl, gridDimension);
        
    }
    
    )
    
    
    
    /************************************
     *                                   *
     *            FUNCTIONS              *
     *                                   *
    ************************************/
   
   function generateGrid(gridEl, gridDimension) {
       
       grid.innerHTML = ""; 
       
       
       // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
       for(let i = 1; i <= 100; i++){
           
           // genero un div
           const squareEl = document.createElement("div");
           
           // aggiungo la classe .square
           squareEl.classList.add("square");
           
           
           // assegno un valore da 1-100 ad ogni cella
           squareEl.innerHTML = i;
           
         
           // Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
        squareEl.addEventListener(
            "click",
            function() {
                console.log(this.innerHTML);
                this.classList.toggle("active");
            }
        )
        // lo aggiungo alla griglia
        grid.append(squareEl);

    }
}
