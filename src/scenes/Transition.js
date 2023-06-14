class Transition extends Phaser.Scene {
    constructor() {
        super('transitionScene');
    }
    
    create() {
        // temp text
        // this.add.text(centerX, 20, 'transition scene').setOrigin(0.5);


        // centered text
        this.centerText = this.add.text(centerX, centerY, '').setOrigin(0.5,0);

        // pre scene 1
        this.miaLine = 'I do believe Marsellus, my husband, your boss,\n told you to take ME out and do WHATEVER I WANTED.\n Now I wanna dance, I wanna win. I want that trophy,\n so dance good.';
        if(nScene == -1){
            this.centerText.text = 'Mia: '
            this.typewriteText(this.miaLine, this.centerText)
        }

        // post scene 1
        this.s1d1 = 'You\'re a pretty good dancer...';
        this.s1d2 = 'Hahaha, you\'re terrible at dancing. Were you even trying?';
        if(nScene == 0){
            this.centerText.text = 'Mia: '
            if(danceWin){
                this.typewriteText(this.s1d1, this.centerText)
            }else{
                this.typewriteText(this.s1d2, this.centerText)
            }
        }


        // post scene 2
        this.s2d1 = 'I made it. Gotta find a way to save her quick!';
        if(nScene == 1){
            this.centerText.text = 'Vincent: '
            this.typewriteText(this.s2d1, this.centerText)
        }


        this.time.delayedCall(3000, () => {
            this.add.text(centerX, h - 25, 'press SPACE to continue').setOrigin(0.5);
        })

        // keyboard
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    /*
        I got this from:
        https://blog.ourcade.co/posts/2020/phaser-3-typewriter-text-effect-bitmap/
    */
    typewriteText(text, label) {
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                label.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: 60
        })
    }

    update() {
        // trigger next scene on space
        if(Phaser.Input.Keyboard.JustDown(this.cursors.space) && !gameOver) {
            // increment scene number
            nScene++;
            danceMusic.stop();
            this.scene.start(sceneArr[nScene])
        }
    }
}