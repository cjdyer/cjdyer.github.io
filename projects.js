window.onload = function () {
    if (sessionStorage.projectsView) {
        document.getElementById("content-container").style.animation = "none";
    } 
    else {
        sessionStorage.projectsView = true;
    }
};