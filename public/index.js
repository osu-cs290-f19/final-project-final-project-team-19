window.addEventListener('DOMContentLoaded', function (){
    
});


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

