/*
    Pulp Fiction Game Adapatation
    by: David Amaya

    CMPM 120, Spring 2023
    This is a game adaptation for the film Pulp Fiction that I made
    for a final project.


    Major Phaser components used:
        - Arcade Physics for collision detection
        - Text objects w/ typewriter effect for character lines
        - Animation manager for dancing GIF and heart animation
        - Timers to trigger events

*/




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
    scene: [ Menu, Dance, Transition, Drive, Adrenaline, Credits ]
};

const game = new Phaser.Game(config);

// global vars
let centerX = game.config.width/2;
let centerY = game.config.height/2;
let w = game.config.width;
let h = game.config.height;

// define keys
let keyW, keyA, keyS, keyD

// scene tracker
let gameOver = false;
let nScene = -1;
let sceneArr = ['scene1', 'scene2', 'scene3']
let danceWin = true;

// music for scene 1
let danceMusic;
let panicMusic;