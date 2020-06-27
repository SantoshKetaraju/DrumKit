for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonClicked = this.textContent;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);

  });
}
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
document.addEventListener("keyup", function(event) {
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();

      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var tom4 = new Audio("sounds/snare.mp3");
      tom4.play();
      break;

    case "k":
      var tom4 = new Audio("sounds/kick-bass.mp3");
      tom4.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/crash.mp3");
      tom4.play();
      break;

    default:
      console.log(this.textContent);
  }

}

function buttonAnimation(key) {
  switch (key) {
    case "w":
      document.querySelector("." + key).classList.toggle("pressed");
      break;

    case "a":
      document.querySelector("." + key).classList.toggle("pressed");
      break;

    case "s":
      document.querySelector("." + key).classList.toggle("pressed");
      break;

    case "d":
      document.querySelector("." + key).classList.toggle("pressed");
      break;

    case "j":
      document.querySelector("." + key).classList.toggle("pressed");
      break;

    case "k":
      document.querySelector("." + key).classList.toggle("pressed");
      break;

    case "l":
      document.querySelector("." + key).classList.toggle("pressed");
      break;

    default:
      console.log(this.textContent);
  }
}
