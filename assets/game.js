var game;
game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
function preload() {
    game.load.spritesheet('natsuki', 'assets/natsuki.jpg');
    game.load.spritesheet('ball', 'assets/star.png');
}
var girls, sayori, natsuki, baller, ballGroup, consoleCommands, score, realScore = 0;
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    girls = game.add.group();
    girls.enableBody = true;
    girls.visible = true;
    //sayori = girls.create(0, 0, 'sayori');
    natsuki = girls.create(50, 150, 'natsuki');
    natsuki.body.immovable = true;
    natsuki.scale.setTo(0.05, 0.05);
    //natsuki.body.gravity.y = 300;
    natsuki.body.collideWorldBounds = true;
    computerNatsuki = girls.create(600, 300, 'natsuki');
    computerNatsuki.scale.setTo(0.05, 0.05);
    computerNatsuki.body.immovable = true;
    computerNatsuki.body.collideWorldBounds = true;
    //natsuki.body.bounce.y = 0.5;
    ballGroup = game.add.group();
    ballGroup.enableBody = true;
    baller = ballGroup.create(400, 300, 'ball');
    //baller.body.gravity.y = 100;
    baller.body.bounce.x = 1;
    baller.body.bounce.y = 1;
    baller.body.collideWorldBounds = true;
    baller.body.velocity.x = -1000;
    baller.body.velocity.y = 100;
    cursors = game.input.keyboard.createCursorKeys();
    game.input.mouse.capture = true;
    consoleCommands = game.add.text(350, 0, "Just Monika", {fontSize: '32px', fill: '#fff'});
    score = game.add.text(10, 0, 'score: ' + realScore, {fontSize: '64px', fill: '#fff'});
}
function update() {
    var hitComputer = game.physics.arcade.collide(computerNatsuki, ballGroup);
    var hitBall = game.physics.arcade.collide(natsuki, ballGroup);
    computerNatsuki.body.velocity.y = 0;
    if (cursors.left.isDown) {
        computerNatsuki.body.velocity.y = -350;
    }
    if (cursors.right.isDown) {
        computerNatsuki.body.velocity.y = 350;
    }
    if (hitBall) {
        realScore++;
        score.text = 'score: ' + realScore;
    }
    natsuki.body.velocity.y = 0;
    if (baller.body.wasTouching.up) {
        baller.body.velocity.y = 1000;
    } 
    if (baller.body.wasTouching.down) {
        baller.body.velocity.y = -1000;
    }
    if(baller.body.wasTouching.left) {
        baller.body.velocity.x = 1000;
    } else if (baller.body.wasTouching.right) {
        baller.body.velocity.x = -1000;
    }
    if (cursors.up.isDown) {
        natsuki.body.velocity.y = -350;
    } 
    if (cursors.down.isDown) {
        natsuki.body.velocity.y = 350;
    }
}
