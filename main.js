const btn = document.getElementById("btn")
const array = ["+5kiberone","-5kiberone", "+10kiberone", "-10kiberone"]
const route = document.getElementById("route__fortune")
btn.addEventListener("click", ()=>{
    let rndNum = Math.floor(Math.random()*array.length)
    btn.innerText = array[rndNum]
    route.classlist.add("animation__style")
    setTimeout(() => {
        route.classList.remove("animation__style")
    }, 4000);
})