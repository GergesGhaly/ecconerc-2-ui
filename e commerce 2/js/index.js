const nav = document.querySelector(".nav-menu")
const hambur = document.querySelector(".hamburger")
const closebtn = document.querySelector(".close")
const navigation = document.querySelector(".navigation")



hambur.onclick= () => {
    nav.classList.add("show")
    document.body.classList.add("show")
    navigation.classList.remove("fix")

}

closebtn.onclick= () => {
    nav.classList.remove("show")
    document.body.classList.remove("show")
    navigation.classList.add("fix")

}

// Fixed Nav


window.addEventListener("scroll",()=>{
    navigation.classList.toggle("fix",pageYOffset>0)

})



// popup

const popup = document.querySelector('.popup')
const btnclose = document.querySelector('.popup-close')

btnclose.onclick= ()=>{

    popup.classList.remove('show')

}

window.onload = ()=>{
setTimeout(()=>{

    popup.classList.add('show')

},5000)
}