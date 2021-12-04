var currentTimeEl = $("#current-time");
var container = $('.container') ;
var timeBlock =$('.time-block');
var saveBtn = $('.saveBtn');



   



setInterval (function() {
    currentTimeEl.text(moment().format("MMMM Do YYYY. hh:mm:ss a"));
}, 1000);
    // console.log(currentTimeEl)

var div = document.createElement("div")
var p = document.createElement("p")
div.append('.container', p)
console.log(div.childNodes)


    // for loop to include all the hrs
    for (var i=9; i <= 17; i ++){
        // console.log(i)
    


    //  IF to detrmine if time is in the AM or PM 
var meridiem = "";
if (i <= 1159 ){
    meridiem = i + "AM";
}
else {
    meridiem = i + "PM"
};
    // console.log(meridiem)

    // IF to detrmine the color code for past, present, and future
    var textarea =$("<textarea>")
    // var textarea = "";
    if( i < currentTimeEl){
        textarea.addClass = ("past");
    }
    else if ( i == currentTimeEl){
        textarea.addClass = "present";
    }
    else if ( i > currentTimeEl){
        textarea.addClass = "future"
    }
    //  console.log(textarea)

    


      






    var savedValueHr = localStorage.getItem("hour " + i);
     // console.log(savedValueHr)
     if ( !savedValueHr) {
         savedValueHr = "";
     }
    // console.log(savedValueHr = " no hours")

}










//  creating an function that listens for any clicks with in the container. 
$('.container').on('click','button', function(event){

    // access the curent event 
    event.target

});