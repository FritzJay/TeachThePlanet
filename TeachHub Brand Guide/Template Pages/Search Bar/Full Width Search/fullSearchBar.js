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