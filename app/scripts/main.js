

$('.megaman').click(function() {
	$('.wizard').remove();
	$('.link').remove();
});

$('.link').click(function() {
	$('.megaman').remove();
	$('.wizard').remove();
});

$('.wizard').click(function() {
	$('.megaman').remove();
	$('.link').remove();
});

function  Wizard () {
	this.hp = 50;

	this.attack = function(target) {
		target.hp = target.hp - 2;
	};

	this.special = function(target) {
		if (Math.random() > .3) {
			target.hp = target.hp;
		} else {
			target.hp = target.hp - 80
		};
	};
}

$('.wizard').click(function() {
	player = new Wizard();
	enemy = new Enemy();

	$('.header').remove();

	$('.menu').addClass('active');
	$('.dragon').addClass('active');

	renderPlayer(player);
	renderEnemy(enemy);
});

function Link () {
	this.hp = 100;

	this.attack = function(target) {
		target.hp = target.hp - 6;
	};

	this.special = function(target) {
		if (target.hp > 50) {
			target.hp = target.hp - 45;
		} else {
			target.hp = target.hp - 4
		};
		
	};
}

$('.link').click(function() {
	player = new Link();
	enemy = new Enemy();

	$('.header').remove();

	$('.menu').addClass('active');
	$('.ganon').addClass('active');

	renderPlayer(player);
	renderEnemy(enemy);
});

function Megaman () {
	this.hp = 80;

	this.attack = function(target) {
		target.hp = target.hp - 10;
	};

	this.special = function(target) {
		target.hp = target.hp - 20;
	};
}

$('.megaman').click(function() {
	player = new Megaman();
	enemy = new Enemy();

	$('.header').remove();

	$('.menu').addClass('active');
	$('.wiley').addClass('active');

	renderPlayer(player);
	renderEnemy(enemy);
});

$('.attack').click(function() {
	player.attack(enemy);
	$('.action').text('You attack!');

	renderPlayer(player);
	renderEnemy(enemy);

	enemyAttack(player);
});

$('.special').click(function() {
	player.special(enemy);
	$('.action').text('You used a special attack!');

	renderPlayer(player);
	renderEnemy(enemy);

	enemyAttack(player);
});

function Enemy () {
	this.hp = 150;

	this.attack = function(target) {
		target.hp = target.hp - 10;
	};

	this.special = function(target) {
		target.hp = target.hp - 20;
	};
}

function enemyAttack () {
	setTimeout(function(){
		if (Math.random() > .3) {
			enemy.special(player);
			$('.action').text('Enemy special attack!');
		} else {
			enemy.attack(player);
			$('.action').text('Enemy attack!');
		}

		renderPlayer(player);
		renderEnemy(enemy);
	}, 2000);
}


function renderPlayer (player) {
	if (player.hp < 1) {
		gameOver();
	} else {
		$('.player-stat').text('Player has ' + player.hp + 'hp');
	}
}

function renderEnemy (enemy) {
	if (enemy.hp < 1) {
		$('.enemy-stat').text('ENEMY IS KILL');
		$('.wiley').slideUp();
		$('.ganon').slideUp();
		$('.dragon').slideUp();
	} else {
		$('.enemy-stat').text('Enemy has ' + enemy.hp + 'hp');
	}
}

function gameOver () {
	$('.game-over').addClass('active');
}











