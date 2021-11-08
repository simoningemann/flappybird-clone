// execute the update function every 10 milliseconds
setInterval(update, timeBetweenUpdates);
function update() {
    Canvas.fillBackground("#b3d9ff");
    GameObject.drawAll();
    GameObject.updateAll();

    // spawn a new cloud when it is time
    Cloud.timeSinceLastSpawn += timeBetweenUpdates;
    if(Cloud.timeSinceLastSpawn>Cloud.spawnInterval) {
        new Cloud (
            Cloud.data.drawOrder,
            Cloud.data.image,
            Cloud.data.xPosition,
            Cloud.getRandomYPosition(),
            Cloud.data.xSpeed
        );
        Cloud.timeSinceLastSpawn = 0;
    }

    // spawn new fireballs if it is time
    if(gameState == "action" &&
    Fireball.timeSinceLastSpawn>Fireball.spawnInterval) {
        new Fireball (
            Fireball.data.drawOrder,
            Fireball.data.image,
            Fireball.data.xPosition,
            Fireball.getRandomYPosition(),
            Fireball.data.hitboxRadius,
            Fireball.data.xSpeed

        );
        Fireball.timeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        Fireball.timeSinceLastSpawn += timeBetweenUpdates;
    }

}
