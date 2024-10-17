const menuData = {
    "Quests": {
        "selectables": ["Active Quests", "All Quests", "Cleared Quests:50%"],
        "description": "Confirm quest details and objectives"
    },

    "Weapons": {
        "selectables" : ["Weapons:20%", "Weapon Set 1", "Weapon Set 2"],
        "description": "View all of the weapons in your possession"
    },

    "skiils": {
        "selectables" : ["Pod Programs:18%", "Plug-in Chips"],
        "description" : "Assign Pod abilites"
    },
    
    "intel": {
        "selectables": ["Unit Data:42%", "Tutorials:82%", "Weapon Stories:10%", "Picture Books:37%", "Novel:16%"],
        "description": "asdokadkoasp"
    },

    "system": {
        "selectables": ["Save", "Load", "Settings", "Controls", "Network", "Play Records", "Return to Title Screen", "Exit Game"],
        "description": "Change game settings"
    }
}


var selecables = document.getElementsByClassName("selectable");
console.log(selecables);
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

// This adds a dark slider to all selectables
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
