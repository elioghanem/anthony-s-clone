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

    // Clear previous content
    popupContainer.innerHTML = '';

    // Create HTML content using a template string
    const popupContent = `
    <div class="btn__close"><i class="fa-regular fa-circle-xmark" onclick="closeCustomizePopup()"></i></div>
        <div class="popup-content">
            <img src="${item.image}" alt="" class="item__img">
            <h2>${item.title}</h2>
            <label for="customizeOption">Customization Option:</label>
            <input type="text" id="customizeOption">
            <button onclick="saveCustomization('${item.title}')">Save</button>
            <h5>${item.price} USD</h5>
            <button class="add__btn" onclick="addToCart('${item.title}')">ADD TO CART</button>
        </div>
    `;

    // Set the HTML content for the popup container
    popupContainer.innerHTML = popupContent;

    // Display the popup container
    popupContainer.style.display = 'block';
}

function closeCustomizePopup() {
    const popupContainer = document.getElementById('customizePopup');
    popupContainer.style.display = 'none';
}

function saveCustomization(itemTitle) {
    const customizeOptionInput = document.getElementById('customizeOption');
    const customizeOption = customizeOptionInput.value;

    // Add the customization information to the array
    customizationArray.push({ itemTitle, customizeOption });

    // Display the customization information on the page
    const customizationInfo = document.createElement('div');
    customizationInfo.innerHTML = `<p>${itemTitle}: ${customizeOption}</p>`;
    document.body.appendChild(customizationInfo);

    // Close the pop-up container
    closeCustomizePopup();
}

function addToCart(itemTitle) {
    // Implement your addToCart logic here
    // You can use the itemTitle and customizationArray to update the cart
    console.log(`Adding ${itemTitle} to the cart with customization:`, customizationArray);
}
document.querySelector('.cost__btn').addEventListener('click', function() {
    showCustomizePopup(0); // Adjust the index based on the item you want to customize
});