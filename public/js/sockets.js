window.onload = function() {
 
    var messages = [];
    var socket = io.connect();
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    
    function opIconToMirrorIcon(icon)
    {
        var i;
        switch(icon)
        {
            case '01': i = ''; break;
            case '': i = ''; break;    
        }
        
        return i;
    }
    
    function putFdata(className, data)
    {
        var c = $('.' + className);
        c.find('.day').text(data.dt_txt.substring(10));
        c.find('.degree span').text(data.main.temp);
        c.find('.min-deg').text(data.main.temp_min);
    }
    
    forecastBuild = function(forecast){
        $('.forecast-content .location').text(forecast.city.name);
        var c = forecast.list[0];
        $('.degree .num').text(c.main.temp);
        $('.rain').text(c.main.temp);
        $('.wind').text(c.wind.speed);
        $('.wind-direction').text(c.wind.deg);
        
        putFdata('ftime1', forecast.list[1]);
        putFdata('ftime2', forecast.list[2]);
        putFdata('ftime3', forecast.list[3]);
        putFdata('ftime4', forecast.list[4]);
    };
 
    socket.on('weather', function (data) {
       console.log(data); 
       forecastBuild(data);
    });
    
    socket.on('rpi_temperature', function (data) {
       console.log(data);  
       var temperature = Math.round(data * 100) / 100;
       tChartSeries.addPoint([(new Date()).getTime(), temperature], true, true);
    });
    
    
};