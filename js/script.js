// var myP = document.querySelector('p');
var myP = document.querySelector('#paragraph');
console.log( myP );


var myLink = document.querySelector('.link');
                           // new value for attribute
                           //            |
myLink.setAttribute('href', 'https://www.google.com/');
             //        |
             // attribute name


var myButton = document.querySelector('#add-item-button');

// this function will be called every time the user clicks the button
myButton.onclick = function () {
    var myImg = document.querySelector('img');
    myImg.setAttribute('src', 'https://media.giphy.com/media/3o85xKPAEDCuXxRepO/giphy.gif');
};



var removePsButton = document.querySelector('.remove-ps');

removePsButton.onclick = function () {
    var badP = document.querySelector('.bad-p');

    // parent
    //   |
    contentDiv.removeChild(badP);
                    //       |
                    // child tag to remove

    var body = document.querySelector('body');
    body.removeChild(myP);
};



var addH2Button = document.querySelector('.add-h2');

addH2Button.onclick = function () {
                                 // tag name
                                 //    |
    var myH2 = document.createElement('h2');
    myH2.innerHTML = 'This is <i>my</i> H2 tag.';

    var contentDiv = document.querySelector('#content');

    // parent
    //   |
    contentDiv.appendChild(myH2);
                    //       |
                    // new tag to add

    console.log( myH2 );

};
