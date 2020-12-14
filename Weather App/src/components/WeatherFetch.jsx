import { useState, useEffect } from 'react'

function WeatherFetch(props){
    const key = 'a17a28e98d4e3c26cfc8287345ecb631';
    const [feels_like,setFeelsLike] = useState('');
    const [mainTemp,setMainTemp] = useState('');
    const [description,setDescription] = useState('');
    const [main,setMain] = useState('');
    const [iconID,setIconID] = useState('');

    useEffect(()=> {
      fetch(
        // 'https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&appid=a17a28e98d4e3c26cfc8287345ecb631&units=metric'
        'https://api.openweathermap.org/data/2.5/weather?q='+props.searchCity+',&appid=a17a28e98d4e3c26cfc8287345ecb631&units=metric'
        )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setFeelsLike(data.main.feels_like);
        setMainTemp(data.main.temp);
        setDescription(data.weather[0].description);
        setMain(data.weather[0].main);
        setIconID(data.weather[0].icon);
      })
  },[])

    return(
        <div>
            <h1>Main Temperature :{mainTemp} Degree Celcius</h1>
            <h1>Feels like :{feels_like} Degree Celcius</h1>
            <h1>Weather Parameter :{main}</h1>
            <h1>Description :{description}</h1>
            <img src={'http://openweathermap.org/img/wn/' + iconID + '@2x.png'} alt="img"/>
        </div>
    )
}

export default WeatherFetch;