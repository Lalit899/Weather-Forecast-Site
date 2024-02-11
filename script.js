document.addEventListener("DOMContentLoaded", function() {
    // Show loader
    var loader = document.getElementById("loader");
    loader.style.opacity = "1";

    // Hide loader after 2 seconds
    setTimeout(function() {
        loader.style.opacity = "0";
        // Hide loader after transition completes
        setTimeout(function() {
            loader.style.display = "none";
        }, 1000); // 1s transition time
    }, 2500);
});


document.addEventListener("DOMContentLoaded", function() {
    var btn1 = document.getElementById("btn1");
    
    btn1.addEventListener("mousedown", function() {
        btn1.classList.add("clicked"); // Add 'clicked' class to apply scale animation

        // After a short delay, remove 'clicked' class to return to original size
        setTimeout(function() {
            btn1.classList.remove("clicked");
            btn1.classList.add("btn1");
        }, 930); // 1200 milliseconds matches the transition duration in CSS
    });
});


function getWeather() {
    
    const ApiKey = "d5b31c969080dfe4da7c95bccec2f144";
    const cityName = document.getElementById("cityInput").value;
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApiKey}`;

            if (navigator.onLine) { 
                console.log("online!!");
                document.getElementById("bgvideo").style.display="block";
                document.getElementById("result").style.display="block";
                document.getElementById("st1").style.display="none";
                document.getElementById("citynotfound").style.display="none";
                const errorpage = document.getElementById("error_page");
                errorpage.style.display="none";


            fetch(ApiUrl)
                .then(response => response.json())
                .then(data => {
                    const weatherInfo = document.getElementById("weatherInfo");
                    
                    if (data.cod === "404") {
                        document.getElementById("citynotfound").style.display="flex";
                        document.getElementById("result").style.display="none";
                        const errorpage = document.getElementById("error_page");
                        errorpage.style.display="none";
                        document.getElementById("bgvideo").style.display="none";
                        document.getElementById("st1").style.display="none";
                    } else {
                        const description = data.weather[0].description;
                        const temperature = (data.main.temp - 273.15).toFixed(0); // Convert temperature to Celsius
                        const humidity = data.main.humidity;
                        const windspeed = data.wind.speed;
                        const weather_icon = data.weather[0].icon;
                        const weather_main = data.weather[0].main;
                        const city = data.name;
                        const country = data.sys.country;


                    switch(weather_icon) {
                        case "01d":
                            img = document.getElementById("i01d").style.display="block";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="flex";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none";
                        break;
                        case "01n":
                        vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="flex";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none";

                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="block";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            
                        break;
                        case "02d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="block";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="flex";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "02n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="block";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="flex";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "03d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="block";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="flex";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "03n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="block";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="flex";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "04d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="block";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="flex";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "04n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="block";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="flex";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "09d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="block";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="flex"
                        break;
                        case "09n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="block";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="flex"
                        break;
                        case "10d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="block";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="flex";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "10n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="block";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="flex";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "11d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="block";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="flex";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "11n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="block";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="flex";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "13d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="block";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="flex";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "13n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="block";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="none";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="flex";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "50d":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="block";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="flex";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        case "50n":
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="block";
                            img = document.getElementById("error404").style.display="none";

                            vid = document.getElementById("v1").style.display="none";
                            vid = document.getElementById("v2").style.display="none";
                            vid = document.getElementById("v3").style.display="flex";
                            vid = document.getElementById("v4").style.display="none";
                            vid = document.getElementById("v5").style.display="none";
                            vid = document.getElementById("v6").style.display="none";
                            vid = document.getElementById("v7").style.display="none";
                            vid = document.getElementById("v8").style.display="none";
                            vid = document.getElementById("v9").style.display="none";
                            vid = document.getElementById("v10").style.display="none"
                        break;
                        default:
                        img = document.getElementById("i01d").style.display="none";
                            img = document.getElementById("i01n").style.display="none";
                            img = document.getElementById("i02d").style.display="none";
                            img = document.getElementById("i02n").style.display="none";
                            img = document.getElementById("i03d").style.display="none";
                            img = document.getElementById("i03n").style.display="none";
                            img = document.getElementById("i04d").style.display="none";
                            img = document.getElementById("i04n").style.display="none";
                            img = document.getElementById("i09d").style.display="none";
                            img = document.getElementById("i09n").style.display="none";
                            img = document.getElementById("i10d").style.display="none";
                            img = document.getElementById("i10n").style.display="none";
                            img = document.getElementById("i11d").style.display="none";
                            img = document.getElementById("i11n").style.display="none";
                            img = document.getElementById("i13d").style.display="none";
                            img = document.getElementById("i13n").style.display="none";
                            img = document.getElementById("i50d").style.display="none";
                            img = document.getElementById("i50n").style.display="none";
                            img = document.getElementById("error404").style.display="block";
                    }


                        weatherInfo.innerHTML = `${description}`;
                        weatherInfo1.innerHTML = `${city}, `;
                        weatherInfo2.innerHTML = `${country}`;
                        temp.innerHTML = `${temperature}°C`;
                        weatherInfo4.innerHTML = `${humidity} %`;
                        weatherInfo5.innerHTML = `${windspeed} m/s`;
                        weatherInfo7.innerHTML = `${weather_main}`;
                    }
                })
                .catch(error => {
                    document.getElementById("st1").style.display="flex";
                    const cityname = document.getElementById("cityInput");
                    cityname.focus();
                    console.error("Error fetching data:", error);
                    document.getElementById("result").style.display="none";
                });
        }
            else { 
                console.log("offline!!");
                const errorpage = document.getElementById("error_page");
                errorpage.style.display="flex";
                document.getElementById("bgvideo").style.display="none";
                document.getElementById("result").style.display="none";
                document.getElementById("st1").style.display="none";
                document.getElementById("citynotfound").style.display="none";
        } 
}
