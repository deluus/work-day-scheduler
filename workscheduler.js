var currentTimeEl = $("#current-time");
var container = $('.container') ;
var timeBlock =$('.time-block');


   



setInterval (function() {
    currentTimeEl.text(moment().format("MMMM Do YYYY. hh:mm:ss a"));
}, 1000);
// console.log(currentTimeEl)

var meridiem = "";
if (i <11 ){
    meridiem = i + "AM";
}
else {
    meridiem = i + "PM"
};
console.log(meridiem)




// for loop to include all the hrs
for (var i=9; i <= 17; i ++){
    // console.log(i)




    var savedValueHr = localStorage.getItem("hour " + i);
    // console.log(savedValueHr)


}










//  creating an function that listens for any clicks with in the container. 
$('.container').on('click','button', function(event){

    // access the curent event 
    event.target

});