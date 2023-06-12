class Drive extends Phaser.Scene {
    constructor() {
        super('scene2')
    }

    create() {
        // variables
        this.spacing = 50;
        this.lineHeight = h - 100;
        this.currentLane = 1;

        // lane spacing
        this.laneX = 
        [centerX - 3 * this.spacing, 
         centerX - this.spacing,
         centerX + this.spacing,
         centerX + 3 * this.spacing]

        // change bg color
        this.cameras.main.setBackgroundColor('#050517')

        // temp text
        this.add.text(centerX, 20, "scene 2: emergency drive").setOrigin(0.5);

        // add a line
        // this.add.line(0,0, centerX-this.spacing*4,this.lineHeight, centerX+this.spacing*4,this.lineHeight, 0x000).setOrigin(0);
        
        // add arrows
        // this.add.sprite(this.laneX[0], h - 50, 'arrow', 0).setScale(0.2);
        // this.add.sprite(this.laneX[1], h - 50, 'arrow', 1).setScale(0.2);
        // this.add.sprite(this.laneX[2], h - 50, 'arrow', 2).setScale(0.2);
        // this.add.sprite(this.laneX[3], h - 50, 'arrow', 3).setScale(0.2);

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
        this.heart = this.add.sprite(this.laneX[this.currentLane], h - 40, 'heartbeat');
        this.heart.play('heartbeat').setScale(0.2);
        this.physics.add.existing(this.heart);
        this.heart.body.setCircle(this.heart.width/2, 0, -16);
        
        // set cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    shiftLeft() {
        if(this.currentLane > 0) {
            this.currentLane--;
            this.heart.setX(this.laneX[this.currentLane])
        }
    }

    shiftRight() {
        if(this.currentLane < 3) {
            this.currentLane++;
            this.heart.setX(this.laneX[this.currentLane])
        }
    }

    update() {
        // player control
        if(Phaser.Input.Keyboard.JustDown(this.cursors.left) || Phaser.Input.Keyboard.JustDown(keyA)) {
            this.shiftLeft();
        }
        if(Phaser.Input.Keyboard.JustDown(this.cursors.right) || Phaser.Input.Keyboard.JustDown(keyD)) {
            this.shiftRight();
        }

    }
}