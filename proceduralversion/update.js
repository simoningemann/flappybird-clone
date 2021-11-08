
// execute the update function every 10 milliseconds
setInterval(update, timeBetweenUpdates);
function update() {

    fillBackground("#b3d9ff");
    // for every cloud
    for(let i = 0; i < clouds.length; i++) {
        // draw the cloud
        drawImage(
            cloudImage,
            clouds[i][0],
            clouds[i][1],
            cloudImage.width/4,
            cloudImage.height/4
        );
        // update the x position of the cloud
        clouds[i][0] += cloudXSpeed;
        // remove cloud if it moves beyond the destruction point
        if(clouds[i][0] < destructionXPosition) {
            clouds = removeIndexAndReturn(clouds, i);
            i--; // decrement i to avoid flicker
        }

    }
    // spawn a new cloud when the it is time
    cloudTimeSinceLastSpawn += timeBetweenUpdates;
    if(cloudTimeSinceLastSpawn>cloudSpawnInterval) {
        clouds.push([
            canvas.width,
            randomBetween(0, canvas.height/2)
        ]);
        cloudTimeSinceLastSpawn = 0;
    }    

    // draw the bird image
    drawImage(birdImage,
        birdXPosition - birdHitboxRadius * 1.5,
        birdYPosition - birdHitboxRadius * 1.5,
        birdHitboxRadius * 3,
        birdHitboxRadius * 3
    );

    // draw the bird hitbox if debugmode is on
    if(debugModeIsOn) {
        drawCircle(
            birdXPosition, 
            birdYPosition, 
            birdHitboxRadius, 
            hitboxColor
        );
    }

    // update the bird movement
    birdYSpeed += birdYAccelleration;
    birdYPosition += birdYSpeed;

    if (gameState == "action") {
        // end the game if the bird touches the canvas edge
        if(canvas.height < birdYPosition || birdYPosition < 0) {
            gameOverSound.play();
            canBirdFlap = false;
            gameState = "gameover";
        }
    }

    // for each coin
    for(let i = 0; i < coins.length; i++) {
        let coinIsMarkedForDestruction = false;
        // draw the coin
        drawImage(coinImage,
            coins[i][0] - coinHitboxRadius * 1.3,
            coins[i][1] - coinHitboxRadius * 1.3,
            coinImage.width*.1,
            coinImage.height*.1
        );

        if(debugModeIsOn) {
            drawCircle(
                coins[i][0], 
                coins[i][1], 
                coinHitboxRadius, 
                hitboxColor
            );
        }

        // move the coin
        coins[i][0] += coinXSpeed;


        if(gameState == "action") {
            // check if the coins collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                coins[i][0],
                coins[i][1],
                coinHitboxRadius
            )) 
            { // if they do, increase the score
                coinSound.play();
                scoreboardValue += 1;
                coinIsMarkedForDestruction = true;
            }
        }

         // remove coin if it goes off the screen
         if(coins[i][0]<destructionXPosition) {
            coinIsMarkedForDestruction = true;
        }

        if(coinIsMarkedForDestruction) {
            coins = removeIndexAndReturn(coins, i);
            i--; // decrement i to avoid flicker
        }
    }

    // spawn new coins
    if(gameState == "action" &&
    coinTimeSinceLastSpawn>coinSpawnInterval) {
        coins.push([
            canvas.width * 1.2,
            randomBetween(0, canvas.height)
        ]);
        coinTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        coinTimeSinceLastSpawn += timeBetweenUpdates;
    }



    // for each fireball
    for(let i = 0; i < fireballs.length; i++) {
        // draw the fireball
        drawImage(fireballImage,
            fireballs[i][0] - fireballHitboxRadius * 2.3,
            fireballs[i][1] - fireballHitboxRadius * 1.6,
            fireballImage.width*1.3,
            fireballImage.height*1.3
        );

        if(debugModeIsOn) {
            drawCircle(
                fireballs[i][0], 
                fireballs[i][1], 
                fireballHitboxRadius, 
                hitboxColor
            );
        }

        // move the fireball
        fireballs[i][0] += fireballXSpeed;

        // remove fireball if it goes off the screen
        if(fireballs[i][0]<destructionXPosition) {
            fireballs = removeIndexAndReturn(fireballs, i);
        }

        if(gameState == "action") {
            // check if the fireball collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                fireballs[i][0],
                fireballs[i][1],
                fireballHitboxRadius
            )) 
            { // if they do, end the game
                canBirdFlap = false;
                gameOverSound.play();
                gameState = "gameover";
            }
        }
    }

    // spawn new fireballs
    if(gameState == "action" &&
    fireballTimeSinceLastSpawn>fireballSpawnInterval) {
        fireballs.push([
            canvas.width * 1.2,
            randomBetween(0, canvas.height)
        ]);
        fireballTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        fireballTimeSinceLastSpawn += timeBetweenUpdates;
    }

    //draw the scoreboard
    drawImage(
        scoreboardImage,
        scoreboardImageXPosition,
        scoreboardImageYPosition,
        scoreboardImageWidth,
        scoreboardImageHeight
    );
    drawText(
        "x"+ scoreboardValue,
        scoreboardTextXPosition,
        scoreboardTextYPosition,
        scoreboardTextSize,
        scoreboardTextColor
    );

    // draw the menu text
    if(gameState == "menu") {
        drawText (
            menuFirstText,
            menuFirstTextXPosition,
            menuFirstTextYPosition,
            menuTextSize,
            menuTextColor
        )
        drawText (
            menuSecondText,
            menuSecondTextXPosition,
            menuSecondTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    // draw the game over text
    if(gameState == "gameover") {
        drawText (
            gameOverText,
            gameOverTextXPosition,
            gameOverTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }
}