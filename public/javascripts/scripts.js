function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('.timer').html(h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}

function getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    var today = dd + '.' + mm + '.' + yyyy;
    $('.date').text(today);
}

function init() {
    startTime();
    getDate();
}

$(document).ready(function(){
   init(); 
});


var weather = (function (data) {
	var api = {};
        var d = data;
        
	function init() {
            
	};

	api.moduleProperty = 1;
	api.moduleMethod = function () {

	};
        
        init();
	return api;
}());