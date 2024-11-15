# Where´s My Taco? 
## An interactive project to learn Javascript.

### About:

**In this project we would create an interactive experience using Javascript. The user must use buttons to get to different rooms to help the character Smulan, to find his taco.**

### Future ambitions with the project:
**Although the task was focused on javascript, the project contains alot of html and css. I want to continue with this project to gradually rewrite functions from HTML/Css to Javascript code.**

### Bugs and functions to be fixed: 
**From the start page, you can scroll down to other divs. In the future I want these functions to be fixed.**

**When the game ends and you choose to return to the start page, only the background image from the homepage with strange margins is displayed. In the future, I want all features to appear on the home page.**

**I want to make "The closet" locked until ypu find all the items in the other rooms**

### Message too David:
**Hej! Som vi sa sist under handledningen så lyckades jag komprimera min JS-kod från 300 rader till några få. Detta gör ju att JS ser väldigt fjutig ut jämfört med min HTML-kod. Nedan bifogar jag den gamla koden som jag jobbade på innan jag hittade den smarta lösningen! Enjoy helping Smulan! Mvh Kasper**

### Old code that none/block divs:
// Startpage and the introduction, gammal kod

// function showFirstSceneSmulan() {
//     const homePage = document.getElementById("homePage");
//     const firstSceneSmulan = document.getElementById("firstSceneSmulan");

//     homePage.style.display = "none";
//     firstSceneSmulan.style.display = "block";
// }

// function showSecondSceneSmulan() {
//     const firstSceneSmulan = document.getElementById("firstSceneSmulan");
//     const secondSceneSmulan = document.getElementById("secondSceneSmulan");

//     firstSceneSmulan.style.display = "none";
//     secondSceneSmulan.style.display = "block";
// }

// function showThirdSceneSmulan() {
//     const secondSceneSmulan = document.getElementById("secondSceneSmulan");
//     const thirdSceneSmulan = document.getElementById("thirdSceneSmulan");

//     secondSceneSmulan.style.display = "none";
//     thirdSceneSmulan.style.display = "block";
// }


// In the kitchen




// function showInTheKitchen() {
//     const thirdSceneSmulan = document.getElementById("thirdSceneSmulan");
//     const inTheKitchen = document.getElementById("inTheKitchen");

//     thirdSceneSmulan.style.display = "none";
//     inTheKitchen.style.display = "block";
// }

// function showFindTheBowl() {
//     const inTheKitchen = document.getElementById("inTheKitchen");
//     const findTheBowl = document.getElementById("findTheBowl");

//     inTheKitchen.style.display = "none";
//     findTheBowl.style.display = "block";
// }

// function showBowlAlternative() {
//     const findTheBowl = document.getElementById("findTheBowl");
//     const bowlAlternative = document.getElementById("bowlAlternative");

//     findTheBowl.style.display = "none";
//     bowlAlternative.style.display = "block";
// }

// function showOnTheTable() {
//     const bowlAlternative = document.getElementById("bowlAlternative");
//     const onTheTable = document.getElementById("onTheTable")

//     bowlAlternative.style.display = "none"
//     underTheTable.style.display = "none";
//     onTheTable.style.display = "block"
// }

// function showUnderTheTable() {
//     const bowlAlternative = document.getElementById("bowlAlternative");
//     const underTheTable = document.getElementById("underTheTable");

//     bowlAlternative.style.display = "none";
//     underTheTable.style.display = "block";
// }



// On the table



// function showOnTableSecond() {
//     const onTheTable = document.getElementById("onTheTable");
//     const onTheTableSecond = document.getElementById("onTheTableSecond");

//     onTheTable.style.display = "none";
//     onTheTableSecond.style.display = "block";
// }

// function showCrumbsOnTable() {
//     const onTheTableSecond = document.getElementById("onTheTableSecond");
//     const crumbsOnTable = document.getElementById("crumbsOnTable");

//     onTheTableSecond.style.display = "none";
//     crumbsOnTable.style.display = "block";
// }

// function showOnTableThird() {
//     const crumbsOnTable = document.getElementById("crumbsOnTable");
//     const showOnTableThird = document.getElementById("showOnTableThird");

//     crumbsOnTable.style.display = "none";
//     onTableThird.style.display = "block";
// }

// function showOverviewOverAllRooms() {
//     const showOnTableThird = document.getElementById("showOnTableThird");
//     const showOverviewOverAllRooms = document.getElementById("showOverviewOverAllRooms");

//     onTableThird.style.display = "none";
//     overviewOverAllRooms.style.display = "block";
// }




// Overview over all the rooms




// function showBedroomBeforeItem() {
//     const showOverviewOverAllRooms = document.getElementById("showOverviewOverAllRooms");
//     const showBedroomBeforeItem = document.getElementById("showBedroomBeforeItem");

//     overviewOverAllRooms.style.display = "none";
//     bedroomBeforeItem.style.display = "block";
// }

// function showBathroomBeforeItem() {
//     const showOverviewOverAllRooms = document.getElementById("showOverviewOverAllRooms");
//     const showBathroomBeforeItem = document.getElementById("showBathroomBeforeItem");

//     bedroomBeforeItem.style.display = "none"
//     bedroomAfterItem.style.display = "none"
//     overviewOverAllRooms.style.display = "none";
//     secondGoBackButton.style.display = "none";
//     livingroomItem.style.display = "none";
//     bathroomBeforeItem.style.display = "block";
// }




// Bedroom



// function showBedroomAfterItem() {
//     const showBedroomBeforeItem = document.getElementById("showBedroomBeforeItem");
//     const showBedroomAfterItem = document.getElementById("showBedroomAfterItem");

//     bedroomBeforeItem.style.display = "none";
//     overviewOverAllRooms.style.display = "none";
//     goBackButton.style.display = "none";
//     bedroomAfterItem.style.display = "block";
// }

// function pickUpNachoBag() {
//     const showBedroomAfterItem = document.getElementById("showBedroomAfterItem");
//     const pickUpNachoBag = document.getElementById("pickUpNachoBag");

//     bedroomAfterItem.style.display = "block";
//     goBackButton.style.display = "block";
//     nachoBag.style.display = "none";
// }

// function backTooOverviewOverAllRooms() {
//     const pickUpNachoBag = document.getElementById("pickUpNachoBag");
//     const overviewOverAllRooms = document.getElementById("overviewOverAllRooms");

//     nachoBag.style.display = "none";
//     goBackButton.style.display = "block";
//     overviewOverAllRooms.style.display = "block";
// }


// The Living Room



// function showLivingroomItem() {
//     const showOverviewOverAllRooms = document.getElementById("overviewOverAllRooms");
//     const showLivingroomItem = document.getElementById("livingroomItem");

//     bedroomBeforeItem.style.display = "none"
//     bedroomAfterItem.style.display = "none"
//     overviewOverAllRooms.style.display = "none";
//     secondGoBackButton.style.display = "none";
//     livingroomItem.style.display = "block";
// }

// function pickUpSalsa() {
//     const showLivingroomItem = document.getElementById("livingroomItem");
//     const pickUpSalsa = document.getElementById("pickUpSalsa");

//     livingroomItem.style.display = "block";
//     secondGoBackButton.style.display = "block";
//     salsaJar.style.display = "none";
// }



// The Bathroom




// function showBathroomAfterItem() {
//     const showBathroomBeforeItem = document.getElementById("showBathroomBeforeItem");
//     const showBathroomAfterItem = document.getElementById("showBathroomAfterItem");

//     bathroomBeforeItem.style.display = "none"
//     overviewOverAllRooms.style.display = "none";
//     thirdGoBackButton.style.display = "none";
//     bathroomAfterItem.style.display = "block"
// }

// function pickUpTheVeggies() {
//     const showBathroomAfterItem = document.getElementById("showBathroomAfterItem");
//     const pickUpTheVeggies = document.getElementById("pickUpTheVeggies");

//     bathroomAfterItem.style.display = "block";
//     thirdGoBackButton.style.display = "block";
//     theVeggies.style.display = "none";
// }




// The Attic 



// function showAtticBeforeItem() {
//     const showAtticBeforeItem = document.getElementById("showAtticBeforeItem");
//     const pickUpThePillow = document.getElementById("pickUpThePillow");

//     bedroomAfterItem.style.display = "none"
//     livingroomItem.style.display = "none";
//     bathroomBeforeItem.style.display = "none"
//     bathroomAfterItem.style.display = "none"
//     fluffyPillow.style.display = "block"
//     atticBeforeItem.style.display = "block"
//     overviewOverAllRooms.style.display = "none";
// }

// function pickUpThePillow() {
//     const pickUpThePillow = document.getElementById("pickUpThePillow");
//     const showAtticAfterItem = document.getElementById("showAtticAfterItem");

//     fluffyPillow.style.display = "none"
//     atticBeforeItem.style.display = "none"
//     fourthGoBackButton.style.display = "none";
//     pileOfTortillas.style.display = "block"
//     atticAfterItem.style.display = "block"
// }

// function pickUpPileOfTortillas() {
//     const showAtticAfterItem = document.getElementById("showAtticAfterItem");
//     const pickUpPileOfTortillas = document.getElementById("pickUpPileOfTortillas");

//     fluffyPillow.style.display = "none"
//     atticBeforeItem.style.display = "none"
//     pileOfTortillas.style.display = "none"
//     fourthGoBackButton.style.display = "block";
//     atticAfterItem.style.display = "block"
// }

// function backTooOverviewOverAllRooms() {
//     const pickUpPileOfTortillas = document.getElementById("pickUpPileOfTortillas");
//     const overviewOverAllRooms = document.getElementById("overviewOverAllRooms");

//     pileOfTortillas.style.display = "none";
//     fourthGoBackButton.style.display = "none";
//     overviewOverAllRooms.style.display = "block";
// }



// The closet



// function showClosetBeforeItem() {
//     const overviewOverAllRooms = document.getElementById("overviewOverAllRooms");
//     const showClosetBeforeItem = document.getElementById("showClosetBeforeItem");

//     overviewOverAllRooms.style.display = "none";
//     closetBeforeItem.style.display = "block";
// }

// function showClosetAfterItem() {
//     const showClosetBeforeItem = document.getElementById("showClosetBeforeItem");
//     const showClosetAfterItem = document.getElementById("showClosetAfterItem");

//     closetAfterItem.style.display = "block";
//     closetBeforeItem.style.display = "none";
// }

// function showTheNote() {
//     const showClosetAfterItem = document.getElementById("showClosetAfterItem");
//     const showTheNote = document.getElementById("showTheNote");

//     closetAfterItem.style.display = "none";
//     theNoteInCloset.style.display = "block";
// }

// function goToEnding() {
//     const showTheNote = document.getElementById("showTheNote");
//     const goToEnding = document.getElementById("goToEnding");

//     theNoteInCloset.style.display = "none";
//     lastScene.style.display = "block";
// }

// function backToHomepage() {
//     const goToEnding = document.getElementById("goToEnding");
//     const homePage = document.getElementById("homePage");

//     homePage.style.display = "block";
//     lastScene.style.display = "none";
// }

// function toThanksForPlaying() {
//     const lastScene = document.getElementById("lastScene");
//     const thanksForPlaying = document.getElementById("thanksForPlaying");

//     lastScene.style.display = "none";
//     thanksForPlaying.style.display = "block";
// }

## Links:

This site was built using [GitHub Pages](https://kaspvik.github.io/WheresMyTaco/).

Images and design was built with [Canva](https://www.canva.com/).

Demo link to the project: https://github.com/kaspvik/WheresMyTaco