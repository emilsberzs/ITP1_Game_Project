function keyPressed() {
    // Character movement controls
    if (!isPlummeting && !flagpole.isReached) {
        if (key == 'a') {
            isLeft = true;
        } else if (key == 'd') {
            isRight = true;
        } else if (key == 'w' && !isFalling) {
            jumpSound.play();
            gameChar_y -= 110;
        }
    }

    //Start new game after loss
    if (lives < 1 || flagpole.isReached) {
        if (keyCode == 32) {
            setup();
        }
    }
}

function keyReleased() {
    // Character movement stops when key released
    if (key == 'a') {
        isLeft = false;
    } else if (key == 'd') {
        isRight = false;
    }
}
