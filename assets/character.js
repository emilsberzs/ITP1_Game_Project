function drawCharacter() {
    noFill();
    stroke(0);
    strokeWeight(1);
    if (isLeft && isFalling) {
        //LEGS
        line(gameChar_x - 11, gameChar_y - 14, gameChar_x, gameChar_y - 30);
        line(gameChar_x + 11, gameChar_y - 14, gameChar_x, gameChar_y - 30);
        //FEET
        rect(gameChar_x - 14, gameChar_y - 14, 3, 0);
        rect(gameChar_x + 7, gameChar_y - 14, 3, 0);
        //TORSO
        line(gameChar_x, gameChar_y - 30, gameChar_x, gameChar_y - 50);
        //ARMS
        line(gameChar_x, gameChar_y - 45, gameChar_x + 15, gameChar_y - 55);
        line(gameChar_x, gameChar_y - 45, gameChar_x - 15, gameChar_y - 55);
        //HEAD
        ellipse(gameChar_x, gameChar_y - 58, 15);
        //eyes
        ellipse(gameChar_x - 3, gameChar_y - 59, 1);
        //mouth
        arc(gameChar_x - 3, gameChar_y - 58, 10, 10, 0.5, 2.5);

    }

    else if (isRight && isFalling) {
        //LEGS
        line(gameChar_x - 11, gameChar_y - 14, gameChar_x, gameChar_y - 30);
        line(gameChar_x + 11, gameChar_y - 14, gameChar_x, gameChar_y - 30);
        //FEET
        rect(gameChar_x - 10, gameChar_y - 14, 3, 0);
        rect(gameChar_x + 11, gameChar_y - 14, 3, 0);
        //TORSO
        line(gameChar_x, gameChar_y - 30, gameChar_x, gameChar_y - 50);
        //ARMS
        line(gameChar_x, gameChar_y - 45, gameChar_x + 15, gameChar_y - 55);
        line(gameChar_x, gameChar_y - 45, gameChar_x - 15, gameChar_y - 55);
        //HEAD
        ellipse(gameChar_x, gameChar_y - 58, 15);
        //eyes
        ellipse(gameChar_x + 3, gameChar_y - 59, 1);
        //mouth
        arc(gameChar_x + 3, gameChar_y - 58, 10, 10, 0.5, 2.5);
    }

    else if (isLeft) {
        line(gameChar_x - 7, gameChar_y, gameChar_x, gameChar_y - 20);
        line(gameChar_x + 7, gameChar_y, gameChar_x, gameChar_y - 20);
        //FEET
        rect(gameChar_x - 10, gameChar_y, 3, 0);
        rect(gameChar_x + 4, gameChar_y, 3, 0);
        //TORSO
        line(gameChar_x, gameChar_y - 20, gameChar_x, gameChar_y - 40);
        //ARMS
        line(gameChar_x, gameChar_y - 35, gameChar_x + 7, gameChar_y - 25);
        line(gameChar_x, gameChar_y - 35, gameChar_x - 7, gameChar_y - 25);
        //HEAD
        ellipse(gameChar_x, gameChar_y - 48, 15);
        //eyes
        ellipse(gameChar_x - 3, gameChar_y - 49, 1);
        //mouth
        arc(gameChar_x - 3, gameChar_y - 48, 10, 10, 1, 2);
    }

    else if (isRight) {
        //LEGS
        line(gameChar_x - 7, gameChar_y, gameChar_x, gameChar_y - 20);
        line(gameChar_x + 7, gameChar_y, gameChar_x, gameChar_y - 20);
        //FEET
        rect(gameChar_x - 7, gameChar_y, 3, 0);
        rect(gameChar_x + 7, gameChar_y, 3, 0);
        //TORSO
        line(gameChar_x, gameChar_y - 20, gameChar_x, gameChar_y - 40);
        //ARMS
        line(gameChar_x, gameChar_y - 35, gameChar_x + 7, gameChar_y - 25);
        line(gameChar_x, gameChar_y - 35, gameChar_x - 7, gameChar_y - 25);
        //HEAD
        ellipse(gameChar_x, gameChar_y - 48, 15);
        //eyes
        ellipse(gameChar_x + 3, gameChar_y - 49, 1);
        //mouth
        arc(gameChar_x + 3, gameChar_y - 48, 10, 10, 1, 2);
    }

    else if (isFalling || isPlummeting) {
        //LEGS
        line(gameChar_x - 11, gameChar_y - 14, gameChar_x, gameChar_y - 30);
        line(gameChar_x + 11, gameChar_y - 14, gameChar_x, gameChar_y - 30);
        //FEET
        rect(gameChar_x - 14, gameChar_y - 14, 3, 0);
        rect(gameChar_x + 11, gameChar_y - 14, 3, 0);
        //TORSO
        line(gameChar_x, gameChar_y - 30, gameChar_x, gameChar_y - 50);
        //ARMS
        line(gameChar_x, gameChar_y - 45, gameChar_x + 15, gameChar_y - 55);
        line(gameChar_x, gameChar_y - 45, gameChar_x - 15, gameChar_y - 55);
        //HEAD
        ellipse(gameChar_x, gameChar_y - 58, 15);
        //eyes
        ellipse(gameChar_x - 3, gameChar_y - 59, 1);
        ellipse(gameChar_x + 3, gameChar_y - 59, 1);
        //mouth
        arc(gameChar_x, gameChar_y - 58, 10, 10, 0.5, 2.5);
    }

    else {
        //LEGS
        line(gameChar_x - 7, gameChar_y, gameChar_x, gameChar_y - 20);
        line(gameChar_x + 7, gameChar_y, gameChar_x, gameChar_y - 20);
        //FEET
        rect(gameChar_x - 10, gameChar_y, 3, 0);
        rect(gameChar_x + 7, gameChar_y, 3, 0);
        //TORSO
        line(gameChar_x, gameChar_y - 20, gameChar_x, gameChar_y - 40);
        //ARMS
        line(gameChar_x, gameChar_y - 35, gameChar_x + 7, gameChar_y - 25);
        line(gameChar_x, gameChar_y - 35, gameChar_x - 7, gameChar_y - 25);
        //HEAD
        ellipse(gameChar_x, gameChar_y - 48, 15);
        //eyes
        ellipse(gameChar_x - 3, gameChar_y - 49, 1);
        ellipse(gameChar_x + 3, gameChar_y - 49, 1);
        //mouth
        arc(gameChar_x, gameChar_y - 48, 10, 10, 1, 2);
    }
}