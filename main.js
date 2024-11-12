window.addEventListener("DOMContentLoaded", main);

// Startpage and the introduction

function main() {
    console.log("Start the program")
}

function showFirstSceneSmulan() {
    const homePage = document.getElementById("homePage");
    const firstSceneSmulan = document.getElementById("firstSceneSmulan");

    homePage.style.display = "none";
    firstSceneSmulan.style.display = "block";
}

function showSecondSceneSmulan() {
    const firstSceneSmulan = document.getElementById("firstSceneSmulan");
    const secondSceneSmulan = document.getElementById("secondSceneSmulan");

    firstSceneSmulan.style.display = "none";
    secondSceneSmulan.style.display = "block";
}

function showThirdSceneSmulan() {
    const secondSceneSmulan = document.getElementById("secondSceneSmulan");
    const thirdSceneSmulan = document.getElementById("thirdSceneSmulan");

    secondSceneSmulan.style.display = "none";
    thirdSceneSmulan.style.display = "block";
}

// In the kitchen

function showInTheKitchen() {
    const thirdSceneSmulan = document.getElementById("thirdSceneSmulan");
    const inTheKitchen = document.getElementById("inTheKitchen");

    thirdSceneSmulan.style.display = "none";
    inTheKitchen.style.display = "block";
}

function showFindTheBowl() {
    const inTheKitchen = document.getElementById("inTheKitchen");
    const findTheBowl = document.getElementById("findTheBowl");

    inTheKitchen.style.display = "none";
    findTheBowl.style.display = "block";
}

function showBowlAlternative() {
    const findTheBowl = document.getElementById("findTheBowl");
    const bowlAlternative = document.getElementById("bowlAlternative");

    findTheBowl.style.display = "none";
    bowlAlternative.style.display = "block";
}

function showOnTheTable() {
    const bowlAlternative = document.getElementById("bowlAlternative");
    const onTheTable = document.getElementById("onTheTable")

    bowlAlternative.style.display = "none"
    underTheTable.style.display = "none";
    onTheTable.style.display = "block"
}

function showUnderTheTable() {
    const bowlAlternative = document.getElementById("bowlAlternative");
    const underTheTable = document.getElementById("underTheTable");

    bowlAlternative.style.display = "none";
    underTheTable.style.display = "block";
}


// On the table

function showOnTableSecond() {
    const onTheTable = document.getElementById("onTheTable");
    const onTheTableSecond = document.getElementById("onTheTableSecond");

    onTheTable.style.display = "none";
    onTheTableSecond.style.display = "block";
}

function showCrumbsOnTable() {
    const onTheTableSecond = document.getElementById("onTheTableSecond");
    const crumbsOnTable = document.getElementById("crumbsOnTable");

    onTheTableSecond.style.display = "none";
    crumbsOnTable.style.display = "block";
}

function showOnTableThird() {
    const crumbsOnTable = document.getElementById("crumbsOnTable");
    const showOnTableThird = document.getElementById("showOnTableThird");

    crumbsOnTable.style.display = "none";
    onTableThird.style.display = "block";
}

function showOverviewOverAllRooms() {
    const showOnTableThird = document.getElementById("showOnTableThird");
    const showOverviewOverAllRooms = document.getElementById("showOverviewOverAllRooms");

    onTableThird.style.display = "none";
    overviewOverAllRooms.style.display = "block";
}

// Overview over all the rooms

function showBedroomBeforeItem() {
    const showOverviewOverAllRooms = document.getElementById("showOverviewOverAllRooms");
    const showBedroomBeforeItem = document.getElementById("showBedroomBeforeItem");

    overviewOverAllRooms.style.display = "none";
    bedroomBeforeItem.style.display = "block";
}

// Bedroom

function showBedroomAfterItem() {
    const showBedroomBeforeItem = document.getElementById("showBedroomBeforeItem");
    const showBedroomAfterItem = document.getElementById("showBedroomAfterItem");

    bedroomBeforeItem.style.display = "none";
    overviewOverAllRooms.style.display = "none";
    goBackButton.style.display = "none";
    bedroomAfterItem.style.display = "block";
}

function pickUpNachoBag() {
    const showBedroomAfterItem = document.getElementById("showBedroomAfterItem");
    const pickUpNachoBag = document.getElementById("pickUpNachoBag");

    bedroomAfterItem.style.display = "block";
    goBackButton.style.display = "block";
    nachoBag.style.display = "none";
}

function backTooOverviewOverAllRooms() {
    const pickUpNachoBag = document.getElementById("pickUpNachoBag");
    const overviewOverAllRooms = document.getElementById("overviewOverAllRooms");

    nachoBag.style.display = "none";
    goBackButton.style.display = "block";
    overviewOverAllRooms.style.display = "block";
}


