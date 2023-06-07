class Adrenaline extends Phaser.Scene {
    constructor() {
        super('scene3');
    }

    create() {
        // variables
        this.speed = 500;
        this.movespeed = 300;
        this.crosshairAlive = true;

        // temp text
        this.add.text(centerX, 20, "scene 3: adrenaline shot").setOrigin(0.5);

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
        this.heart = this.add.sprite(centerX, centerY, 'heartbeat').play('heartbeat').setScale(0.30);
        this.physics.add.existing(this.heart);
        this.heart.body.setCircle(this.heart.width/2, 0, -16);

        // add crosshair
        this.crosshair = this.add.sprite(centerX, centerY, 'cross').setScale(0.2);
        this.physics.add.existing(this.crosshair);
        this.crosshair.body.setSize(10,10).setBoundsRectangle(null);
        /*
            Note to future self:
            I can set the bounds of where it can go too
        */

        // set cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        // check hit
        this.physics.add.overlap(this.heart, this.crosshair, () => {
            if(Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
                this.hit();
            }
        })

    }

    update() {
        if(this.crosshairAlive) {
            // erratic cursor movement
            let vX = Phaser.Math.Between(-this.speed, this.speed);
            let vY = Phaser.Math.Between(-this.speed, this.speed);
            this.crosshair.body.setVelocity(vX, vY);

            // player control over cursor
            if(this.cursors.left.isDown || keyA.isDown) {
                this.crosshair.body.setVelocityX(this.crosshair.body.velocity.x - this.movespeed)
            } else if(this.cursors.right.isDown || keyD.isDown) {
                this.crosshair.body.setVelocityX(this.crosshair.body.velocity.x + this.movespeed)
            }
            if(this.cursors.up.isDown || keyW.isDown) {
                this.crosshair.body.setVelocityY(this.crosshair.body.velocity.y - this.movespeed)
            } else if(this.cursors.down.isDown || keyS.isDown) {
                this.crosshair.body.setVelocityY(this.crosshair.body.velocity.y + this.movespeed)
            }
        }

    }

    hit() {
        this.add.text(centerX, centerY + 100, 'You saved her').setOrigin(0.5);
        this.crosshairAlive = false;
        this.crosshair.destroy();
        // add delay callback to move to next scene?
    }

}