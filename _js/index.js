window.onload = function () {
    if (sessionStorage.indexView) {
        document.getElementById("title").style.display="none"; 
        document.getElementById("arrow-container").style.display="block";
        document.getElementById("cloud1").style.animationDelay = "0s";
        document.getElementById("cloud2").style.animationDelay = "0s";
        document.getElementById("cloud3").style.animationDelay = "0s";
        document.getElementById("cloud4").style.animationDelay = "0s";
        document.getElementById("cloud4").style.animationDelay = "0s";
    } 
    else {
        sessionStorage.indexView = true;
    }
};

function HideAfterClick() { 
    document.getElementById("title").style.display="none"; 
    document.getElementById("arrow-container").style.display="block"; 
}