var currentTimeEl = $("#current-time");
var timeBlockEl = $('.container') ;
var currentHrEl = "";
var textEL =

   



setInterval (function() {
    currentTimeEl.text(moment().format("MMMM Do YYYY. hh:mm:ss a"));
}, 1000);
// console.log(currentTimeEl)



// for loop to include all the hrs
for (var i=9; i <= 17; i ++){
    console.log(i)

}
    var savedValueHr = localStorage.getItem("hour - " + i);

