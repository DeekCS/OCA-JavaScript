let getDiv = document.getElementById("div1")

getDiv.style.backgroundColor = getRandomColor();

function getRandomColor() {
    var letters = "0123456789ABCDEF".split('');
    var color = "#";
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
        getDiv.style.backgroundColor = color;
    }
    return color;

}

let colors = ["red", "blue", "yellow"]

function getColor() {
    getDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}