var currentTimeEl = $("#current-time");
var timeBlockEl = $('#container') 
var currentHrEl =




setInterval (function() {
    currentTimeEl.text(moment().format("MMMM Do YYYY. hh:mm:ss a"));
}, 1000);
// console.log(currentTimeEl)

// for loop to include all the hrs
for (var i=9; i <= 17; i ++){
    // console.log(i)
}

function addElement (){
    var node = document.createElement("<div>");
    var textNode = document.createTextNode("container")
    node.appendChild(textNode);
    document.getElementById("container").appendChild(node);

    console.log(addElement)
}

