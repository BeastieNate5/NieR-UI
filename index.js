var selecables = document.getElementsByClassName("selectable");


function getDarkSlider(selectable_p) {
    var children = selectable_p.children;
    
    for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains("dark-slider")) {
            return children[i];
        }
    }

    return null;
}

function getSelectableIcon(selectable_p) {
    var children = selectable_p.children;

    for (let i = 0; i < children.length; i++) {
        if (children[i].classList.contains("selectable-icon")) {
            return children[i];
        }
    }

    return null;
}

function toggleSelectableIcon(selectable_p) {
    var icon = getSelectableIcon(selectable_p);
    var icon_src = icon.getAttribute("src");

    if (icon_src == "/assets/images/icon.svg") {
        icon.setAttribute("src", "/assets/images/icon_active.svg");
    } else {
        icon.setAttribute("src", "/assets/images/icon.svg");
    }
}

for (i = 0; i < selecables.length; i++) {
    var darkslider = document.createElement("div");
    darkslider.setAttribute("class", "dark-slider");
    selecables[i].appendChild(darkslider);
}


for (let i = 0; i < selecables.length; i++) {
    selecables[i].addEventListener("mouseenter", (event) => {
        var ele = event.target;
        
        if (!ele.classList.contains("selectable")) {
            ele = ele.parentElement;
        }

        ele.classList.add("selectable-active");
        
        var menuIcon = getSelectableIcon(ele);
        var darkslider = getDarkSlider(ele);

        toggleSelectableIcon(ele);
        darkslider.classList.add("dark-slider-on");
        menuIcon.classList.add("selectable-icon-active");
    });

    selecables[i].addEventListener("mouseleave", (event) => {
        var ele = event.target;
        console.log("Off");
        if (!ele.classList.contains("selectable")) {
            ele = ele.parentElement;
        }
        
        ele.classList.remove("selectable-active");

        var menuIcon = getSelectableIcon(ele);
        var darkslider = getDarkSlider(ele);

        toggleSelectableIcon(ele);
        darkslider.classList.remove("dark-slider-on"); 
        menuIcon.classList.remove("selectable-icon-active");
    });
}