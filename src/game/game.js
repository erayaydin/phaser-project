// Initialize Phaser Game object
var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

// Add States
game.state.add('Boot', AppName.Boot);
game.state.add('Preloader', AppName.Preloader);
game.state.add('Menu', AppName.Menu);
game.state.add('Game', AppName.Game);

// Run first state
game.state.start('Boot');