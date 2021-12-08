

//update loop for animatons

let lastTime
function update(time) {
    if (lastTime != null){
        const delta = time - lastTime
       //// some code
    }
    lastTime = time
    window.requestAnimationFrame(update)
}
