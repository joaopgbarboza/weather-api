async function fetchWeather(){
    try {
        const getWeather = $("#getWeather").val();
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getWeather}&appid=c262cd450411782c2e895b772fea68e8&units=metric`);
        
        const data = await resp.json();


        const weatherTemp= Math.round(data.main.temp) + '°C';
        const weatherInfo= data.weather[0].main;
        const cityName = data.name;
        const humidityInfo = data.main.humidity + '%';
        const windInfo = data.wind.speed + 'km/h';
        const weatherIcon = $("#weatherIcon");

        $("#weatherTemp").text(weatherTemp);
        $("#weatherInfo").text(weatherInfo);
        $("#cityName").text(cityName);
        $("#humidityInfo").text(humidityInfo);
        $("#windInfo").text(windInfo);

        /*if(weatherInfo == "Clear"){
            weatherIcon.attr("src", "./weathericons/Sun.png");

        }
        else if (weatherInfo == "Clouds"){
           weatherIcon.attr("src", "./weathericons/Cloud.png");

        }
        else if (weatherInfo == "Rain"){
            weatherIcon.attr("src", "./weathericons/Cloud angled rain.png");

        }
        else if (weatherInfo == "Drizzle"){
            weatherIcon.attr("src", "./weathericons/Cloud little rain.png");

        }
        else if (weatherInfo == "Snow"){
            weatherIcon.attr("src", "./weathericons/Big snow.png");

        }*/

        const weatherIcons = {
            "Clear": "./weathericons/Sun.png",
            "Clouds": "./weathericons/Cloud.png",
            "Rain": "./weathericons/Cloud angled rain.png",
            "Drizzle": "./weathericons/Cloud little rain.png",
            "Snow": "./weathericons/Big snow.png"
        };

        weatherIcon.attr("src", weatherIcons[weatherInfo]);


    }
    catch (error){
        console.error(error.message);
    }


}