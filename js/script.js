$('document').ready(function(){
  var api_key = "7b7604c83c43da3aa83f05c4a3af2318";
  var weather_url = "https://api.openweathermap.org/data/2.5/forecast";
  $.get(weather_url, {
    "q" : "Amsterdam", 
    "units": "metric", 
    "appid" : api_key
  }, function(result){
   
    var answer = result.list;
    var filtered = answer[0];
  
    var temperature = filtered.main.temp;
    var weather = filtered.weather[0].main;
    var description = filtered.weather[0].description;

    $('#amsterdamTemp').text(temperature + "C");
    $('#amsterdamText').text(weather + ", "+description);
  })

  $.get(weather_url, {
    "q" : "New York,US", 
    "units": "metric", 
    "appid" : api_key
  }, function(result){
   
    var answer = result.list;
    var filtered = answer[0];
   
    var temperature = filtered.main.temp;
    var weather = filtered.weather[0].main;
    var description = filtered.weather[0].description;

    $('#newyorkTemp').text(temperature + "C");
    $('#newyorkText').text(weather + ", "+description);
  })

  $.get(weather_url, {
    "q" : "Dublin", 
    "units": "metric", 
    "appid" : api_key
  }, function(result){
    
    var answer = result.list;
    var filtered = answer[0];
   
    var temperature = filtered.main.temp;
    var weather = filtered.weather[0].main;
    var description = filtered.weather[0].description;

    $('#dublinTemp').text(temperature + "C");
    $('#dublinText').text(weather + ", "+description);
  })
  $.ajax({
    type : "GET", 
    url : "https://blockchain.info/ticker", 
    dataType : "json",
    crossDomain: true,

  }).done(function(response){
    $('#bitcoinOutput').text(response.USD.buy);
  })
  
})