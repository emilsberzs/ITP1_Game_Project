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