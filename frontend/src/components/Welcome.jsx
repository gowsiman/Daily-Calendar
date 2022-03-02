import React, { useState, useRef, useEffect} from 'react'
import Cards from './Cards'
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import axios from "axios";
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';

function Welcome(props) {
    const componentMounted = useRef(true);
    const [date, setDate] = useState(
        new Date()
    )
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const [location, setLocation] = useState({});

    const [weather, setWeather] = useState(
        {
            "lat": 38.7267,
            "lon": -9.1403,
            "timezone": "Europe/Lisbon",
            "timezone_offset": 0,
            "daily": [
            {
            "dt": 1645963200,
            "sunrise": 1645945932,
            "sunset": 1645986406,
            "moonrise": 1645939140,
            "moonset": 1645972860,
            "moon_phase": 0.88,
            "temp": {
            "day": 15.91,
            "min": 10.08,
            "max": 17.06,
            "night": 11.62,
            "eve": 13.33,
            "morn": 10.08
            },
            "feels_like": {
            "day": 15.12,
            "night": 10.82,
            "eve": 12.47,
            "morn": 9.55
            },
            "pressure": 1023,
            "humidity": 60,
            "dew_point": 8.17,
            "wind_speed": 5.66,
            "wind_deg": 331,
            "wind_gust": 8.01,
            "weather": [
            {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
            }
            ],
            "clouds": 5,
            "pop": 0,
            "uvi": 4.18
            },
            {
            "dt": 1646049600,
            "sunrise": 1646032247,
            "sunset": 1646072869,
            "moonrise": 1646028480,
            "moonset": 1646063700,
            "moon_phase": 0.92,
            "temp": {
            "day": 16.48,
            "min": 9.16,
            "max": 18.14,
            "night": 13.22,
            "eve": 16.31,
            "morn": 9.39
            },
            "feels_like": {
            "day": 15.54,
            "night": 12.37,
            "eve": 15.48,
            "morn": 8.35
            },
            "pressure": 1026,
            "humidity": 52,
            "dew_point": 6.7,
            "wind_speed": 2.58,
            "wind_deg": 310,
            "wind_gust": 3.7,
            "weather": [
            {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
            }
            ],
            "clouds": 27,
            "pop": 0,
            "uvi": 4.25
            },
            {
            "dt": 1646136000,
            "sunrise": 1646118561,
            "sunset": 1646159332,
            "moonrise": 1646117280,
            "moonset": 1646154480,
            "moon_phase": 0.96,
            "temp": {
            "day": 16.61,
            "min": 11.89,
            "max": 17.92,
            "night": 13.46,
            "eve": 16.11,
            "morn": 11.89
            },
            "feels_like": {
            "day": 15.66,
            "night": 13.03,
            "eve": 15.4,
            "morn": 10.99
            },
            "pressure": 1025,
            "humidity": 51,
            "dew_point": 6.34,
            "wind_speed": 2.83,
            "wind_deg": 305,
            "wind_gust": 3.35,
            "weather": [
            {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
            }
            ],
            "clouds": 99,
            "pop": 0,
            "uvi": 4
            },
            {
            "dt": 1646222400,
            "sunrise": 1646204874,
            "sunset": 1646245795,
            "moonrise": 1646205720,
            "moonset": 1646245200,
            "moon_phase": 0,
            "temp": {
            "day": 16.18,
            "min": 11.69,
            "max": 17.75,
            "night": 13.22,
            "eve": 14.93,
            "morn": 11.75
            },
            "feels_like": {
            "day": 15.76,
            "night": 12.71,
            "eve": 14.33,
            "morn": 11.38
            },
            "pressure": 1026,
            "humidity": 73,
            "dew_point": 11.14,
            "wind_speed": 4.1,
            "wind_deg": 315,
            "wind_gust": 6.22,
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "clouds": 56,
            "pop": 0,
            "uvi": 4.12
            },
            {
            "dt": 1646308800,
            "sunrise": 1646291186,
            "sunset": 1646332257,
            "moonrise": 1646293860,
            "moonset": 1646335740,
            "moon_phase": 0.03,
            "temp": {
            "day": 15.25,
            "min": 11.07,
            "max": 15.25,
            "night": 11.07,
            "eve": 12.78,
            "morn": 13.22
            },
            "feels_like": {
            "day": 14.92,
            "night": 10.09,
            "eve": 11.97,
            "morn": 12.79
            },
            "pressure": 1024,
            "humidity": 80,
            "dew_point": 11.9,
            "wind_speed": 8.2,
            "wind_deg": 354,
            "wind_gust": 11.77,
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": 71,
            "pop": 0.76,
            "rain": 0.75,
            "uvi": 2.38
            },
            {
            "dt": 1646395200,
            "sunrise": 1646377498,
            "sunset": 1646418718,
            "moonrise": 1646381760,
            "moonset": 1646426100,
            "moon_phase": 0.06,
            "temp": {
            "day": 14.35,
            "min": 9.7,
            "max": 15.19,
            "night": 10.67,
            "eve": 11.79,
            "morn": 9.7
            },
            "feels_like": {
            "day": 12.81,
            "night": 9.39,
            "eve": 10.41,
            "morn": 6.71
            },
            "pressure": 1028,
            "humidity": 37,
            "dew_point": -0.18,
            "wind_speed": 7.6,
            "wind_deg": 349,
            "wind_gust": 12.27,
            "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
            }
            ],
            "clouds": 77,
            "pop": 0,
            "uvi": 4.28
            },
            {
            "dt": 1646481600,
            "sunrise": 1646463809,
            "sunset": 1646505180,
            "moonrise": 1646469660,
            "moonset": 1646516340,
            "moon_phase": 0.1,
            "temp": {
            "day": 14.58,
            "min": 8.8,
            "max": 16.13,
            "night": 13.28,
            "eve": 13.82,
            "morn": 8.8
            },
            "feels_like": {
            "day": 13.9,
            "night": 12.67,
            "eve": 13.24,
            "morn": 7.13
            },
            "pressure": 1025,
            "humidity": 69,
            "dew_point": 8.99,
            "wind_speed": 7.02,
            "wind_deg": 300,
            "wind_gust": 10.21,
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": 26,
            "pop": 0.24,
            "rain": 0.23,
            "uvi": 5
            },
            {
            "dt": 1646568000,
            "sunrise": 1646550120,
            "sunset": 1646591641,
            "moonrise": 1646557560,
            "moonset": 1646606520,
            "moon_phase": 0.13,
            "temp": {
            "day": 16.41,
            "min": 11.88,
            "max": 16.41,
            "night": 12.2,
            "eve": 14.54,
            "morn": 11.88
            },
            "feels_like": {
            "day": 15.8,
            "night": 11.67,
            "eve": 14.03,
            "morn": 11.37
            },
            "pressure": 1024,
            "humidity": 65,
            "dew_point": 10,
            "wind_speed": 5.64,
            "wind_deg": 326,
            "wind_gust": 10.03,
            "weather": [
            {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
            }
            ],
            "clouds": 19,
            "pop": 0.2,
            "rain": 0.18,
            "uvi": 5
            }
            ]
            }
    );

    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        setTime(new Date().toLocaleTimeString());
        if (componentMounted.current){ 
            setInterval(() => setTime(new Date().toLocaleTimeString()), 1000)
        }
        return () => { 
            componentMounted.current = false; 
        }
    }, []);
    

    function leftClicked() {
        setDate(new Date(date.getTime() - 24*60*60*1000));
        setClicked(true)
    }
    
    function rightClicked() {
        setDate(new Date(date.getTime() + 24*60*60*1000));
        setClicked(true)
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            axios(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_WEATHERAPI}`)
            .then(response=>setLocation(response.data)) 
        });
      }, [])

    useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
        axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=current,hourly,minutely&units=metric&appid=${process.env.REACT_APP_WEATHERAPI}`)
        .then(response=>setWeather(response.data))
        });
    }, [])
       
    return ( 
        <div>
            <div className='today'>
                {props.user && <p>Hello, <i>{props.user}</i></p>}
            </div>
            <div className='today' onClick={()=>setDate(new Date())}>
                <h4>{new Date().toLocaleString("en-US", 
                            { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</h4>
                <p>{time} <i style={{marginLeft:"30px"}}>{location.name}</i></p>
            </div>
            <div className='box'>
                <Cards date={date} weather={weather} user={props.user} clicked={clicked} setClicked={setClicked}/>
            </div>
            <div className='navigate'>
                <Zoom in={true}><Fab style={{marginRight: "20px", opacity: 0.8}} size="small"><ArrowBackIosSharpIcon onClick={leftClicked}  /></Fab></Zoom>
                <Zoom in={true}><Fab style={{marginLeft: "20px", opacity: 0.8}} size="small"><ArrowForwardIosSharpIcon onClick={rightClicked} /></Fab></Zoom>
            </div>
        </div>
    )
}

export default Welcome;