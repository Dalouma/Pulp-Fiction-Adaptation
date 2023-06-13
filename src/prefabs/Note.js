class Note extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, v, f) {
        super(scene, x, y, 'rainbowNote', f);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // customize body
        this.body.setSize(100, 200);

        // maintain scene context
        this.parentScene = scene;

        // properties
        this.body.setVelocity(0, v);
    }

    update() {
        if(this.y > h + 50){
            // console.log('note destroyed')
            this.destroy();
            this.parentScene.lives--;
        }
    }

}