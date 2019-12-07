var nameField = null;
var descriptionField = null;
var submitGroup = null;

window.addEventListener('DOMContentLoaded', function (){
    nameField = document.getElementById('name');
    descriptionField = document.getElementById('description');
    submitGroup = document.getElementById('createGroup');

    document.getElementById('createGroup').addEventListener('click', sendGroupInfo);
});

function sendGroupInfo(){
    var postRequest = new XMLHttpRequest();
    var requestURL = '/createGroup/addGroup';
    postRequest.open('POST', requestURL);

    var requestBody = JSON.stringify({
        name: nameField.value,
        description: descriptionField.value
    });

    postRequest.setRequestHeader('Content-Type', 'application/json');

    postRequest.addEventListener('load', function (event) {
        if (event.target.status !== 200) {
          var responseBody = event.target.response;
          alert("Error saving photo on server side: " + responseBody);
        } else {
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