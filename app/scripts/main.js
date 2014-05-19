

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




function Megaman () {
	this.hp = 50;

	this.attack = function(target) {
		target.hp = target.hp - 8;
	};

	this.special = function(target) {
		target.hp = target.hp - 20;
	};
}

function Enemy () {
	this.hp = 20;

	this.attack = function(target) {
		target.hp = target.hp - 10;
	};

	this.special = function(target) {
		target.hp = target.hp - 20;
	};
}

function enemyAttack () {
	setTimeout(function(){
		if (Math.floor(Math.random() * 10 ) > 4) {
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
	} else {
		$('.enemy-stat').text('Enemy has ' + enemy.hp + 'hp');
	}
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




function gameOver () {
	$('.game-over').addClass('active');
}











