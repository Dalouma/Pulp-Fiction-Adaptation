class Transition extends Phaser.Scene {
    constructor() {
        super('transitionScene');
    }
    
    create() {

        // temp text
        this.add.text(centerX, 20, 'transition scene').setOrigin(0.5);


        // centered text
        this.centerText = this.add.text(centerX, centerY, '').setOrigin(0.5);

        // post scene 1
        this.s1d1 = 'You\'re a pretty good dancer...';
        if(nScene == 0){
            this.typewriteText(this.s1d1, this.centerText)
        }


        // post scene 2
        if(nScene == 1){
            this.add.text(centerX, centerY, 'I made it. Gotta find a way to save her quick!').setOrigin(0.5);
        }






        this.time.delayedCall(3000, () => {
            this.add.text(centerX, h - 25, 'press SPACE to continue').setOrigin(0.5);
        })

        // keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    typewriteText(text, label) {
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                label.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: 50
        })
    }

    update() {
        // trigger next scene on space
        if(Phaser.Input.Keyboard.JustDown(this.cursors.space) && !gameOver) {
            // increment scene number
            nScene++;
            this.scene.start(sceneArr[nScene])
        }
    }
}