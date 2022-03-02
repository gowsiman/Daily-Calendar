import React from "react";
import Card from "./Card";
import useWindowDimensions from "../windowsize";


function Cards(props){
    
    let width = useWindowDimensions().width;
    const today = props.date;
    const yesterday = new Date(today.getTime() - 24*60*60*1000);
    const tomorrow = new Date(today.getTime() + 24*60*60*1000);
    const dayaftertomorrow = new Date(tomorrow.getTime() + 24*60*60*1000);
    return (
        
        <div className="row">
        
        {width >= 576 &&    <div className="col-lg-3 col-md-4 col-sm-6">
                                <Card weather={props.weather} className='card' user={props.user} date={yesterday} setClicked={props.setClicked} clicked={props.clicked}/>
                            </div>
        }  
        {                   <div className="col-lg-3 col-md-4 col-sm-6">
                                <Card weather={props.weather} className='card' user={props.user} date={today} setClicked={props.setClicked} clicked={props.clicked}/>
                            </div>
        }   
        {width >= 768 &&    <div className="col-lg-3 col-md-4 col-sm-12">
                                <Card weather={props.weather} className='card' user={props.user} date={tomorrow} setClicked={props.setClicked} clicked={props.clicked}/>
                            </div>
        }    
        {width >= 992 &&    <div className="col-lg-3 col-md-4 col-sm-12">
                                <Card weather={props.weather} className='card' user={props.user} date={dayaftertomorrow} setClicked={props.setClicked} clicked={props.clicked}/>
                            </div>
        }   
        </div>
  );
}

export default Cards;
