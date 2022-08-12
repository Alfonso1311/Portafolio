
var container = document.getElementById("container"); 

document.body.addEventListener("mousemove", function (b) { 
    var f = b.clientX; 
    var d = document.body.clientWidth / 2; 
    var c = container.offsetWidth / 2; 
    var a = 0; 
    if (f < d - c) { 
        a = 90 - f * 90 / (d - c) 
    } 
    if (f > d + c) { 
        a = (f - d - c) * -90 / (d - c) 
    } 
    document.getElementById("rotate2D").style.transform = "rotate(" + a + "deg)" 
}); 

