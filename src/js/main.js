var camels = 0;
var camelherds = 0;

window.onload = function() {
    pageLoad();
  };

function pageLoad(){
    document.getElementById("camelherdCost").innerHTML = prettify(nextCamelherdCost(camelherds));
    loadGame();

}

function camelClick(number){

    camels = camels + number;
    document.getElementById("camels").innerHTML = prettify(camels);
};

function loadGame() {

    var savegame = JSON.parse(localStorage.getItem("save"));
    if (typeof savegame.camels !== "undefined") camels = savegame.camels;
    if (typeof savegame.camelherds !== "undefined") camelherds = savegame.camelherds;
    document.getElementById("camels").innerHTML = prettify(camels);
    document.getElementById("camelherds").innerHTML = prettify(camelherds);
    document.getElementById("camelherdCost").innerHTML = prettify(nextCamelherdCost(camelherds));
}

function saveGame() {
    
    var save = {
        camels: camels,
        camelherds: camelherds
    }

    localStorage.setItem("save", JSON.stringify(save));
}

function resetGame() {

    //This needs to be updated as to support prestige
    localStorage.removeItem("save");
    camels = 0;
    camelherds = 0;
    document.getElementById("camels").innerHTML = prettify(camels);
    document.getElementById("camelherds").innerHTML = prettify(camelherds);
    document.getElementById("camelherdCost").innerHTML = prettify(nextCamelherdCost(camelherds));

}

function buyCamelherd() {
    
    var camelherdCost = nextCamelherdCost(camelherds);
    if(camels >= camelherdCost) {
        camelherds = camelherds + 1;
        camels = camels - camelherdCost;
        document.getElementById("camelherds").innerHTML = prettify(camelherds);
        document.getElementById("camels").innerHTML = prettify(camels);
    }
    var nextCost = nextCamelherdCost(camelherds);
    document.getElementById("camelherdCost").innerHTML = nextCost;
}

function nextCamelherdCost(numCamelherds) {
    if (numCamelherds == 0) {
        return 10;
    }
    var nextCost = Math.floor(10*Math.pow(1.1, numCamelherds));
    return nextCost
}

function clacNextCost(itemCount, rate) {

    var nextCost = Math.floor(rate*Math.pow(1.1, itemCount));
}

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

window.setInterval(function(){
    cps = camelherds*.4;
    camelClick(cps);
    document.getElementById("camelsPerSecond").innerHTML = prettify(cps);
}, 1000);

