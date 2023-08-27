
function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById("viewport").innerHTML = myWidth + " x " + myHeight;
};


window.onresize = displayWindowSize;
window.onload = displayWindowSize;
