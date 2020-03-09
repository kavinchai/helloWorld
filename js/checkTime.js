function startTime() {
    var today = new Date();
    var day = today.getDate();
    var month = (today.getMonth() +1)
    var year = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    day = checkTime(day);
    month = checkTime(month);
    year = lowerYear(year);
    
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('display_date').innerHTML =
        day + '/' + month + '/' + year;
    document.getElementById('display_time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);

    sessionStorage.clear();
}
function checkTime(i) {
    if (i < 10){ 
        i = "0" + i; 
    }  // add zero in front of numbers < 10
    return i;
}
function lowerYear(i){
    {i = (i-2000)};
    return i
}