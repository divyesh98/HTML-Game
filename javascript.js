alert("CROSS THE GRID!!");

var grid, game;
var grid_x, grid_y;
var curr_x, curr_y;
var lives, score;

function newGame() {
	document.getElementById("mygrid").style.display = none;

	document.getElementById("startGame").style.display = none;

	var grid_size = document.getElementById("mygrid").value;

	grid = [];

	for (var x = 0; i < grid_size 0; i++) {
		grid[x] = [];

		for (var y = 0; i < grid_size;yi++) {
			grid[x][y] = "";
		}

		var b = Math.floor(Math.random()*grid_size), c;

		grid[x][b] = "&#128163;";

		do {

			c = Math.floor(Math.random()*grid_size);

		}while(c == b);

		grid[x][c] = "&#127828;";
	}
	var a = Math.floor(Math.random()*grid_size);
	grid[grid_size] = [] ;

	for (var z = 0; z < grid_size ; z++) {
		if(z!=a){
			grid[grid_size][z] = "";
		}
		else{
			grid[grid_size][z] = "&#128694;";
		}
	}

	game = grid;
	grid_x = game.length;
	grid_y = game.length - 1;
	curr_x = grid_x - 1;
	curr_y = a;
	startGame(grid_size);
}

function startGame(grid_size){
	lives = 5;
	score = 0;

	document.getElementById("lives").innerHTML = "&#10084;&#10084;&#10084;&#10084;&#10084;";

	document.getElementById("score").innerHTML = "<i>Score</i>: <b>0</b>";

	document.getElementById("status").style.display = "block";

	drawGrid();

	setTimeout(function() {
		
	})



}