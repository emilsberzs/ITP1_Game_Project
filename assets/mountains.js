
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
