AppName.Menu = function(game) {
    this.menuBackground;
    this.touchToStart;
};

AppName.Menu.prototype = {

    create: function() {
        menuBackground = this.add.image(0, 0, "menu-background");
        menuBackground.inputEnabled = true;
        menuBackground.events.onInputDown.addOnce(this.startGame, this);

        touchToStart = this.add.text(this.world.centerX-155, this.world.centerY+180, 'Touch to Start!', { fill: '#000000' })
    },

    startGame: function(pointer){
        this.state.start("Game");
    }

};