
function displayWindowSize() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    // your size calculation code here
    document.getElementById("viewport").innerHTML = myWidth + " x " + myHeight;
};


window.onresize = displayWindowSize;
window.onload = displayWindowSize;
