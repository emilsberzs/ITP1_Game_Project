//GAME PROJECT PART 7:Make it Awesome. Coursework final submission.


//GLOBAL VARIABLES
var gameChar_x;
var gameChar_y;
var floorPos_y;
var cameraPosX;
var game_score;
var lives;
var flagpole;
var trees_x;
var mountains;
var clouds;
var canyons
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
//AUDIO
var jumpSound;
var collectCoinSound;
var winSound;
var fallingSound;
var loseGameSound;
var contactSound;
var backgroundMusic;
var hasPlayedFallingSound;
var hasPlayedWinSound;
var hasPlayedContactSound;

//PLATFORMS
var platforms;
var isContact;

//ENEMIES
var enemies;


function preload() {
    soundFormats('mp3', 'wav');

    //JUMP
    jumpSound = loadSound('assets/jump.wav');
    jumpSound.setVolume(0.5);

    //COLLECTABLEs
    collectCoinSound = loadSound('assets/coin.wav');
    collectCoinSound.setVolume(0.7);

    //WIN
    winSound = loadSound('assets/win.wav');
    winSound.setVolume(0.5);

    //PLUMMET
    fallingSound = loadSound('assets/falling.wav');
    fallingSound.setVolume(0.3);

    //BACKGROUND
    backgroundMusic = loadSound('assets/background.wav');
    backgroundMusic.setVolume(0.1);

    //ENEMY CONTACT
    contactSound = loadSound('assets/ouch.wav');
    contactSound.setVolume(0.5);
}


function setup() {
    createCanvas(1024, 576);
    floorPos_y = height * 3 / 4;
    lives = 3;
    hasPlayedFallingSound = false;
    hasPlayedWinSound = false;
    hasPlayedContactSound = false;
    isContact = false;
    startGame();

}

//MY OWN CODE START


function draw() {
    var a = [0];

    for (var i = 0; i < 100; i++) {
        a.push(a[0] + 1);
    }



    //SKY
    background(100, 155, 255);
    cameraPosX = gameChar_x - width / 2;

    //GROUND
    noStroke();
    fill(0, 125, 0);
    rect(0, floorPos_y, width, height - floorPos_y);

    //SIDESCROLL START
    push();
    translate(-cameraPosX, 0);


    drawMountains();
    drawClouds();
    drawTrees();
    renderFlagpole();
    checkFlagpole();
    checkPlayerDie();
    drawPlatforms();


    //COLLECTABLE DRAW AND CHECK
    for (i = 0; i < collectables.length; i++) {
        drawCollectable(collectables[i]);
        checkCollectable(collectables[i]);
    }

    //CANYON DRAW AND CHECK
    for (i = 0; i < canyons.length; i++) {
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
    }



    //CHARACTER
    drawCharacter()

    //ENEMIES
    drawEnemies()

    pop();

    //LIFE TOKENS
    drawLifeTokens()

    //GAME OVER
    if (lives < 1) {
        textSize(40);
        stroke(255, 0, 0);
        fill(255, 0, 0);
        text("Game over. Press space to restart.", width / 2 - 300, height / 2, width, height);
        return;
    }

    //GAME WON
    if (flagpole.isReached) {
        textSize(40);
        stroke(0);
        fill(0, 200, 0);
        text("Level complete. Press space to play again.", width / 2 - 350, height / 2, width, height);
        return;
    }

    //Falling
    if (gameChar_y < floorPos_y) {

        for (var i = 0; i < platforms.length; i++) {
            if (platforms[i].checkPlatformContact(gameChar_x, gameChar_y) == true) {
                isContact = true;
                gameChar_y = platforms[i].y - 1
                isFalling = false;
                break;
            } else {
                isContact = false;
            }
        }
        if (!isContact) {
            isFalling = true;
            gameChar_y += 3;

        }

    } else if (isContact) {
        gameChar_y = floorPos_y - 100
        isFalling = false;

    } else {
        isFalling = false;
    }



    ///////////INTERACTION CODE//////////
    //Conditional statements to move the game character

    //Move Left
    if (isLeft) {
        gameChar_x -= 4;
    }

    //Move right
    if (isRight) {
        gameChar_x += 4;
    }


    //SCORE
    keepScore()
}

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

function drawLifeTokens() {
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

//TREES
function drawTrees() {
    for (i = 0; i < trees_x.length; i++) {
        //trunk
        fill(255);
        rect(trees_x[i], trees_y - 52, 15, 52);
        stroke(0);
        strokeWeight(1);
        line(trees_x[i], trees_y, trees_x[i] + 10, trees_y);
        line(trees_x[i], trees_y - 7, trees_x[i] + 15, trees_y - 7);
        line(trees_x[i] + 5, trees_y - 13, trees_x[i] + 15, trees_y - 13);
        line(trees_x[i] + 5, trees_y - 18, trees_x[i] + 10, trees_y - 18);
        line(trees_x[i], trees_y - 23, trees_x[i] + 15, trees_y - 23);
        line(trees_x[i], trees_y - 28, trees_x[i] + 5, trees_y - 28);
        line(trees_x[i] + 5, trees_y - 33, trees_x[i] + 15, trees_y - 33);
        line(trees_x[i], trees_y - 38, trees_x[i] + 15, trees_y - 38);
        line(trees_x[i] + 5, trees_y - 43, trees_x[i] + 10, trees_y - 43);

        //crown
        fill(0, 155, 23);
        noStroke();
        ellipse(trees_x[i] + 7.5, trees_y - 82, 40, 70);
        ellipse(trees_x[i] + 25.5, trees_y - 84, 32, 51);
        ellipse(trees_x[i] - 9.5, trees_y - 84, 32, 51);
    }


}

//MOUNTAINS
function drawMountains() {
    for (i = 0; i < mountains.length; i++) {
        fill(145, 142, 133);
        triangle(mountains[i].x_pos, floorPos_y, mountains[i].x_pos + mountains[i].width,
            floorPos_y, mountains[i].x_pos + (mountains[i].width) / 2, floorPos_y - mountains[i].height);

        triangle(mountains[i].x_pos + mountains[i].width / 1.5,
            floorPos_y, mountains[i].x_pos + mountains[i].width + mountains[i].width / 1.5, floorPos_y,
            mountains[i].x_pos + (mountains[i].width) / 2 + mountains[i].width / 1.5,
            floorPos_y - mountains[i].height / 1.3);

        triangle(mountains[i].x_pos + mountains[i].width / 2.5, floorPos_y,
            mountains[i].x_pos + mountains[i].width + mountains[i].width / 2.5, floorPos_y,
            mountains[i].x_pos + (mountains[i].width) / 2 + mountains[i].width / 2.5, floorPos_y - mountains[i].height / 0.9);
    }
}

//CLOUDS
function drawClouds() {
    for (i = 0; i < clouds.length; i++) {
        fill(220);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size, clouds[i].size / 2);
        ellipse(clouds[i].x_pos + (clouds[i].size / 6), clouds[i].y_pos - (clouds[i].size / 5),
            clouds[i].size, clouds[i].size / 2);
        ellipse(clouds[i].x_pos + (clouds[i].size / 3), clouds[i].y_pos,
            clouds[i].size, clouds[i].size / 2);
    }

}




//COLLECTABLES
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

//CANYON
function drawCanyon(t_canyon) {
    noStroke();
    fill(100, 155, 255);
    rect(t_canyon.x_pos, floorPos_y, t_canyon.width, height - floorPos_y);
    fill(255, 0, 0);
    rect(t_canyon.x_pos, floorPos_y + 150, t_canyon.width, height - floorPos_y - 160);
}


//CHECK COLLECTABLES
function checkCollectable(t_collectable) {
    if (dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < t_collectable.size && t_collectable.isFound == false) {
        collectCoinSound.play();
        t_collectable.isFound = true;
        game_score++;
    }
}

//CHECK CANYON
function checkCanyon(t_canyon) {
    var current_x = gameChar_x
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

//RENDER FLAGPOLE
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

//CHECK FLAGPOLE
function checkFlagpole() {
    if (gameChar_x > flagpole.x_pos) {
        flagpole.isReached = true;
        if (!hasPlayedWinSound) {
            winSound.play();
            hasPlayedWinSound = true;
        }
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

//START GAME
function startGame() {
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;
    cameraPosX = 0;
    game_score = 0;
    trees_y = 432;
    backgroundMusic.stop();
    backgroundMusic.loop();



    //FLAGPOLE
    flagpole = {
        x_pos: 2000,
        isReached: false
    }

    tokens = {
        x_pos: width,
        y_pos: 70
    }

    //CHARACTER 
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;


    //COLLECTABLES ARRAY
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


    //CANYONS ARRAY:x position and width of canyons
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


    //TREES ARRAY:x position of trees
    trees_x = [100, 350, 700, 900, 1800, 2300, 2400, 2900, 3000, 3050, 3400];

    //CLOUDS: y position, x position and size of clouds.
    clouds = [
        {
            x_pos: 150,
            y_pos: 200,
            size: 120
        },
        {
            x_pos: 550,
            y_pos: 150,
            size: 80
        },
        {
            x_pos: 1000,
            y_pos: 100,
            size: 150
        },
        {
            x_pos: 1250,
            y_pos: 200,
            size: 130
        },
        {
            x_pos: 1450,
            y_pos: 150,
            size: 80
        },
        {
            x_pos: 2000,
            y_pos: 100,
            size: 150
        },
        {
            x_pos: 2300,
            y_pos: 130,
            size: 120
        },
        {
            x_pos: 3100,
            y_pos: 200,
            size: 70
        },
        {
            x_pos: 3250,
            y_pos: 150,
            size: 80
        },
        {
            x_pos: 3600,
            y_pos: 200,
            size: 120
        },

    ]

    //MOUNTAINS:position, height and width of mountains
    mountains = [
        {
            x_pos: 150,
            height: 100,
            width: 120
        },
        {
            x_pos: 450,
            height: 250,
            width: 150
        },
        {
            x_pos: 1700,
            height: 200,
            width: 200
        },
        {
            x_pos: 2350,
            height: 190,
            width: 100
        },
        {
            x_pos: 2800,
            height: 270,
            width: 230
        },
        {
            x_pos: 3000,
            height: 300,
            width: 250
        }
    ]

    //Platforms
    platforms = [];
    platforms.push(createPlatforms(1000, floorPos_y - 50, 100));
    platforms.push(createPlatforms(1100, floorPos_y - 100, 100));
    platforms.push(createPlatforms(1200, floorPos_y - 150, 100));
    platforms.push(createPlatforms(1300, floorPos_y - 200, 100));
    platforms.push(createPlatforms(1325, floorPos_y - 300, 50));
    platforms.push(createPlatforms(1500, floorPos_y - 35, 100));

    //Enemies
    enemies = [];

    makeEnemies()






}


function createPlatforms(x, y, length) {
    var p = {
        x: x,
        y: y,
        length: length,
        draw: function () {
            fill(145, 142, 133);
            rect(this.x, this.y, this.length, 30, 40);
            fill(0, 125, 0);
            rect(this.x, this.y, this.length, 14);
        },
        checkPlatformContact: function (gc_x, gc_y) {
            if (gc_x + 10 > this.x && gc_x - 10 < this.x + this.length) {
                var d = this.y - gc_y;
                if (d >= 0 && d < 3) {
                    return true;
                }
            }
            return false;
        }
    }
    return p;
}

function drawPlatforms() {
    for (var i = 0; i < platforms.length; i++) {
        platforms[i].draw();

    }
}

function Enemy(x, y, range) {
    this.x = x;
    this.y = y;
    this.currentY = y;
    this.currentX = x;
    this.range = range;
    this.inc = 1;

    this.update = function () {
        this.currentX += this.inc;

        if (this.currentX >= this.x + this.range) {
            this.inc = -1;
        }
        else if (this.currentX < this.x) {
            this.inc = 1;
        }
    }
    this.draw = function () {
        this.update();
        fill(255, 0, 0);
        push(); // Save  state
        translate(this.currentX, this.y);
        rotate(frameCount * 0.02); // Rotate the cross
        rectMode(CENTER);
        rect(0, 0, 20, 4);

        // Draw vertical line
        rect(0, 0, 4, 20);

        pop(); // Restore state



    }

    this.checkContact = function (gc_x, gc_y) {
        var d = dist(gc_x, gc_y, this.currentX, this.y)

        if (d < 15) {
            if (!hasPlayedContactSound && !flagpole.isReached) {
                contactSound.play()
                hasPlayedContactSound = true;

            };
            return true;
        }
        return false;
    }
}

function makeEnemies() {
    //ON ALL GROUND BLOCKS EXCEPT STARTING POSITION
    for (var i = 0; i < canyons.length - 1; i++) {
        if (i != 2) {
            enemies.push(new Enemy(canyons[i].x_pos + canyons[i].width, floorPos_y - 10, canyons[i + 1].x_pos - (canyons[i].x_pos + canyons[i].width)))
        }
    }

    //ON EVERY OTHER PLATFORM
    for (var i = 0; i < platforms.length; i++) {
        if (i % 2 == 1)
            enemies.push(new Enemy(platforms[i].x, platforms[i].y - 10, platforms[i].length))

    }

}

function drawEnemies() {
    for (var i = 0; i < enemies.length; i++) {
        enemies[i].draw();
        var isEnemyContact = enemies[i].checkContact(gameChar_x, gameChar_y);
        if (isEnemyContact && !flagpole.isReached) {
            if (lives > 0) {
                gameChar_y = floorPos_y;
                gameChar_x = width / 2;
                lives -= 1;

                hasPlayedContactSound = false;
                break;
            }
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
//MY OWN CODE END//