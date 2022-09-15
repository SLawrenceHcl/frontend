// alert("HelloWorld!");


function testabc(){
    // console.log("testabc");
    alert("HelloWorld!");
}

function hello(name){
    var a = document.getElementById('name').value;
    console.log("hello: "+ a);
    alert(a);
}
function alertButton(){
    alert("Sign in prompt");
}

function hamburger() {
    var x = document.getElementsByClassName("nav-link")
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function myFunction() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function hamburger2(){
    var x = document.getElementById("list");
    if(x.style.display === "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block";
    }
  }

  function displayProjects(){
    // alert("Sign in prompt");
    var x = document.getElementById("projects");
    if(x.style.display === "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block";
    }
  }

// _________________________________________________________________________________________________



  var grid = new Array(3);
  for (var i = 0; i < 3; i++) {
    grid[i] = new Array(0,0,0);
  }
  console.log(grid);
  var player = 1;
  var gameOver = 1;

  function toggle(id, row, col){
    grid[row][col] = player;
    // console.log(row);
    var x = document.getElementById(id);
    if(gameOver && player === 1 && x.style.background === "white"){
      x.style.background = "red";
      x.innerHTML = "X";
      player = 2;
      winner();
      togglePlayerDisplay();
    }
    else if(gameOver && player === 2 && x.style.background === "white"){
      x.style.background = "blue";
      x.innerHTML = "O";
      player = 1;
      winner();
      togglePlayerDisplay();
    }
    
  }
  function reset(){
    player = 1;
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        grid[i][j] = 0;
      }
    }
    var x = document.getElementById("player1");
    x.style.display = "block";
    x = document.getElementById("player2");
    x.style.display = "none";
    x = document.getElementById("winner-1");
    x.style.display = "none";
    x = document.getElementById("winner-2");
    x.style.display = "none";
    gameOver = 1;
    x = document.getElementById("tic-tac-hidden");
    x.style.display = "block";


    for (let i = 0; i < 9; i++) {
      var id = "tic-tac-" + i;
      x = document.getElementById(id);
      x.innerHTML = "";
      x.style.background = "white";
    }
  }

  function togglePlayerDisplay(){
    var x = document.getElementById("player1");
    if(gameOver && x.style.display === "block"){
      x.style.display = "none";
      x = document.getElementById("player2");
      x.style.display = "block";
    }
    else if(gameOver && x.style.display === "none"){
      x.style.display = "block";
      x = document.getElementById("player2");
      x.style.display = "none";
    }
  }




  function winner(){
    // check 3 winning conditions
    //cheching fixed diagonals then lines

    if((grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]) && grid[0][0] != 0){
      displayWinner(grid[0][0]);
    }
    else if((grid[2][0] === grid[1][1] && grid[1][1] === grid[0][2]) && grid[2][0] != 0){
      displayWinner(grid[2][0]);
    }
    else{
      for(let i = 0; i < 3; i++){
        console.log(grid[0][1]);
        console.log(grid[1][1]);
        console.log(grid[2][1]);
        if((grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) && grid[i][0] != 0){
          displayWinner(grid[i][1]);
        }
        else if((grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) && grid[0][i] != 0){
          displayWinner(grid[1][i]);
        } 
      }
    }

  }

  function displayWinner(playerNumber){
    var x = document.getElementById("winner-" + playerNumber);
    x.style.display = "block";

    x = document.getElementById("player1");
    x.style.display = "none";
    x = document.getElementById("player2");
    x.style.display = "none";
    gameOver = 0;
  }