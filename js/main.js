/************************************
*                                   *
*              ON LOAD              *
*                                   *
************************************/


const startGame = document.getElementById("buttonStart")



startGame.addEventListener(
    "click",
    function() {

        const gridEl = document.getElementById("grid")

        const gridDimension = 100
        generateGrid(gridEl, gridDimension);

    }

)



/************************************
*                                   *
*            FUNCTIONS              *
*                                   *
************************************/

function generateGrid(grid, dimension) {

    grid.innerHTML = "";


    
    
    for(let i = 1; i <= 100; i++){
        
        // genero un div
        const squareEl = document.createElement("div");
        
        // aggiungo la classe .square
        squareEl.classList.add("square");
        
        
        // assegno un valore da 1-100 ad ogni cella
        squareEl.innerHTML = i;
        
        // aggiungo addeventlistener
        squareEl.addEventListener(
            "click",
            function () {
                console.log(this);
                this.classlist.toggle("active");
            }
        )
        // lo aggiungo alla griglia
        grid.append(squareEl);

    }
}
