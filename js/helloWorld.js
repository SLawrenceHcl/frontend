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