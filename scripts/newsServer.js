var source = "techcrunch";  //"the-next-web" is default
var sortBy = "latest";  //top, latest, popular
var cityName = "San Francisco";


$.get("https://newsapi.org/v1/articles?source=" + source + "&sortBy=" + sortBy +"&apiKey=eba604d3c61e4c06a49c9c2d727b7659", function(data, status){
    console.log(data);  //just for visualization
    console.log(data['articles']['0']['author']);
    
    
});


$.get("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&APPID=a29fff7fa1bce3c0229d7f6f97530e87", function(data, status){
    console.log(data);  //just for visualization
    console.log(data['main']['temp']);
});
