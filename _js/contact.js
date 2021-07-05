window.onload = function () {
    if (sessionStorage.contactView) {
        document.getElementById("content-container").style.animation = "none";
    } 
    else {
        sessionStorage.contactView = true;
    }
};