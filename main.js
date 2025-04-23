window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Start the program")
}
// Array för alla rum
const scenes = ["homePage", "firstSceneSmulan", "secondSceneSmulan", "thirdSceneSmulan", "inTheKitchen", "findTheBowl", "bowlAlternative", "underTheTable", "onTable", "onTableSecond", "crumbsOnTable", "onTableThird", "overviewOverAllRooms", "bedroomBeforeItem", "bedroomAfterItem", "livingroomBeforeItem", "livingroomAfterItem", "bathroomBeforeItem", "bathroomAfterItem", "atticBeforeItem", "atticAfterItem", "closetBeforeItem", "closetAfterItem", "theNoteInCloset", "lastScene", "thanksForPlaying"];

window.onload = function () {
    showScene("homePage");
};

// Byta scenfunktion
function showScene(sceneId) {
    scenes.forEach(id => {
        const scene = document.getElementById(id);
        if (scene) {
            scene.style.display = (id === sceneId) ? "block" : "none";
        }
    });
}


const requiredItems = ['nachoBag', 'salsaJar', 'theVeggies', 'pileOfTortillas'];

// Array för att lagra insamlade föremål
let collectedItems = [];

// Funktion för att plocka upp föremålet
function pickUpItem(itemId) {
    if (!collectedItems.includes(itemId)) {
        collectedItems.push(itemId);
        console.log(`${itemId} Its now in ypur inventory:`, collectedItems);


        const item = document.getElementById(itemId);
        if (item) {
            item.style.display = 'none';
        }

        showScene('overviewOverAllRooms');
    } else {
        console.log(`${itemId} Already collected.`);
    }
}

