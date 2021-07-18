window.onload = function () {
    if (sessionStorage.roboticsView) {
        document.getElementById("content-container").style.animation = "none";
    } 
    else {
        sessionStorage.roboticsView = true;
    }
};

function hide() {
    document.getElementById("content-container").style.display="none"; 
}