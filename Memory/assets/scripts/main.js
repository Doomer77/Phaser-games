let config = {
  type: Phaser.AUTO, // webgl or canvas
  width: 1280,
  height: 720,
  rows: 2, // количество рядов карт
  cols: 5, // количество столбов карт
  cards: [1, 2, 3, 4, 5],
  scene: new GameScene(),
};

// let game = new Phaser.Game(config);

let game = new Phaser.Game(config);
