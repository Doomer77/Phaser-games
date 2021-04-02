let scene = new Phaser.Scene("Game");

scene.preload = function() {
    // 1. загрузить бэкгранд
    console.log("preload");
};

//Объект игровой сцены
scene.create = function() {
    // 2. вывести бэкграунд
    console.log("create");
};

let config = {
    type: Phaser.AUTO, // webgl or canvas
    width: 1280,
    height: 720,
    scene: scene
};

// let game = new Phaser.Game(config);

let game = new Phaser.Game(config);
