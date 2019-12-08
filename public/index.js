window.addEventListener('DOMContentLoaded', function (){
    
});


function toggleEntry(element){
    console.log(element);
    var body = element.querySelector(".entryBody");
    element.querySelector(".arrowIcon").classList.toggle('rotate90');
    body.classList.toggle('showEntryBody');    
};