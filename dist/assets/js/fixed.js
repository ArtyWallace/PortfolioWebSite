window.onload = function() {
    if (window.pageYOffset > introHeight) {
        for (i = 0; i < fixedBar.length; i++) {
            fixedBar[i].style.display = "flex";
        }
    } else {
        for (i = 0; i < fixedBar.length; i++) {
            fixedBar[i].style.display = "none";
        }
    }

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > introHeight) {
        for (i = 0; i < fixedBar.length; i++) {
            fixedBar[i].style.display = "flex";
        }
    } else {
        for (i = 0; i < fixedBar.length; i++) {
            fixedBar[i].style.display = "none";
        }
    }
    });
}