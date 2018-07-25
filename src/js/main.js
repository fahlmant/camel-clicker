var camels = 0;

function camelClick(number){
    camels = camels + number;
    console.log("click");
    document.getElementById("camels").innerHTML = camels;
};

function loadGame() {
    var savegame = JSON.parse(localStorage.getItem("save"));
    console.log(savegame);
    camels = savegame;
    document.getElementById("camels").innerHTML = camels;

}

function saveGame() {
    localStorage.setItem("save", JSON.stringify(camels));
}

