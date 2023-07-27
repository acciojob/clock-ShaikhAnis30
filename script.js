//your JS code here. If required.


let timer = () => {
    let date = new Date();
    // console.log(date.toLocaleDateString()); 
    // console.log(date.toLocaleTimeString())
    let todayDate = date.toLocaleDateString();
    let todayTime = date.toLocaleTimeString();

    let p = document.getElementById("timer");
    p.innerText = `${todayDate}, ${todayTime}`;
}

timer();