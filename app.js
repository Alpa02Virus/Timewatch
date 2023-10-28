let time = document.getElementsByTagName("h1")[0]
const start = document.getElementsByTagName("button")[0]
const stop = document.getElementsByTagName("button")[1]
const restart = document.getElementsByTagName("button")[2]
const lap = document.getElementsByTagName("button")[3]
const odoo = document.getElementsByTagName("lap-list")
let i  = 0
//setTimeout clearTimeout--> 1 udaa
// setInterval --> hayzgaaargui udaa
/*let i=0;
function hi(){
    i++;
    console.log("hi"+i);
}
setTimeout(hi,2000);
setInterval(hi,1000); */
let second = 0 , minute=0, hour = 0
function watch(){
    second++
    // ternary operator
    let s = second < 10 ? "0"+second : second;
    let m = minute < 10 ? "0"+minute : minute;
    let h = hour < 10 ? "0"+hour : hour
    time.innerText = h+":"+m+":"+s  
    if(second == 60){
        second=0
        minute++
        if(minute == 60){
            minute=0
            hour++
        }
    }
}
let ehlel;
start.addEventListener('click',()=>{
    ehlel = setInterval(watch,1000)
})
stop.addEventListener('click',()=>{
    //clearInterval() --> zogsoh 
    clearInterval(ehlel)
})
restart.addEventListener('click',()=>{
    clearInterval(ehlel)
    second=0
    minute=0
    hour=0
    time.innerText="00:00:00"
})
lap.addEventListener('click', () =>{ 
let s = second < 10 ? "0"+second : second; 
let m = minute < 10 ? "0"+minute : minute; 
let h = hour < 10 ? "0"+hour : hour; 
let lapEl = document.createElement('p');   
lapEl.innerText = h+":"+m+":"+s; 
let timer = document.querySelector('.watch'); 
timer.append(lapEl);  
}); 