window.onload = function () {
    if (sessionStorage.codeView) {
        document.getElementById("content-container").style.animation = "none";
    } 
    else {
        sessionStorage.codeView = true;
    }
};