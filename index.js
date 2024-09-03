var selecables = document.getElementsByClassName("selectable");

for (i = 0; i < selecables.length; i++) {
    selecables[i].addEventListener("mouseover", (event) => {
        var ele = event.target;

        if (!ele.classList.contains("selectable")) {
            ele = ele.parentElement;
        }

        ele.classList.add("selectable-active");
        
        var menuIcon = ele.firstElementChild;
        var darkslider = ele.lastElementChild;

        darkslider.classList.add("dark-slider-on");
        menuIcon.classList.add("menu-icon-active");
    });

    selecables[i].addEventListener("mouseleave", (event) => {
        var ele = event.target;

        if (!ele.classList.contains("selectable")) {
            ele = ele.parentElement;
        }
        
        ele.classList.remove("selectable-active");

        var menuIcon = ele.firstElementChild;
        var darkslider = ele.lastElementChild;

        darkslider.classList.remove("dark-slider-on"); 
        menuIcon.classList.remove("menu-icon-active");
    });
}