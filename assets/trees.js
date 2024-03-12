trees_x = [100, 350, 700, 900, 1800, 2300, 2400, 2900, 3000, 3050, 3400];

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