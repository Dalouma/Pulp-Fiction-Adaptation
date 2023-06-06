class Adrenaline extends Phaser.Scene {
    constructor() {
        super('scene3');
    }

    create() {
        // temp text
        this.add.text(centerX, 50, "scene 3: adrenaline shot").setOrigin(0.5);

        // create animations
        this.anims.create({
            key: 'heartbeat',
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('heart', {
                start: 0,
                end: 3
            })
        });

        // add beating heart
        this.heart = this.add.sprite(centerX, centerY, 'heartbeat').play('heartbeat').setScale(0.25);
        this.physics.add.existing(this.heart);
        this.heart.body.setCircle(this.heart.width/2, 0, -16);
    }
}