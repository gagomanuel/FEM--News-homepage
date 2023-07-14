window.addEventListener("load", function () {
    let burguer_menu_display = document.querySelector(".burguer-menu-display");
    let burguer_menu_column = document.querySelector(".burguer-menu-column");
    let burger_menu_img = document.querySelector(".burguer-menu-img.menu");
    let burger_menu_close = document.querySelector(".nav-x-to-close");
    // this is for darkening the 'body' when 
    let body = document.querySelector("body");

    burger_menu_img.addEventListener("click", function(){
        if (burguer_menu_display.classList.contains('toggle-view')){
            burguer_menu_display.classList.remove("toggle-view")
        }
    })
    burger_menu_close.addEventListener("click", function(){
        if (!burguer_menu_display.classList.contains('toggle-view')){
            burguer_menu_display.classList.add("toggle-view")
        }
    })
});