canyons = [
    {
        x_pos: -170,
        width: 170
    },
    {
        x_pos: 120,
        width: 30
    },
    {
        x_pos: 370,
        width: 80
    },
    {
        x_pos: 780,
        width: 50
    },
    {
        x_pos: 1000,
        width: 700
    },
    {
        x_pos: 2100,
        width: 170

    }
]

function drawCanyon(t_canyon) {
    noStroke();
    fill(100, 155, 255);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height - floorPos_y);
    fill(255, 0, 0);
    rect(t_canyon.x_pos, floorPos_y + 150, t_canyon.width, height - floorPos_y - 160);
}


function checkCanyon(t_canyon) {
    if (gameChar_x - 10 > t_canyon.x_pos && gameChar_x + 10 < t_canyon.x_pos + t_canyon.width && gameChar_y >= floorPos_y) {
        isPlummeting = true;
        if (!hasPlayedFallingSound) {
            fallingSound.play();
            hasPlayedFallingSound = true;
        }

    }


    if (isPlummeting) {
        isLeft = false;
        isRight = false;
        gameChar_y += 1;

    }


}

//CHECK DEATH
function checkPlayerDie() {
    if (gameChar_y > height * 1.5) {
        lives = lives - 1;
        if (lives > 0) {
            hasPlayedFallingSound = false;
            gameChar_y = floorPos_y;
            gameChar_x = width / 2;
            isPlummeting = false;
        }

    }

}