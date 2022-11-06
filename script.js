const main = document.querySelector("main")
const div = document.createElement("div")
const p1 = document.createElement("p1")
const p = document.createElement("p")

function getTime(){
    const d = new Date();
    const h = ('0' + d.getHours()).slice(-2);
    const m = ('0' + d.getMinutes()).slice(-2);
    const s = ('0' + d.getSeconds()).slice(-2);

    p1.innerText=h+":"+m;
    p.innerText="."+s;
    
    main.append(div);
    div.append(p1);
    div.append(p);
}

setInterval(displayTime,1000);
function displayTime(){
    getTime();
};