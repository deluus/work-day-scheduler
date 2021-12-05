var currentTimeEl = $("#current-time");
var container = $('.container') ;
//var timeBlock =$('.time-block');
var saveBtn = $('.saveBtn');


setInterval (function() {
    currentTimeEl.text(moment().format("MMMM Do YYYY. hh:mm:ss a"));
}, 1000);
    // console.log(currentTimeEl)



    // for loop to include all the hrs
for (var i=9; i <= 17; i ++){    
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

$('#hour-9 .description').val(localStorage.getItem("hour-9"))






//  creating an function that listens for any clicks with in the container. 
$('.container').on('click','button', function(event){

    // access the curent event 
    event.target

});