let button = document.getElementById("button")
button.addEventListener("click", () => { 
    async function apiCall() { 
        let inputValue1 = document.getElementById("input");
        if (inputValue1.value < 1 ){
             alert("Oops!! Please Enter Your City Name")
        }
        else {
        let inputValue = inputValue1.value;
        inputValue1.value =" ";
        let Data = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${'446cc3a23522460ce7b98f24d35642b2'}`;
        let DataCalling = await fetch (Data);
        let FinalResult = await DataCalling.json();
    
        let Country = document.querySelector("#Country");
        Country.textContent = `City Name: ${FinalResult.name}`

        let degree = document.querySelector("#degree");
        degree.textContent = `Climate: ${FinalResult.weather[0].description}`

        let cloud = document.querySelector("#cloud");
        cloud.textContent = `minimum Temp: ${FinalResult.main.temp_min} fahrenheit`

        let max = document.querySelector("#max");
        max.textContent =`Maximum ${FinalResult.main.temp_max} fahrenheit`
        //
        let hide = document.querySelector("#row-id");
        hide.style.visibility ="visible";
        }
    }
    apiCall();    
});

