var d = document.querySelectorAll("div");
for (var i = 1; i < d.length; i++) {
    d[i].addEventListener("mousedown", function () {
        this.getElementsByTagName("a")[0].style.color = "#17CDCC";
        this.style.backgroundColor = "black";
        this.style.transform = "scale(0.8)";
        this.style.border = "2px solid #17CDCC";
        var alpha = this.getElementsByTagName("a")[0].innerHTML.toLowerCase();
        var audio = new Audio(alpha + ".mp3");
        audio.play();

    })
    d[i].addEventListener("mouseup", function () {
        this.getElementsByTagName("a")[0].style.color = "white";
        this.style.transform = "scale(1)";
        this.style.backgroundColor = "transparent";
        this.style.border = "2px solid white";
    })
}

document.addEventListener("keydown", function (event) {
    var audio = new Audio(event.key + ".mp3");
    var k = event.key;
    for (var i = 1; i < d.length; i++) {
        if (k == d[i].getElementsByTagName("a")[0].innerText.toLowerCase()) {
            d[i].getElementsByTagName("a")[0].style.color = "#17CDCC";
            d[i].style.backgroundColor = "black";
            d[i].style.transform = "scale(0.8)";
            d[i].style.border = "2px solid #17CDCC";
        }
    }
    audio.play();
})
document.addEventListener("keyup", function (event) {
    var k = event.key;
    for (var i = 1; i < d.length; i++) {
        if (k == d[i].getElementsByTagName("a")[0].innerText.toLowerCase()) {
            d[i].getElementsByTagName("a")[0].style.color = "white";
            d[i].style.transform = "scale(1)";
            d[i].style.backgroundColor = "transparent";
            d[i].style.border = "2px solid white";
        }
    }

})

