function handleOpenSearch() {
    openSearch();
    animateSeach();
}

function openSearch() {
    var searchBar = document.getElementById("searchBar");
    if (searchBar.style.display === "inline") {
        searchBar.style.display = "none";
    } else {
        searchBar.style.display = "inline"
    }  
}

function animateSeach() {
    var x = document.getElementById("inputText");
    
    if (x.className === "search-input") { 
        x.style.transition = "width .4s cubic-bezier(.4,0,.2,1)";
        x.style.width = "300px";
    }
}

function handleCloseClick() {
    window.setTimeout(closeSearch,  150);  
    clearSearch();
    animateClose();
}

function closeSearch() {
    var searchBar = document.getElementById("searchBar");
    searchBar.style.display = "none";
}

function clearSearch() {
    var inputText = document.getElementById("inputText");
    inputText.value = null;
}

function animateClose() {
    var searchInput = document.getElementById("inputText");

    if (searchInput.className === "search-input") {
        searchInput.style.transition = "width .2s cubic-bezier(.4,0,.2,1)";
        searchInput.style.width = "0px";
    }
}