window.addEventListener("keydown",function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;//* if other than any required element is pressed then it will return out of the function
    audio.currentTime=0;//* rewind the sound
    audio.play();//* plays the sound

    key.classList.add("display");//* adds the element(new class) whenever the listen function is called


    function removeTransition(e){
        if(e.propertyName!=="transform") return;//* skips it if its not a transform
        this.classList.remove("display");//* removes the class 
    }
    const keys=document.querySelectorAll(".key");
    keys.forEach((keys)=>{
        key.addEventListener("transitionend",removeTransition);
    })
})
