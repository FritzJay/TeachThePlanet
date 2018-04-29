// Close Button functions
function handleClearFunctions() {
    clearText();
    hideButton();
}

    // Clear text in input 
    function clearText() {
        var inputText = document.getElementById("inputText");
        inputText.value = null;
    }

    // Hide close button onclick 
    function hideButton() {
        var hideCloseBtn = document.getElementById("closeButton")
        hideCloseBtn.style.visibility = "hidden";
        }


// Show  close button on input focus    
function showButton() {
    var x = document.getElementById("closeButton")
    x.style.visibility = "visible";
}

// Checking if text is present if nothing remove close button
function checkInput() {
    if (inputText.value === "") {
        hideButton();
    } else {
        showButton();
    }
}

// Filter Items
function sortItems() {
    //Declare variables 
    var input, filter, sectionContainer, iconContainers, iconContainer, iconName, i;
    input =  document.getElementById('inputText');
    filter = input.value.toUpperCase();
    sectionContainer = document.getElementById("sectionContainer");
    iconContainers = sectionContainer.getElementsByTagName('div');

    // Loop through all div items, and hide those who don't match the search query
    for (i = 0; i < iconContainers.length; i++) {
        console.log(i);
        iconContainer = iconContainers[i];
        iconName = iconContainer.getElementsByTagName("p")[0].innerText;
        if (iconName.toUpperCase().indexOf(filter) > -1) {
            iconContainer.style.display = ""; 
        } else {
            iconContainer.style.display = "none";
        }
    }
}