function drawLifeTokens() {
    tokens = {
        x_pos: width,
        y_pos: 70
    }
    noFill();
    stroke(0);
    strokeWeight(2);
    for (i = lives; i > 0; i--) {
        //LEGS
        line(tokens.x_pos - i * 30 - 7, tokens.y_pos, tokens.x_pos - i * 30, tokens.y_pos - 20);
        line(tokens.x_pos - i * 30 + 7, tokens.y_pos, tokens.x_pos - i * 30, tokens.y_pos - 20);
        //FEET
        rect(tokens.x_pos - i * 30 - 10, tokens.y_pos, 3, 0);
        rect(tokens.x_pos - i * 30 + 7, tokens.y_pos, 3, 0);
        //TORSO
        line(tokens.x_pos - i * 30, tokens.y_pos - 20, tokens.x_pos - i * 30, tokens.y_pos - 40);
        //ARMS
        line(tokens.x_pos - i * 30, tokens.y_pos - 35, tokens.x_pos - i * 30 + 7, tokens.y_pos - 25);
        line(tokens.x_pos - i * 30, tokens.y_pos - 35, tokens.x_pos - i * 30 - 7, tokens.y_pos - 25);
        //HEAD
        ellipse(tokens.x_pos - i * 30, tokens.y_pos - 48, 15);
        //eyes
        ellipse(tokens.x_pos - i * 30 - 3, tokens.y_pos - 49, 1);
        ellipse(tokens.x_pos - i * 30 + 3, tokens.y_pos - 49, 1);
        //mouth
        arc(tokens.x_pos - i * 30, tokens.y_pos - 48, 10, 10, 1, 2);
    }
}