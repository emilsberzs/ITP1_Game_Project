enemies = []

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
