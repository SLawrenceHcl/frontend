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
      x.style.display = "block"
    }
  }

  function displayProjects(){
    // alert("Sign in prompt");
    var x = document.getElementById("projects");
    if(x.style.display === "block"){
      x.style.display = "none";
    }
    else{
      x.style.display = "block"
    }
  }

  var player = 1;

  function toggle(id){
    var x = document.getElementById(id);
    // alert(id);
    
    // alert(x.style.background);
    // if(x.style.background === "blue"){
    //   x.style.background = "red";
    // }
    // else{
    //   x.style.background = "blue";
    // }
    if(player === 1){
      x.style.background = "blue";
      player = 2;
    }
    else{
      x.style.background = "red";
      player = 1;
    }
    togglePlayerDisplay();
  }
  function reset(){
    player = 1;
    var x = document.getElementById("player1");
    x.style.display = "block"
    x = document.getElementById("player2");
    x.style.display = "none"

    for (let i = 1; i < 10; i++) {
      var id = "tic-tac-" + i;
      x = document.getElementById(id);
      x.style.background = "white";
    }
  }

  function togglePlayerDisplay(){

  }