    class Game {

        static #instance = new Game();

        constructor() {
            this.gameloop = setInterval (Game.#loop, 10);
        }


        static #loop () {
            Canvas.fillColor("#b3ecff"); // Tegner baggrundsfarven. Skal stå først, ellers bliver andre ting overtegnet
            for (let i = 0; i < window.innerWidth; i += 40)
                Canvas.drawRect(10 + i, 10, 10, 10, "white");
            Canvas.drawCircle(100, 100, 10, "white");
            //Canvas.drawImage(image, 200, 200, 20, 20);
        } 
    }
    
    let image = document.createElement("img");
    image.src = "placeholder.jpg";


