//Dom element

// const cityName = document.querySelector(".city");
// const wheather = document.querySelector(".wheatherCondition");
// const temp = document.querySelector(".temp");
// const feelsLike = document.querySelector(".feelslike");
// const max = document.querySelector(".tempMax");
// const humidity = document.querySelector(".humidity");
// const deg = document.querySelector(".deg");
// const input = document.querySelector(".serachBar");
// const submit = document.querySelector(".add");
// const slider = document.querySelector(".toggle");
// const img = document.querySelector(".wheatherImage");
// const body = document.querySelector("body");

// async function getWeather(Location){
//     const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=d3038b3303b62168dd448fbeb4531d41', {mode: 'cors'})
//     const data = await response .json();
//     const a = data.name;
//     const b = data.main.temp;
//     const c = data.main.feelsLike;
//     const d = data.wheather[0].description;
//     const e = data.main.humidity;
//     const f = data.main.temp-max;
//     buildPage(a,b,c,d,e,f);
// getsticker(d);
// }

// getWeather("shillong");

// async function toggleFahrenheight(){
//     let Location = cityName.textContent;
//     let unit = checkState();
//      const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=d3038b3303b62168dd448fbeb4531d41', {mode: 'cors'})
//     const data = await response.json();
//     const a = data.name;
//     const b = data.main.temp;
//     const c = data.main.feelsLike;
//     const d = data.wheather[0].description;
//     const e = data.main.humidity;
//     const f = data.main.temp-max;
// getsticker(d);
// buildPage(a,b,c,d,e,f);
// changeDeg();
// }

//Build page with API data

// const buildPage = (place, t, feels, desc, humid, m) => {
//     desc - desc.charAt(0).toUpperCase() + desc.slice(1);
//     cityName.textContent = place;
//     wheatherCondition.textContent = desc;
//     temp.textContent = Math.round(t);
//     feelsLike.textContent = "Feelslike: " + Math.round(feels) + " degree";
//     max.textContent = "Today's High: " + Math.round(m) + " degree";
//     humidity.textContent = "Humidity: " + humid + "%";
// }

// // check slider for temperature

// const checkState = () => {
//     if (slider === true){
//         x = "imperial";
//         return x;
//     } else if (slider.checked === false){
//          x = "metric";
//          return x;
//     };
// };

// //toggle degree
// const changeDef = () => {
//     if (slider.checked === true){
//         deg.textContent = "F";
//     }else if (slider.checked === false) {
//         deg.textContent = "C";
//     }
// };

// //add gifs
// async function getSticker(search) {
//     try{
//  const response = await fetch("https://api.giphy.com/v1/stickers/translate?api_key=qitI9CMnXX08n6UFhJJoChiA9ZKbAl53&s=" + search, {mode: "cors"})
//         const sticker = await response.json();
//         img.src = sticker.data.image.fixed_height.url;
//     }catch (error){
//         console.log(error);
//     }
// };

// //EvemtListener

// submit.addEventListener("click", () => {
//     getWeather(input.value)
//   });
  
//   input.addEventListener("keyup", (e) => {
//     if (e.keyCode === 13) {
//       e.preventDefault();
//       submit.click();
//     }
//   });
  
//   input.addEventListener("click", () => {
//     input.value = ""
//   });
  
//   slider.addEventListener("click", () => {
//     toggleFarenheight();
  
//   });



// Dom Elements

const cityName = document.querySelector(".city");
const weatherCondition = document.querySelector(".weatherCondition");
const temp = document.querySelector(".temp");
const feelsLike = document.querySelector(".feelsLike");
const max = document.querySelector(".tempMax");
const humidity = document.querySelector(".humidty")
const deg = document.querySelector(".deg");
const input = document.querySelector(".searchBar");
const submit = document.querySelector(".add");
const slider = document.querySelector(".toggleF")
const img = document.querySelector(".weatherImage")
const body = document.querySelector("body")

async function getWeather(location) {
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=84b242bafa034b138c480656231409', {mode: 'cors'})
  console.log(response);
  const data = await response.json();
  const a = data.name;
  const b = data.main.temp;
  const c = data.main.feels_like;
  const d = data.weather[0].description;
  const e = data.main.humidity;
  const f = data.main.temp_max;
  buildPage(a, b, c, d, e, f);
  getSticker(d);
}

getWeather("Shillong");

async function toggleFarenheight() {
  let location = cityName.textContent
  let unit = checkState();
  const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units='+ unit + '&appid=84b242bafa034b138c480656231409', {mode: 'cors'})
  console.log(response);
  const data = await response.json();
  const a = data.name;
  const b = data.main.temp;
  const c = data.main.feels_like;
  const d = data.weather[0].description;
  const e = data.main.humidity;
  const f = data.main.temp_max;
  getSticker(d);
  buildPage(a, b, c, d, e, f);
  changeDef();
};

// Build page with API data

const buildPage = (place, t, feels, desc, humid, m) => {
  desc = desc.charAt(0).toUpperCase() + desc.slice(1);
  cityName.textContent = place;
  weatherCondition.textContent = desc;
  temp.textContent = Math.round(t);
  feelsLike.textContent = "Feels like: " + Math.round(feels) + "°";
  max.textContent = "Today's high: " + Math.round(m) + "°";
  humidity.textContent = "Humidty: " + humid + "%";
};


// Check Slider for temperature units
const checkState = () => {
  if (slider.checked === true){
    x = "imperial"
    return x;
  } else if (slider.checked === false) {
    x = "metric"
    return x;
  };
};

// Toggle Degree
const changeDef = () => {
    if(slider.checked === true){
      deg.textContent = "°F"
    } else if (slider.checked === false){
      deg.textContent = "°C"
    }
};


// Add gifs
async function getSticker (search) {
  try {
    const response = await fetch("https://api.giphy.com/v1/stickers/translate?api_key=SbnE1uDTqE8mC4gXiVw1vO0ny9FSDlzS&s=" + search, {mode: "cors"})
    console.log(response);
    const sticker = await response.json();
    img.src = sticker.data.images.fixed_height.url;
  } catch (error){
    console.log(error);
  }
};


// Event Listeners

submit.addEventListener("click", () => {
  getWeather(input.value)
});

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    submit.click();
  }
});

input.addEventListener("click", () => {
  input.value = ""
});

slider.addEventListener("click", () => {
  toggleFarenheight();

})
