class Dance extends Phaser.Scene {
    constructor() {
        super('scene1');
    }

    create() {
        // variables
        this.spacing = 50;
        this.lineHeight = h - 100;
        this.spawnedNotes = 0;
        this.laneX = 
        [centerX - 3 * this.spacing, 
         centerX - this.spacing,
         centerX + this.spacing,
         centerX + 3 * this.spacing]
        this.noteVelocity = 400;
        this.noteDelay = 1000;
        this.notesDropped = 0;

        // change bg color
        this.cameras.main.setBackgroundColor('#cf8b42')

        // temp text
        this.add.text(centerX, 20, "scene 1: dance competition").setOrigin(0.5);
        
        // add arrows
        this.add.sprite(this.laneX[0], h - 50, 'arrow', 0).setScale(0.2);
        this.add.sprite(this.laneX[1], h - 50, 'arrow', 1).setScale(0.2);
        this.add.sprite(this.laneX[2], h - 50, 'arrow', 2).setScale(0.2);
        this.add.sprite(this.laneX[3], h - 50, 'arrow', 3).setScale(0.2);

        // add a line
        this.add.line(0,0, centerX-this.spacing*4,this.lineHeight, centerX+this.spacing*4,this.lineHeight, 0x000).setOrigin(0);

        // add player square
        this.player = this.add.sprite(this.laneX[0], h - 125, 'square');
        this.physics.add.existing(this.player);
        this.player.body.setImmovable(true);

        // make note group
        this.noteGroup = this.add.group({
            runChildUpate: true
        })

        // player-note collision handling
        this.physics.add.collider(this.player, this.noteGroup, (player,note) => {
            note.destroy();
        })

        // start note recursion
        this.addNote(this.noteDelay);
        
        // set cursor keys
        this.cursors = this.input.keyboard.createCursorKeys();
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    addNote(delay) {
        let nextDelay = delay;
        if(this.notesDropped == 16){
            nextDelay = 500;
        }

        let nColor = Phaser.Math.Between(0,6);
        let nLane = Phaser.Math.Between(0,3);
        let newNote = new Note(this, this.laneX[nLane], 0, this.noteVelocity, nColor).setScale(0.3);
        this.noteGroup.add(newNote);
        this.time.delayedCall(nextDelay, () => {this.addNote(nextDelay);} );
        this.notesDropped++;
    }

    nextScene(){

    }

    update() {
        // player control
        if(Phaser.Input.Keyboard.JustDown(this.cursors.left)) {
            this.player.setX(this.laneX[0])
        } else if(this.cursors.right.isDown || keyD.isDown) {
            this.player.setX(this.laneX[3])
        }
        if(this.cursors.up.isDown || keyW.isDown) {
            this.player.setX(this.laneX[2])
        } else if(this.cursors.down.isDown || keyS.isDown) {
            this.player.setX(this.laneX[1])
        }

    }
}