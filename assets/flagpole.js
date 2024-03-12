flagpole = {
    x_pos: 2000,
    isReached: false
}

function renderFlagpole() {
    fill(0);
    stroke(0);
    strokeWeight(3);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, 350);
    strokeWeight(1);
    if (flagpole.isReached) {
        fill(0, 255, 0);
        triangle(flagpole.x_pos, 350, flagpole.x_pos - 30, 360, flagpole.x_pos, 370);

    }
    else {
        fill(255, 0, 0);
        triangle(flagpole.x_pos, floorPos_y, flagpole.x_pos - 30, floorPos_y - 10, flagpole.x_pos, floorPos_y - 20);
    }

}

function checkFlagpole() {
    if (gameChar_x > flagpole.x_pos) {
        flagpole.isReached = true;
        if (!hasPlayedWinSound) {
            winSound.play();
            hasPlayedWinSound = true;
        }
    }
}