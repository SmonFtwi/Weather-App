import './style.css';

const LocationName = document.querySelector('#LocationName');
const btn = document.querySelector('#generateImg');
const search=document.querySelector('input');
const iconImage = document.querySelector('img');
const actTemp= document.querySelector('#actTemp')
const summaryInfo = document.querySelector('.summary')
const feelsLike= document.querySelector('.feelsLike')
const humudityInfo= document.querySelector('.humudity')
let location= 'Eritrea';

function getImage(){
    fetch(`http://api.weatherapi.com/v1/current.json?key=2858f313dda04b27ba4185517232907&q=${location}` , {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const weather = response.current.temp_c;
        const locationName = response.location.name;
        const countryName = response.location.country;
        const icon = response.current.condition.icon;
        const summary= response.current.condition.text;
        
       

        // Display the weather information
        LocationName.innerHTML = ` ${locationName}, ${countryName} `;
       actTemp.innerHTML= `${weather} °C`
        iconImage.src = icon;
        summaryInfo.innerHTML= `${summary}`
        feelsLike.innerHTML =`Feels like: ${response.current.feelslike_c}`;
        humudityInfo.innerHTML= `Humudity :  ${response.current.humidity}`
        
       console.log(response)
      
    })
    .catch(function (error) {
        console.error('Error fetching weather data:', error);
        LocationName.innerHTML = 'Error fetching weather data. Please try again later.';
      });
}

getImage()
btn.addEventListener('click', () =>{
    location = search.value
     getImage(location)
});

search.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        location = search.value
        getImage(location);
    }
  });

