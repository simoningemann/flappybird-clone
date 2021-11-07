document.addEventListener("keydown", function(event) {
    
    if(gameState == "menu" && event.key == startKey) {
        if (music.paused) music.play();
        gameState = "action";
        canBirdFlap = true;
        return; 
    }

    if (gameState == "action" && 
    event.key == birdFlapKey && 
    canBirdFlap == true) {
        if(birdYAccelleration == 0) birdYAccelleration = 0.2;
        birdYSpeed = birdFlapForce;
        canBirdFlap = false;
        birdFlapSound.currentTime = 0.1;
        birdFlapSound.play();
        return;
    }

    if(gameState == "gameover" && event.key == restartKey) {
        gameState = "menu";
        birdYPosition = birdStartYPosition;
        birdYSpeed = birdStartYSpeed;
        birdYAccelleration = birdStartYAccelleration;
        canBirdFlap = false;
        fireballs = [];
        fireballTimeSinceLastSpawn = fireballSpawnInterval;
        scoreboardValue = 0;
        coins = [];
        return; 
    }

});

document.addEventListener("keyup", function(event) {

    if (gameState == "action" && event.key == birdFlapKey) {
        canBirdFlap = true;
        return;
    }

});