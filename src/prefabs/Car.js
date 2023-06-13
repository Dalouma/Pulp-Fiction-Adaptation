class Car extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, v, f) {
        super(scene, x, y, 'square', f);
        scene.add.existing(this);
        scene.physics.add.existing(this);

        // customize body
        this.body.setSize(32, 32);

        // maintain scene context
        this.parentScene = scene;

        // properties
        this.body.setVelocity(0, v);
    }

    update() {
        if(this.y > h + 50){
            this.destroy();
        }
    }

}