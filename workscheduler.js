var currentTimeEl = $("#current-time");
var container = $('.container') ;
//var timeBlock =$('.time-block');
var saveBtn = $('.saveBtn');


setInterval (function() {
    currentTimeEl.text(moment().format("MMMM Do YYYY. hh:mm:ss a"));
}, 1000);
    // console.log(currentTimeEl)



    // for loop to include all the hrs
    
for (var i=5; i <= 23; i ++){    
    // creating the elements and inserting
    var timeBlock = $('<div>').attr('id', 'hour-'+i).attr('class', 'row time-block')
    var span = $('<span>')
    var timeHour = $('<div>').attr('class', 'col-md-1 hour').text(moment(i.toString(), 'k kk').format('h'))
    var textArea = $('<textarea>').attr('class', 'col-md-10 description');
    var saveBtn = $('<button>').attr('class', 'btn saveBtn col-md-1').text('Save');

    //timeBlock
    timeHour.append(span)
    timeBlock.append(timeHour, textArea, saveBtn)
    container.append(timeBlock)

    if(i<12) {
        span.text(' AM')
    } else {
        span.text(' PM')
    }
}

$('.saveBtn').on('click', function() {
    var value = $(this).siblings('.description').val();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, value);
    console.log(time, value)
})

function checkHour() {
    var currentHour = moment().hours();

    $('.time-block').each(function() {
        var hourBlock = parseInt($(this).attr('id').split('-')[1]);

        if(hourBlock < currentHour) {
            $(this).addClass('past')
            console.log('hello')
        } else if(hourBlock === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })
}
checkHour();
$('#hour-5 .description').val(localStorage.getItem("hour-5"))
$('#hour-6 .description').val(localStorage.getItem("hour-6"))
$('#hour-7 .description').val(localStorage.getItem("hour-7"))
$('#hour-8 .description').val(localStorage.getItem("hour-8"))
$('#hour-9 .description').val(localStorage.getItem("hour-9"))
$('#hour-10 .description').val(localStorage.getItem("hour-10"))
$('#hour-11 .description').val(localStorage.getItem("hour-11"))
$('#hour-12 .description').val(localStorage.getItem("hour-12"))
$('#hour-13 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-13"))
$('#hour-14 .description').val(localStorage.getItem("hour-14"))
$('#hour-15 .description').val(localStorage.getItem("hour-15"))
$('#hour-16 .description').val(localStorage.getItem("hour-16"))
$('#hour-17 .description').val(localStorage.getItem("hour-17"))
$('#hour-18 .description').val(localStorage.getItem("hour-18"))
$('#hour-19 .description').val(localStorage.getItem("hour-19"))
$('#hour-20 .description').val(localStorage.getItem("hour-20"))
$('#hour-21 .description').val(localStorage.getItem("hour-21"))
$('#hour-22 .description').val(localStorage.getItem("hour-22"))
$('#hour-23 .description').val(localStorage.getItem("hour-23"))





//  creating an function that listens for any clicks with in the container. 
$('.container').on('click','button', function(event){

    // access the curent event 
    event.target

});