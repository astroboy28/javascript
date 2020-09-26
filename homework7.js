
const pageName = "Hello Colors!";
const headLine = "My Different Colors.";
document.getElementById("hello-colors").innerHTML = pageName;
document.getElementById("desc").innerHTML = headLine;

const myColors = ["#C0392B", "#8E44AD", "#3498DB", "#1ABC9C", "#27AE60", "#2ECC71", "#F1C40F", " #D35400", "#D0D3D4", "#839192"];

const createdDiv = document.getElementById("rectangleWrapper");

const newElement = document.createElement("div");


for (let i = 0; i <= myColors.length; i++){
    document.querySelector(".rectangle").style.background = "red";
}
