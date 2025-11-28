//script for filter buttons, run with all
filter("all");

function filter(chosen) {
    var items;
    var i;
    items = document.getElementsByClassName("filterDiv");
    if (chosen == "all") { //default all checking and changing to make sure all are visible
        chosen = "";
    }
    for (i = 0; i < items.length; i++) {
        removeClass(items[i], "show");
        if (items[i].className.indexOf(chosen) > -1) {
            addClass(items[i], "show");
        }
    }
}

function addClass(element, name) {
    var i;
    var array1;
    var array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");

    for (i = 0; i < array2.length; i++) { //adding in class if not on element
        if (array1.indexOf(array2[i]) == -1) {
            element.className += " " + array2[i];
        }
    }
}

function removeClass(element, name) {
    var i;
    var array1;
    var array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");

    for (i = 0; i < array2.length; i++) { //same but for removing specific classes
        while (array1.indexOf(array2[i]) > -1) {
            array1.splice(array1.indexOf(array2[i]), 1);     
        }
    }
    element.className = array1.join(" ");
}

// Add active class to the current button pressed
var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
