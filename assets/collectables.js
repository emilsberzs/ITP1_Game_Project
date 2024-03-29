floorPos_y = 432;

collectables = [
    {
        x_pos: 180,
        y_pos: 413,
        size: 25,
        isFound: false
    },
    {
        x_pos: 580,
        y_pos: 413,
        size: 25,
        isFound: false
    },
    {
        x_pos: 910,
        y_pos: 413,
        size: 25,
        isFound: false
    },
    {
        x_pos: 1050,
        y_pos: floorPos_y - 70,
        size: 25,
        isFound: false
    },
    {
        x_pos: 1150,
        y_pos: floorPos_y - 120,
        size: 25,
        isFound: false
    },
    {
        x_pos: 1250,
        y_pos: floorPos_y - 170,
        size: 25,
        isFound: false
    },
    {
        x_pos: 1350,
        y_pos: floorPos_y - 220,
        size: 25,
        isFound: false
    },
    {
        x_pos: 1550,
        y_pos: 380,
        size: 25,
        isFound: false
    },
    {
        x_pos: 1880,
        y_pos: 413,
        size: 25,
        isFound: false
    },
    {
        x_pos: 1350,
        y_pos: floorPos_y - 320,
        size: 25,
        isFound: false
    }
]


function drawCollectables() {
    for (i = 0; i < collectables.length; i++)
        if (!collectables[i].isFound) {
            noStroke();
            fill(207, 181, 59);
            ellipse(collectables[i].x_pos, collectables[i].y_pos, collectables[i].size);
            fill(255, 223, 0);
            ellipse(collectables[i].x_pos, collectables[i].y_pos, collectables[i].size * 0.7);
            stroke(10);
            fill(0);
            noStroke();
        }
}


function checkCollectables() {
    for (i = 0; i < collectables.length; i++) { 
    if (dist(gameChar_x, gameChar_y, collectables[i].x_pos, collectables[i].y_pos) < collectables[i].size && collectables[i].isFound == false) {
        collectCoinSound.play();
        collectables[i].isFound = true;
        game_score++;
    }
}
}

function keepScore() {
    noStroke();
    fill(0);
    textSize(40);
    text(game_score + '/10', 60, 20, 200, 200);
    noStroke();
    fill(207, 181, 59);
    ellipse(30, 38, 40);
    fill(255, 223, 0);
    ellipse(30, 38, 40 * 0.7);
    stroke(10);
    fill(0);
    noStroke();
}