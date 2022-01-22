
function playAudio(e){
  const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return  //this part is error to prevent typeerror
  key.classList.add('playing')
  audio.currentTime=0  //to rewind to start
  audio.play()
  }

  function removeTransition(e){
      if(e.propertyName!=='transform') return
      this.classList.remove("playing")
  }

window.addEventListener("keydown",playAudio)

const keys=document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener("transitionend",removeTransition))