// Assignment 2 | COMP1073 Client-Side JavaScript


  //declare the functions

  function changePink(){

    document.querySelector(".large-image").src = "images/flowers-pink-large.jpg";
  }

  function changePurple(){

    document.querySelector(".large-image").src = "images/flowers-purple-large.jpg";
  }

  function changeRed(){

    document.querySelector(".large-image").src = "images/flowers-red-large.jpg";
  }

  function changeWhite(){

    document.querySelector(".large-image").src = "images/flowers-white-large.jpg";
  }

  function changeYellow(){

    document.querySelector(".large-image").src = "images/flowers-yellow-large.jpg";
  }

  //event listeners

document.querySelector(".pink").addEventListener("click", function(){
	changePink()
})

document.querySelector(".purple").addEventListener("click", function(){
	changePurple()
})

document.querySelector(".red").addEventListener("click", function(){
	changeRed()
})

document.querySelector(".white").addEventListener("click", function(){
	changeWhite()
})

document.querySelector(".yellow").addEventListener("click", function(){
	changeYellow()
})

