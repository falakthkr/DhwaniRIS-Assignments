function handleBox(n) {
    if(n.state){
        document.getElementById(n.id).style.zIndex = 0;
        n.state = (!n.state)
        console.log(n.state)
    }
    else{
        document.getElementById(n.id).style.zIndex = 1;
        n.state = (!n.state)
        console.log(n.state)  
    }
}