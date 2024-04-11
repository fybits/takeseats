
const process = require('process');
const fs = require('fs')

const WIDTH = 6400;
const HEIGHT = 4480;

const COLS = 8;
const ROWS = 4;

const frames = {}

for (let j = 0; j < ROWS; j++) {
    for (let i = 0; i < COLS; i++) {
        frames[`card${j * ROWS + i + 1}`] = {
            frame: { x: WIDTH / COLS * i, y: HEIGHT / ROWS * j, w: WIDTH / COLS, h: HEIGHT / ROWS },
            sourceSize: { w: WIDTH / COLS, h: HEIGHT / ROWS },
            spriteSourceSize: { x: 0, y: 0, w: WIDTH / COLS, h: HEIGHT / ROWS }
        }
    }
}

const content = {
    frames,
    "animations": {
    },
    "meta": {
        "app": "http://www.codeandweb.com/texturepacker",
        "version": "1.0",
        "image": "spritesheet.jpg",
        "format": "RGBA8888",
        "size": {
            "w": 6400,
            "h": 4480
        },
    }
}

fs.writeFile('./spritesheet.json', JSON.stringify(content, null, 2), console.log);