// /////////////////////////////////////////////
//              JASON ANIMATIONS              //
// /////////////////////////////////////////////

const jasonButton = document.getElementById("jasonButton");

const jasonAssets = [
    document.getElementById("jasonFire"),
    document.getElementById("jasonFish"),
    document.getElementById("jasonPlant"),
    document.getElementById("jasonPlant2"),
    document.getElementById("jasonPlant3"),
    document.getElementById("jasonComp"),
    document.getElementById("jasonPerson")

];

const wave = document.getElementById("jasonBTNAnimation");
let waveTimeout = null;

let assetsVisible = false;
let isClicked = false


jasonButton.addEventListener("click", () => {
    if (isClicked === false) {
        jasonButton.classList.add("active");
        isClicked = true;
    } else {
        jasonButton.classList.remove("active");
        isClicked = false;
    }

    if (isClicked === true) {
        wave.classList.add("visible");
        clearTimeout(waveTimeout);
        waveTimeout = setTimeout(() => {
            wave.classList.remove("visible");
        }, 5000)

    } else {
        clearTimeout(waveTimeout);
        wave.classList.remove("visible");

    }

    // Hides assests
    if (assetsVisible) {
        jasonAssets.forEach(asset => {
            asset.classList.remove("visible");
        });
        assetsVisible = false;
        // Shows assets on click
    } else {
        jasonAssets.forEach((asset, i) => {
            setTimeout(() => {
                asset.classList.add("visible");
            }, i * 120);
        });
        assetsVisible = true;
    }


});

