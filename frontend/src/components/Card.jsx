import React, { useState, useEffect } from "react";
import Task from "./Task";


function Card(props){
    const date1 = new Date();
    const date2 = props.date;
    const diffTime = (date2 - date1);
    const index = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    const [tasks, setTasks] = useState([]);
    
    const temp = index >= 0 && index <= 7 ? props.weather.daily[index].temp.day : "--/--"
    const icon = index >= 0 && index <= 7 ? props.weather.daily[index].weather[0].icon: null
    const description = index >= 0 && index <= 7 ? props.weather.daily[index].weather[0].description : "----"

    return (
        <div className="card">
            <div className="card-header">
                {props.date.toLocaleString("en-US",{year: 'numeric', month: 'long', day: 'numeric'})}
            </div>

            <div className="card-body">
                <div className="row">
                    <div className="col-5">
                        <h5 className="card-title">{props.date.toLocaleString("en-US",{weekday: 'long'})}</h5>
                        <p className="card-text">{description}</p>
                        
                    </div>

                    <div className="col-7 weather-icon">
                        {icon && <img  src= {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weathericon"/>}
                        <h6>  {temp} °C</h6>
                    </div>
                </div>
            </div>

            <div className="task">
                <Task tasks={tasks} date={props.date} user={props.user} clicked={props.clicked} setClicked={props.setClicked}/>
            </div>
        </div>
    );
}

export default Card;