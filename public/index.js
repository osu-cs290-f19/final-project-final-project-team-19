window.addEventListener('DOMContentLoaded', function (){
    const groupEntries = document.getElementsByClassName('groupEntry');
    Array.prototype.forEach.call(groupEntries, function(element) {
        console.log(element);
        element.addEventListener('click', toggleEntry(element));
    });
});

function toggleEntry(element){
    element.style.hidden = true;
    alert(element);
};