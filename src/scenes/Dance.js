class Dance extends Phaser.Scene {
    constructor() {
        super('scene1');
    }

    create() {
        // config
        this.noteVelocity = 400;
        this.noteDelay = 760;
        this.lives = 4;
        this.notesToFinish = 50;

        // variables
        this.gifSpawned = false;
        this.spacing = 50;
        this.lineHeight = h - 100;
        this.spawnedNotes = 0;
        this.laneX = 
        [centerX - 3 * this.spacing, 
         centerX - this.spacing,
         centerX + this.spacing,
         centerX + 3 * this.spacing]
        this.dropping = false;
        this.notesDropped = 0;

        // change bg color
        this.cameras.main.setBackgroundColor('#cf8b42')

        // temp text
        // this.add.text(centerX, 20, "scene 1: dance competition").setOrigin(0.5);

        // dance gif
        this.anims.create({
            key: 'danceGIF',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('pulpDance', {
                start: 0,
                end: 5
            })
        });
        
        // add arrows
        this.add.sprite(this.laneX[0], h - 50, 'arrow', 0).setScale(0.2);
        this.add.sprite(this.laneX[1], h - 50, 'arrow', 1).setScale(0.2);
        this.add.sprite(this.laneX[2], h - 50, 'arrow', 2).setScale(0.2);
        this.add.sprite(this.laneX[3], h - 50, 'arrow', 3).setScale(0.2);

        // add a line
        this.add.line(0,0, centerX-this.spacing*4,this.lineHeight, centerX+this.spacing*4,this.lineHeight, 0x000).setOrigin(0);

        // add player
        this.player = this.add.sprite(-100, h - 125, 'square');
        this.physics.add.existing(this.player);
        this.player.body.setImmovable(true);

        // make note group
        this.noteGroup = this.add.group({
            runChildUpdate: true
        })

        // player-note collision handling
        this.physics.add.collider(this.player, this.noteGroup, (player,note) => {
            note.destroy();
            this.notesDropped++;
            if(this.notesDropped > this.notesToFinish){
                this.nextScene();
            }
        })
        
        // set cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    startDropping() {
        if(this.dropping == false) {
            this.dropping = true;
            danceMusic.play();
            this.time.delayedCall(2700, () => {this.addNote(this.noteDelay);});
        }
    }

    addNote(delay) {
        let nextDelay = delay;
        if(!this.gifSpawned && this.notesDropped == 16){
            this.add.sprite(centerX, centerY, 'danceGIF', 0).play('danceGIF')
        }

        let nColor = Phaser.Math.Between(0,6);
        let nLane = Phaser.Math.Between(0,3);
        let newNote = new Note(this, this.laneX[nLane], 0, this.noteVelocity, nColor);
        newNote.setScale(0.3);
        this.noteGroup.add(newNote);
        this.time.delayedCall(nextDelay, () => {this.addNote(nextDelay);} );
    }

    nextScene(){
        this.scene.start('transitionScene');
    }

    update() {
        // player control
        if(this.cursors.left.isDown || keyA.isDown) {
            this.startDropping();
            this.player.setX(this.laneX[0])
        }
        if(this.cursors.right.isDown || keyD.isDown) {
            this.startDropping();
            this.player.setX(this.laneX[3])
        }
        if(this.cursors.up.isDown || keyW.isDown) {
            this.startDropping();
            this.player.setX(this.laneX[2])
        }
        if(this.cursors.down.isDown || keyS.isDown) {
            this.startDropping();
            this.player.setX(this.laneX[1])
        }

        // check fail
        if(this.lives == 0) {
            danceWin = false;
            this.nextScene();
        }

    }
}