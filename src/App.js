import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import tempImg from './temp.png';
import windImg from './wind.png';
import worldImg from './world.png';
import humidityImg from './hummidity.png';

function App() {
  let [city, setCity]=useState('')
  let [data, setData]=useState({ })

  let searchWeatehr=()=>{
    if(city!==''){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04a293851f57d988627d729c7923f80e&units=metric`)
    .then((res)=>res.json())
    .then((finalres)=>{ 
      setData(finalres);
      console.log(finalres)
    })
    // console.log(city)
    setCity('')
    }
    else{
      alert('Please Enter City Name:')
    }
  }

  return (
   <div className='main'>
      <div className='WeatherBox'>
        <div className='inputbox'>
          {/* <input value={city} onChange={(e)=>setCity(e.target.value)} type='text' className='input' placeholder='...'/>
          <button onClick={searchWeatehr}>Search</button> */}
          <InputGroup>
            <Form.Control  value={city} onChange={(event)=>setCity(event.target.value)} placeholder="Enter City Name..."/>
            <Button variant="outline-light" onClick={searchWeatehr}>
              Button
            </Button>
          </InputGroup>
        </div>

        {/* {data && data.sys && (
            <div className='details'>
              <h1>{data.name} ({data.sys.country})</h1>
              <div className='contentBlock'>Temperature : {data.main.temp} <img className='logoImgTemp' src={tempImg} alt='logo'/></div>
              <div className='contentBlock'>Wind Speed : {data.wind.speed} <img className='logoImg' src={windImg} alt='logo'/></div>
              <div className='contentBlock'>Humidity : {data.main.humidity} <img className='logoImg' src={humidityImg} alt='logo'/></div>
              <div className='contentBlock'>Latitude : {data.coord.lat} <img className='logoImg' src={worldImg} alt='logo'/></div>
              <div className='contentBlock'>Longitude : {data.coord.lon} <img className='logoImg' src={worldImg} alt='logo'/></div>
              <div className='desc'>{data.weather[0].description}</div>
            </div>
        )} */}

        {data.cod == 404 ? (
          <div className='details noData'>{data.message}</div>
        ) : (
          data && data.sys && (
            <div className='details'>
              <h1>{data.name} ({data.sys.country})</h1>
              <div className='contentBlock'>Temperature: {data.main.temp} <img className='logoImgTemp' src={tempImg} alt='logo' /></div>
              <div className='contentBlock'>Wind Speed: {data.wind.speed} <img className='logoImg' src={windImg} alt='logo' /></div>
              <div className='contentBlock'>Humidity: {data.main.humidity} <img className='logoImg' src={humidityImg} alt='logo' /></div>
              <div className='contentBlock'>Latitude: {data.coord.lat} <img className='logoImg' src={worldImg} alt='logo' /></div>
              <div className='contentBlock'>Longitude: {data.coord.lon} <img className='logoImg' src={worldImg} alt='logo' /></div>
              <div className='desc'>{data.weather[0].description}</div>
            </div>
          )
        )}

      </div>
   </div>
  );
}

export default App;
