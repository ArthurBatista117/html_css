let btn_mobile = document.querySelector('#burger')

menu = () =>{
    const nav = document.querySelector('#mn')
    nav.classList.toggle('active')
}

btn_mobile.addEventListener('click', menu())
