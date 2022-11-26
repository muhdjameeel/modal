let hideModal = document.querySelector(".icon")
let showModal = document.querySelector(".btn1")
let showModal2 = document.querySelector(".btn2")
let showModal3 = document.querySelector(".btn3")
let modal = document.querySelector(".wrap2")
let main = document.querySelector(".main")


let modalShower = () => {
    document.querySelector(".wrap2").style.display = "block"
    document.querySelector(".wrap1").style.filter = 'blur(2px)'
    document.querySelector(".wrap1").style.zIndex = '2';
    document.querySelector(".main").style.zIndex = '1';
}
showModal.addEventListener("click", modalShower)
showModal2.addEventListener("click", modalShower)
showModal3.addEventListener("click", modalShower)


let modalHider = () => {
    document.querySelector(".wrap2").style.display = "none";
    document.querySelector(".wrap1").style.filter = 'none'
    document.querySelector(".main").style.filter = 'none';
}
hideModal.addEventListener("click", modalHider)  

let keyFunc = (e) => {
    if(e.key === 'Escape'){
       modalHider() 
    }
    console.log(e.target.classList.value)
}
document.addEventListener('keydown', keyFunc) 


let jokes = document.querySelector('.para')

const CnApiUrl = "https://api.chucknorris.io/jokes/random";

async function CNJoke() {
    let jokes = document.querySelector('.para') 
    const responseCN = await fetch(CnApiUrl);
    const data = await responseCN.json();
    
    jokes.textContent = data.value
    console.log(data.value);
}
CNJoke();  




/*
let showModall = document.querySelectorAll('.btn');
let modall = document.querySelector('.modal');
let close = document.querySelector('.icon')
let overlay = document.querySelector('.overlay')

for (i = 0; i < showModall.length; i++) {
    showModall[i].addEventListener('click', function () {
        modall.classList.remove('hidden')
        overlay.classList.remove('hidden')

})
    }

    close.addEventListener('click', function() {
        modal.classList.add('hidden')
    })
   */


