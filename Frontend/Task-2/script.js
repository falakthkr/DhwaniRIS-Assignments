// Event Delegation and Event Listeners
const buttons = () => {
    let boxes = document.getElementById("boxes")
    boxes.addEventListener("click",handleBox)
}

// Function to handle position of boxes using z-index
const handleBox = (n) => {
    let item = n.target
    if(item.state){
        item.style.zIndex = 0;
        item.state = (!item.state)
        console.log(item.state)
    }
    else{
        item.style.zIndex = 1;
        item.state = (!item.state)
        console.log(item.state)  
    }
}

window.addEventListener("load",buttons)
