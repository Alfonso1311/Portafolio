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

timeoutZero = setTimeout(";", 1); 
var number = Array.from(Array(26).keys()); 
number.shift(); 
var circle = document.querySelectorAll(".cercle"); 
var ballY = document.getElementById("ballY"); 
var list = document.getElementById("list"); 
var counter = document.querySelector("#counter>div"); 
var num; document.body.addEventListener("click", function () { 
    if (number.length > 0) { 
        num = number.splice(Math.floor(Math.random() * number.length), 1); 
        list.innerHTML = "<span>" + num + "</span>" + list.innerHTML; 
        var a = list.firstChild; a.style.transition = "0s"; 
        a.style.width = 0; 
        a.style.backgroundColor = "black"; 
        setTimeout(function () { 
            list.querySelectorAll("span").forEach(function (b) {
                b.style.transition = ".3s"; 
                b.style.width = b.offsetHeight + "px"; 
                b.style.backgroundColor = ""; 
                b.style.margin = "5px" 
            }) 
        }, 300) 
    } else { 
        num = num == "🐶" ? "🐭" : "🐶"; 
        list.style.textAlign = "center"; 
        counter.style.height = 0 
    } counter.innerHTML = number.length + " balls left"; 
    circle.forEach(function (b) { 
        b.style.backgroundColor = "black"; 
        b.style.color = "orange"; 
        setTimeout(function () { 
            b.innerHTML = num; 
            b.style.color = "black"; 
            b.style.backgroundColor = "orange"; 
            b.style.filter = "" 
        }, 200) 
    }); 
    container.style.boxShadow = "0 0 0px 10px orange"; 
    setTimeout(function () { 
        container.style.boxShadow = "" 
    }, 250); 
    ballY.style.animationDuration = "3s"; 
    clearTimeout(timeoutZero); 
    timeoutZero = setTimeout(function () { 
        circle.forEach(function (b) { 
            b.style.backgroundColor = "#333"; 
            b.style.color = "#555"; 
            ballY.style.animationDuration = "15s" 
        }); 
        timeoutZero = setTimeout(function () { 
            circle.forEach(function (b) { 
                b.style.backgroundColor = "black"; 
                b.style.color = "#111"; 
                b.style.filter = "grayscale(100%)" 
            }) 
        }, 5000) 
    }, 5000) 
});