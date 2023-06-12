class DanceWin extends Phaser.Scene {
    constructor() {
        super('scene1.1');
    }
    
    create() {
        this.add.text(centerX, centerY, 'You\'re a pretty good dancer...').setOrigin(0.5);
        this.time.delayedCall(3000, () => {
            this.add.text(centerX, h - 25, 'press SPACE to continue').setOrigin(0.5);
        })

        // keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // trigger next scene on space
        if(Phaser.Input.Keyboard.JustDown(this.cursors.space)) {
            this.scene.start('scene2')
        }
    }
}