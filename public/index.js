window.addEventListener('DOMContentLoaded', function (){

});


function sendName(){
    var nameField = document.getElementById('namefield');
    var postRequest = new XMLHttpRequest();
    var requestURL = '/';
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
        name: nameField.value,
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
          var responseBody = event.target.response;
          alert("Error saving photo on server side: " + responseBody);
        } else {
            document.location.href = "/myGroups";
        //   var photoCardTemplate = Handlebars.templates.photoCard;
        //   var newPhotoCardHTML = photoCardTemplate({
        //     url: photoURL,
        //     caption: caption
        //   });
        //   var photoCardContainer = document.querySelector('.photo-card-container');
        //   photoCardContainer.insertAdjacentHTML('beforeend', newPhotoCardHTML);
        }
    });

    postRequest.send(requestBody);
};

function toggleEntry(element){
    console.log(element);
    var body = element.querySelector(".entryBody");
    element.querySelector(".arrowIcon").classList.toggle('rotate90');
    body.classList.toggle('showEntryBody');    
};

/* Interactions for the buttons */
document.getElementById('find-group-button').onClick=toFindGroupsPage;
document.getElementById('create-group-button').onClick=toCreateGroupsPage;
document.getElementById('change-user-button').onClick=toHomePage;

function toFindGroupsPage() {
    document.location.href = "/findGroups";
}

function toCreateGroupsPage() {
    document.location.href = "/createGroup";
}

function toHomePage() {
    document.location.href = "/";
}

