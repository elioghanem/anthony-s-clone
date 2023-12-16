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
    popupContainer.style.top = '430px';

}

function closeCustomizePopup() {
    const popupContainer = document.getElementById('customizePopup');
    popupContainer.style.top = '-150%';
}

function toggleCheckbox() {
    var checkbox = document.getElementById('myCheckbox');
    var checkboxTitle = document.querySelector('.checkbox-title');
    var labelPrice = document.querySelector('.label__price');

    if (checkbox.checked) {
        checkboxTitle.classList.add('checkbox-selected');
        labelPrice.classList.add('price-selected');
    } else {
        checkboxTitle.classList.remove('checkbox-selected');
        labelPrice.classList.remove('price-selected');
    }
}