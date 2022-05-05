$(document).ready(function () {

    var init = false;
    // Day, M/D/Y/T format
    var now = moment().format("LLLL");

    // 12 hour clock format
    var now24 = moment().format("H");
    // 24 hour clock format
    var now12 = moment().format("h"); 
    if (init) {
        now24 = 13;
        now12 = 1;
    }

    // Display current date
    var currentDate = $("#currentDay");
    currentDate.text(now);

    // init date and time
    var cal = new Date(); 
    
    // returns 0-23 on a 24 hour clock
    var currentHour = cal.getHours(); 

    // differentiating between past, present, and future
    for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add("past");
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add("present");
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add("future");
        }
    }
});