var numberOfButton = document.querySelectorAll(".drum").length;

for (var i =0; i <numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
   
   var buttonInerHTML = this.innerHTML;
   makesound(buttonInerHTML);
   buttonAnimation(buttonInerHTML);
 } );
    
}

document.addEventListener("keypress", function(event){
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case ("d"):
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play(); 
      break;
    case ("o"):
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play(); 
      break;
    case ("m"):
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play(); 
        break;
    case ("a"):
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play(); 
          break;
    case ("n"):
            var audio = new Audio("sounds/snare.mp3");
            audio.play(); 
            break;
    case ("k"):
              var audio = new Audio("sounds/crash.mp3");
              audio.play(); 
              break; 
              case ("s"):
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play(); 
                break;       
    default : console.log(buttonInerHTML);
      break;
   }   

}
function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  },100);
}