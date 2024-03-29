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

function joinGroup(groupUuid){
    var postRequest = new XMLHttpRequest();
    var requestURL = '/findGroups/join';
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
        groupId: groupUuid,
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');
    postRequest.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
          var responseBody = event.target.response;
          alert("Error saving photo on server side: " + responseBody);
        } else {
            var responseBody = event.target.response;
            alert(responseBody);
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

function toFindGroupsPage() {
    document.location.href = "/findGroups";
}

function toCreateGroupsPage() {
    document.location.href = "/createGroup";
}

function toHomePage() {
    document.location.href = "/";
}

