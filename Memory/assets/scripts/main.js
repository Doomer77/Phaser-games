let scene = new Phaser.Scene("Game");

scene.preload = function() {
    // 1. загрузить бэкгранд
    // console.log(this === true); true
    //Метод для загрузки изображений
    this.load.image("bg", "assets/sprites/background.png"); 

};

//Объект игровой сцены
scene.create = function() {
    // 2. вывести бэкграунд
    //Метод загрузки спрайтов объекта
    // this.add.sprite(this.sys.game.config.width / 2, this.sys.game.config.height / 2, 'bg');
    let bg = this.add.sprite(0, 0, 'bg').setOrigin(0, 0);
    
};

let config = {
    type: Phaser.AUTO, // webgl or canvas
    width: 1280,
    height: 720,
    scene: scene
};

// let game = new Phaser.Game(config);

let game = new Phaser.Game(config);
