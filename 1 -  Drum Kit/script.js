
////JS SCRIPT FOR THE MAIN HTML 

    //console.log(e.keyCode);
function playSound(e){
    const audio = document.querySelector(`audio[data-key= "${e.keycode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keycode}"]`);
    if(!audio) return;    ///console.log(audio); return; //stop the function from running all together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classlist.add(`playing`);
    key.classList.remove(`playing`);
    key.classList.toggle(`playing`);
}


function removeTransition(e){
    if(e.propertyName !== `transform`) return; //skip if its not a trandform
    ///console.log(e.propertyName);
    console.log(this);
    this.classList.remove(`playing`);
}
const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener(`transitionend`, removeTransition));

window.addEventListener(`keydown`, playSound);
