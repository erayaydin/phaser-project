## Phaser Project Template

Its a ready and simple project template for your next [Phaser](http://phaser.io) game.

### Features

- **Gruntfile.js** for all your game scripts to one file, also with `watch` , its automaticly re-compile.
- **Package.json** for initialize your npm package and set dependencies.
- **States**
- **Objects**
- **Libraries**, like Phaser.

### Setting up This Project Template

Firstly, you should download this project template. Secondly, download latest version of [Phaser](https://github.com/photonstorm/phaser). Thirdly, installing [NodeJS](http://nodejs.org). Finally, install [Grunt](http://gruntjs.com).

I think, you can download this project template easly, like Phaser. Because of this, I skip that sections.

#### Installing Grunt

Firstly, install [NodeJS](http://nodejs.org/) after that use that command from terminal.

```
npm install -g grunt-cli
```

#### Installing Dependencies

Please, navigate into the template directory's root and use that command for installing/updating dependencies.

```
npm install
``

This will read `package.json` and install dependencies.

#### Launch

Simply run command:

```
grunt
```

This will launch your browser automaticly.

Grunt will work in background. When you change your script files, it will re-compile scripts every time.

---

### Concat Include Order

1. Library files (Like Phaser)
2. Object files  (src/game/objects/**/*.js)
3. State files   (src/game/states/**/*.js)
4. Main files    (src/game/*.js)