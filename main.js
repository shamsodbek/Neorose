const menuImg = document.querySelector('.nav_menu'),
     menu = document.querySelector('.menu_backet'),
    close = document.querySelector('.close_img')

menuImg.addEventListener('click', function(){
    menu.classList.add('active')
})
close.addEventListener('click', function () {
    menu.classList.remove('active')
})
      
