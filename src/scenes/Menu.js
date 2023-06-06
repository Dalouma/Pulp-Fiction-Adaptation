class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    preload() {
        // loadpath
        this.load.path = 'assets/';
        // load sprite(s)
        this.load.spritesheet('heart', 'scribbleHeart.png', {frameWidth: 256, frameHeight: 256});
        this.load.image('cross', 'crosshair.png');

    }

    create() {
        // menu text
        this.add.text(centerX, centerY - 50, "This is the Menu").setOrigin(0.5);
        this.add.text(centerX, centerY + 50, "Press SPACE to continue").setOrigin(0.5);

        // keys
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            this.scene.start('scene3');
        }
    }
}