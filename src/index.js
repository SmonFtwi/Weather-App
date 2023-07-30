import './style.css';

const content = document.querySelector('#content');
const btn = document.querySelector('#generateImg');
const search=document.querySelector('input');
let location= 'Eritrea';

function getImage(location){
    fetch(`http://api.weatherapi.com/v1/current.json?key=2858f313dda04b27ba4185517232907&q=${location}`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        const weather = response.current.feelslike_c;
        const locationName = response.location.name;
       

        // Display the weather information
        content.innerHTML = `Weather in ${locationName}: ${weather}°C, `;
        
       console.log(response)
      
    })
    .catch(function (error) {
        console.error('Error fetching weather data:', error);
        content.innerHTML = 'Error fetching weather data. Please try again later.';
      });
}

getImage(location)
btn.addEventListener('click', () =>{
    location = search.value
     getImage(location)
})