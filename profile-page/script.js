console.log("page loaded...");

var newName = document.querySelector("#username");

function changeName() {
    username.innerText = "Not Jane Doe";
}

// Clicking either x or check icon will remove line from the requests list
function removeLine(element) {
    element.remove();
}
// Change number of Connection Requests
// Change number of Your Connections