class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    preload() {
        // loadpath
        this.load.path = 'assets/';
        // load sprite(s)
        // scene 1 assets
        this.load.spritesheet('arrow', 'arrows.png', {frameWidth: 256, frameHeight: 256});
        this.load.spritesheet('rainbowNote', 'rainbowNotes.png', {frameWidth: 256, frameHeight: 256});
        this.load.image('square', 'square.png');
        this.load.image('note', 'note.png');
        this.load.image('scribbleNote', 'scribbleNote.png');
        // dance gif
        this.load.spritesheet('pulpDance', 'pulp dance.png', {frameWidth: 498, frameHeight: 324});
        // scene 3 assets
        this.load.spritesheet('heart', 'scribbleHeart.png', {frameWidth: 256, frameHeight: 256});
        this.load.image('cross', 'crosshair.png');

        // load bgm
        this.load.audio('music', 'Chuck Berry.mp3');
        this.load.audio('tenseMusic', 'Escape Chase.mp3');
    }

    create() {
        // menu text
        this.add.text(centerX, centerY - 50, "This is the Menu").setOrigin(0.5);
        this.add.text(centerX, centerY + 50, "Press SPACE to continue").setOrigin(0.5);

        // keys
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // music for scene 1
        danceMusic = this.sound.add('music', {volume: 0.2});
        panicMusic = this.sound.add('tenseMusic', {volume: 0.1});
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            this.scene.start('scene1');
        }
    }
}