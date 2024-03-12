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
    jumpSound = loadSound('assets/audio/jump.wav');
    jumpSound.setVolume(0.5);

    //COLLECTABLEs
    collectCoinSound = loadSound('assets/audio/coin.wav');
    collectCoinSound.setVolume(0.7);

    //WIN
    winSound = loadSound('assets/audio/win.wav');
    winSound.setVolume(0.5);

    //PLUMMET
    fallingSound = loadSound('assets/audio/falling.wav');
    fallingSound.setVolume(0.3);

    //BACKGROUND
    backgroundMusic = loadSound('assets/audio/background.wav');
    backgroundMusic.setVolume(0.1);

    //ENEMY CONTACT
    contactSound = loadSound('assets/audio/ouch.wav');
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


    tokens = {
        x_pos: width,
        y_pos: 70
    }

    //CHARACTER 
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;





    //Platforms
    platforms = [];
    platforms.push(createPlatforms(1000, floorPos_y - 50, 100));
    platforms.push(createPlatforms(1100, floorPos_y - 100, 100));
    platforms.push(createPlatforms(1200, floorPos_y - 150, 100));
    platforms.push(createPlatforms(1300, floorPos_y - 200, 100));
    platforms.push(createPlatforms(1325, floorPos_y - 300, 50));
    platforms.push(createPlatforms(1500, floorPos_y - 35, 100));


    makeEnemies()






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