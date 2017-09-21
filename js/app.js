// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    
    // Loop the Bugs
    if (this.x >= 505) {
    this.x = 0;
    }
    
    this.checkCollision();
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.sprite = 'images/char-boy.png';
    this.speed = speed;
    this.x = x;
    this.y = y;
};

Player.prototype.update = function() {
    // Wining 
    if (player.y + 10 <= 0) {        
        player.x = 202.5;
        player.y = 383;
    }
    // Boundres
    if (player.y > 383 ) {
        player.y = 383;
    }
    if (player.x > 402.5) {
        player.x = 402.5;
    }
    if (player.x < 2.5) {
        player.x = 2.5;
    }
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        this.x -= this.speed;
    }
    if (keyPress == 'up') {
        this.y -= this.speed - 20;
    }
    if (keyPress == 'right') {
        this.x += this.speed;
    }
    if (keyPress == 'down') {
        this.y += this.speed - 20;
    }
};

Enemy.prototype.checkCollision = function () {
        var enemy = this;
        Enemy.x = this.x;
        Enemy.y = this.y;
  if (  player.y + 130 >= Enemy.y + 90 && player.x + 25 <= Enemy.x + 88 && player.y + 73 <= Enemy.y + 135 && player.x + 76 >= Enemy.x + 11) {
        player.x = 202.5;
        player.y = 383;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var Bug1 = new Enemy(0, 65, 350);
var Bug2 = new Enemy(0, 150, 200);
var Bug3 = new Enemy(0, 180, 50);
var Bug4 = new Enemy(0, 200, 60);

allEnemies.push(Bug1,Bug2,Bug3,Bug4);


var player = new Player(202.5, 383, 100);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    

    player.handleInput(allowedKeys[e.keyCode]);
});
