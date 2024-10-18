const menuData = {
    "quests1": {
        "selectables": ["Active Quests", "All Quests", "Cleared Quests:50%"],
        "description": "Confirm quest details and objectives"
    },

    "quests": {
        "selectables": ["Active Quests", "All Quests", "Cleared Quests:50%"],
        "description": "Confirm quest details and objectives"
    },

    "items": {
        "selectables": ["All items", "Restorative items", "Enhancement Items", "Support Items", "Materials", "Key Items", "Caught Items"],
        "description" : "View all items.",
    },

    "weapons": {
        "selectables" : ["Weapons:20%", "Weapon Set 1", "Weapon Set 2"],
        "description": "View all of the weapons in your possession"
    },

    "skills": {
        "selectables" : ["Pod Programs:18%", "Plug-in Chips"],
        "description" : "Assign Pod abilites."
    },
    
    "intel": {
        "selectables": ["Unit Data:42%", "Tutorials:82%", "Weapon Stories:10%", "Picture Books:37%", "Novel:16%"],
        "description": "View various types of acquired data."
    },

    "system": {
        "selectables": ["Save", "Load", "Settings", "Controls", "Network", "Play Records", "Return to Title Screen", "Exit Game"],
        "description": "Change game settings."
    }
}



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

function iconOn(selectable) {
    var icon = getSelectableIcon(selectable);
    var icon_src = icon.getAttribute("src");
    icon.setAttribute("src", "/assets/images/icon_active.svg");
}

function iconOff(selecable) {
    var icon = getSelectableIcon(selecable);
    var icon_src = icon.getAttribute("src");
    icon.setAttribute("src", "/assets/images/icon.svg");
}


function changeTab(name) {
    const selectableContainer = document.getElementById("selectable-container");
    const bottomContainer = document.getElementById("bottom-section");

    document.getElementById("section-title").innerText = name;

    for (const line of document.getElementsByClassName("lineSlide")) {
        line.classList.toggle("hidden");
    }

    // Change bottom text and replay animation
    document.getElementById("bottom-text").innerText = menuData[name]["description"]
    bottomContainer.classList.remove("slide-up");
    bottomContainer.offsetWidth;
    bottomContainer.classList.add("slide-up");


    for (const line of document.getElementsByClassName("lineSlide")) {
        line.classList.toggle("hidden");
        line.classList.remove("lineSlide");
        line.offsetWidth;
        line.classList.add("lineSlide");
    }

    // Remove and add new selectables
    selectableContainer.innerText = "";
    for (const i of menuData[name]["selectables"]) {
        const selectable = document.createElement("li");
        selectable.setAttribute("class", "selectable slide-in");
        
        const icon = document.createElement("img");
        icon.setAttribute("src", "/assets/images/icon.svg");
        icon.setAttribute("class", "selectable-icon");
        selectable.appendChild(icon);

        const text = document.createElement("h2");
        text.classList.add("selectable-text");

        const parsedText = i.split(":");

        text.innerText = parsedText[0];
        selectable.appendChild(text);

        if (parsedText.length > 1) {
            const text1 = document.createElement("h2");
            text1.setAttribute("class", "selectable-text-right");
            text1.innerText = parsedText[1];
            selectable.appendChild(text1);
        }

        const darkSlider = document.createElement("div");
        darkSlider.setAttribute("class", "dark-slider");
        selectable.appendChild(darkSlider);

        activateSelectable(selectable);
        selectableAddLeave(selectable);
        selectableContainer.appendChild(selectable);
    }

}

function selectableOn(selectable) {
    selectable.classList.add("selectable-active");
    const menuIcon = getSelectableIcon(selectable);
    const darkSlider = getDarkSlider(selectable);
    iconOn(selectable);
    darkSlider.classList.add("dark-slider-on");
    menuIcon.classList.add("selectable-icon-active");
}

function selectableOff(selecable) {
    selecable.classList.remove("selectable-active");
    const menuIcon = getSelectableIcon(selecable);
    const darkSlider = getDarkSlider(selecable);
    iconOff(selecable);
    darkSlider.classList.remove("dark-slider-on"); 
    menuIcon.classList.remove("selectable-icon-active");
}

function activateSelectable(selectable) {
    selectable.addEventListener("mouseenter", (event) => {
        let ele = event.target;

        if (!ele.classList.contains("selectable")) {
            ele = ele.parentElement;
        }
    
        selectableOn(ele);
    })
    
}

function selectableAddLeave(selectable) {
    selectable.addEventListener("mouseleave", (event) => {
        let ele = event.target;

        if (!ele.classList.contains("selectable")) {
            ele = ele.parentElement;
        }

        selectableOff(ele)
    })
}

let current = null;
function selectableAddNav(selecable) {
    selecable.addEventListener("mouseenter", (event) => {
        let ele = event.target;
        if (!ele.classList.contains("selectable")) {
            ele = ele.parentElement;
        }

        if (current == null) {
            current = ele
        } else if (current.getAttribute("menu") == ele.getAttribute("menu")) {
            return;
        } else {
            selectableOff(current);
        }

        current = ele;
        changeTab(selecable.getAttribute("menu"));

    })

    
}

for (const selectable of document.getElementsByClassName("selectable-nav")) {
    activateSelectable(selectable);
    selectableAddNav(selectable);
}

changeTab("quests");