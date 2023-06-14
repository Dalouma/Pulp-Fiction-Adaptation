class Credits extends Phaser.Scene {
    constructor() {
        super('creditsScene')
    }

    create() {
        // vars
        this.textStart = 70;

        // top text
        this.add.text(centerX, 30, 'Credits', {fontSize: '40px'}).setOrigin(0.5);

        // credits
        this.add.text(centerX, this.textStart, 'Music', {fontSize: '28px'}).setOrigin(0.5);
        this.add.text(centerX, this.textStart+=30, 'Chuck Berry - You Can Never Tell (1964)').setOrigin(0.5);
        this.add.text(centerX, this.textStart+=30, 'David Fesliyan - Escape Chase (2019)').setOrigin(0.5);
        this.add.text(centerX, this.textStart+=40, 'ART', {fontSize: '28px'}).setOrigin(0.5);
        this.add.text(centerX, this.textStart+=30, 'Dance GIF: Pinterest/Tenor').setOrigin(0.5);
        this.add.text(centerX, this.textStart+=40, 'SFX', {fontSize: '28px'}).setOrigin(0.5);
        this.add.text(centerX, this.textStart+=30, 'freesound.org :').setOrigin(0.5);
        this.add.text(centerX, this.textStart+=30, 'User: \"FeliUsers\"').setOrigin(0.5);
        this.add.text(centerX, this.textStart+=30, 'User: \"JustInvoke\"').setOrigin(0.5);
        this.add.text(centerX, this.textStart+=30, 'User: \"dslrguide\"').setOrigin(0.5);


        // bottom text
        this.add.text(centerX, h-20, 'Press SPACE to return to Menu').setOrigin(0.5);

        // keys
        this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(this.keySPACE)) {
            this.scene.start('menuScene');
        }
    }
}