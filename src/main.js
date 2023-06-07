// honesty is the best policy
'use strict';

// game config
let config = {
    type: Phaser.CANVAS,
    width: 960,
    height: 640,
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    // backgroundColor: '#40372e',
    physics: {
        default: 'arcade',
        arcade: {
            // debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ Menu, Dance, DanceWin, Adrenaline ]
};

const game = new Phaser.Game(config);

// global vars
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;

// define keys
let keyW, keyA, keyS, keyD