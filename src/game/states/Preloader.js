AppName.Preloader = function(game) {
    this.preloadBar = null;
    this.title  = null;
    this.done  = false;
};

AppName.Preloader.prototype = {

    preload: function() {
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloadBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.load.setPreloadSprite(this.preloadBar);

        this.title = this.add.image(this.world.centerX, this.world.centerY-220, 'logo');
        this.title.anchor.setTo(0.5, 0.5);

        this.load.image('menu-background', 'img/menu-background.jpg');
    },

    create: function() {
        this.preloadBar.cropEnabled = false;
    },

    update: function() {
        this.done = true;
        this.state.start('Menu');
    }

};