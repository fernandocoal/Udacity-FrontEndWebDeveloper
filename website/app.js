/* Global Variables */

const apiUrl='http://api.openweathermap.org/data/2.5/weather?zip=';
const keyApi='&appid=393c85a474d197814013dd9b8b1e0551&units=imperial';
const port = 8000;
const portURL = `http://localhost:${port}/projectData`;


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();



// Event handler handleClick
const clickFunction = async () => {
  const feeling = document.getElementById('feelings').value;
  const zipAnswer=document.getElementById('zip').value;
  const weatherInput = await getWeather(apiUrl, zipAnswer, keyApi)
  const data = {
    temp: weatherInput.main.temp,
    date: newDate,
    content: feeling
  }
    
    
  //.catch(error => requestError(error, 'articles'));
  await postData('/add', data)
  updateUI()
};


  // Call function to fetch via OpenWeatherMap
const getWeather = async (apiUrl, zipAnswer, keyApi) => {
    const url = apiUrl+zipAnswer+keyApi;
    const response = await fetch(url);
    let responseParsed = await response.json();
    //.catch(e => requestError(e, 'zipcode'))
    return responseParsed;
  }

// User-input post data function
const postData = async (url='', data = {}) => {
  const req = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
  try {
    const newData = await req.json();
    return newData;
  } catch(error) {
  console.log("error", error);
  }
};


// Update UI demo 
const updateUI = async () => {
  const response = await fetch('/all');
  try{
    const jsonResponse = await response.json()
    document.getElementById('date').innerHTML = `<span class="entry-item">Date: </span>${jsonResponse.date}`
    document.getElementById('content').innerHTML = `<span class="entry-item">You feel: </span>${jsonResponse.content}`
    document.getElementById('temp').innerHTML = `<span class="entry-item">Temperature: </span>${jsonResponse.temp}`
  }catch(error){
    console.log("error", error);
  }
};



// Add element event listener

document.getElementById('generate').addEventListener('click', clickFunction);