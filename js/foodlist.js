var addButton = document.querySelector('.add-food');

// whenever the button is clicked, run this function.
addButton.onclick = function () {
    // create the li element (starts emptys)
    var newLi = document.createElement('li');

    // find the input
    var myInput = document.querySelector('.food-input');

    // set li's text to the input's value
    // (the value of a text input is whatever the user typed)
    newLi.innerHTML = myInput.value;

    // delete the input's text (for the next food)
    myInput.value = "";

    // find parent list
    var parent = document.querySelector('.food-list');

    // add li to the parent list
    parent.appendChild(newLi);
};


// "querySelectorAll" since there are multiple buttons
var deleteButtons = document.querySelectorAll('.food-list button');

// for each delete button...
deleteButtons.forEach(function (oneButton) {
    // add an "onclick" event to it
    oneButton.onclick = function () {
        // find parent list
        var parent = document.querySelector('.food-list');

        // find the button that was clicked
        // ("currentTarget" is the target of the click event)
        var buttonThatWasClicked = event.currentTarget;

        // find the li
        // (the li is the parent of the button)
        var myLi = buttonThatWasClicked.parentNode;

        // remove child from lists
        parent.removeChild(myLi);
    };
});
