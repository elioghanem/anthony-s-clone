const itemsArray = [{
    title: "The Killer Assembly",
    price: "10.50",
    image: "./img-anthonys/theKillerAssembly2.jpg"
}, {
    title: "The Killer Assemblyy",
    price: "10.500",
    image: "./img-anthonys/theKillerAssembly2.jpg"
}, ];

let customizationArray = [];

function showCustomizePopup(itemIndex) {
    const item = itemsArray[itemIndex];
    const popupContainer = document.getElementById('customizePopup');
    popupContainer.style.display = 'block';
}

function closeCustomizePopup() {
    const popupContainer = document.getElementById('customizePopup');
    popupContainer.style.display = 'none';
}