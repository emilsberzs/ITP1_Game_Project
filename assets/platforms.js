//Platforms

//Platforms

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