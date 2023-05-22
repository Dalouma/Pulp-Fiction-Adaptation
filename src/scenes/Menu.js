class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene');
    }

    create() {
        this.add.text(centerX, centerY, "This is the Menu").setOrigin(0.5);
    }
}