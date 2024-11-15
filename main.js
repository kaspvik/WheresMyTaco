window.addEventListener("DOMContentLoaded", main);

function main() {
    console.log("Start the program")
}
// Array för alla rum
const scenes = ["homePage", "firstSceneSmulan", "secondSceneSmulan", "thirdSceneSmulan", "inTheKitchen", "findTheBowl", "bowlAlternative", "underTheTable", "onTable", "onTableSecond", "crumbsOnTable", "onTableThird", "overviewOverAllRooms", "bedroomBeforeItem", "bedroomAfterItem", "livingroomBeforeItem", "livingroomAfterItem", "bathroomBeforeItem", "bathroomAfterItem", "atticBeforeItem", "atticAfterItem", "closetBeforeItem", "closetAfterItem", "theNoteInCloset", "lastScene", "thanksForPlaying"];

// Byta scenfunktion
function showScene(sceneId) {

    scenes.forEach(id => {
        document.getElementById(id).style.display = (id === sceneId) ? "block" : "none";
    });
}

// Array för att lagra insamlade föremål
let collectedItems = [];

// Funktion för att plocka upp föremålet
function pickUpItem(itemId) {
    // Kontrollera om föremålet redan är samlat
    if (!collectedItems.includes(itemId)) {
        // Lägg till föremålet i arrayen
        collectedItems.push(itemId);
        console.log(`${itemId} Its now in ypur inventory:`, collectedItems);

        // Dölj föremålet från skärmen
        const item = document.getElementById(itemId);
        if (item) {
            item.style.display = 'none';
        }


        showScene('overviewOverAllRooms');
    } else {
        console.log(`${itemId} Already collected.`);
    }
}

