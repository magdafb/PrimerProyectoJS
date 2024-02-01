let estadoLicuadora = "off";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora =document.getElementById("blender-button-sound");

function controlBlender() {
    if (estadoLicuadora == "off") {
        estadoLicuadora = "on";
        hacerruido();
        licuadora.classList.add("active");
        /* console.log("turned on"); */
    } else {
        estadoLicuadora = "off";
        hacerruido();
        licuadora.classList.remove("active");
        /* console.log("turned off"); */
    }
}
function hacerruido() {
    if( sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }

}