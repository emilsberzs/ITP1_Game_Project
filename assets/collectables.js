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
    },
]

function drawCollectable(t_collectable) {
    if (!t_collectable.isFound) {
        noStroke();
        fill(207, 181, 59);
        ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size);
        fill(255, 223, 0);
        ellipse(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size * 0.7);
        stroke(10);
        fill(0);
        noStroke();
    }
}


function checkCollectable(t_collectable) {
    if (dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < t_collectable.size && t_collectable.isFound == false) {
        collectCoinSound.play();
        t_collectable.isFound = true;
        game_score++;
    }
}