var AppName = {};

AppName.Boot = function(game) {};

AppName.Boot.prototype = {
    preload: function() {
        this.load.image('preloadBar', 'img/loader_bar.png');
        this.load.image('logo', 'img/logo.png');
    },
    create: function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.minWidth  = 800;
        this.scale.minHeight = 600;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically   = true;
        this.stage.forcePortrait = true;
        this.scale.setScreenSize(true);

        this.stage.backgroundColor = '#171642';

        this.state.start('Preloader');
    }
};