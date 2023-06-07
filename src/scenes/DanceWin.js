class DanceWin extends Phaser.Scene {
    constructor() {
        super('scene1.1');
    }
    
    create() {
        this.add.text(centerX, centerY, 'You\'re a pretty good dancer...').setOrigin(0.5);
        this.time.delayedCall(3000, () => {
            this.scene.start('scene3');
        })
    }

    update() {

    }
}