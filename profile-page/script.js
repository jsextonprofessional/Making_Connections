console.log("page loaded...");

var newName = document.querySelector("#username");

function changeName() {
    username.innerText = "Not Jane Doe";
}

// Clicking either x or check icon will remove line from the requests list
// Change number of Connection Requests
// Change number of Your Connections

var reqs = document.querySelector("#requests");
var frenz = document.querySelector("#friends");

function check(id){
    var element = document.querySelector(id);
    element.remove();
    reqs.innerText--;
    frenz.innerText++;
}

function deny(id){
    var element = document.querySelector(id);
    element.remove();
    reqs.innerText--;
}