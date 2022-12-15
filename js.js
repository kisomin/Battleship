var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Привет, это мини-игра Морской бой! В 7 ячейках по горизонтали ••••••• (от нуля до шести) затаился трехпалубный корабль противника. Твоя задача: потопить его за меньшее количество попыток. Стреляй! (введи число 0-6):");
	if (guess < 0 || guess > 6) {
		alert("Введи валидное значение 0-6");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Попадание!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Корабль противника потоплен!");
			}
		} else {
			alert("Промах!");
		}
	}
}

var stats = "Тебе понадобилось " + guesses + " попыток! Твоя точность равна " + (3 / guesses);
alert(stats);
