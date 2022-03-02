import React, {useEffect, useState, useRef} from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";
import axios from "axios";

function Task(props) {
    const name = props.user
    const date = props.date
    const [arrow, setArrow] = useState(true)
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([]);
    const [zoom, setZoom] = useState(false)

    useEffect(async()=>{
        await axios.post('https://daily-calendar-project.herokuapp.com/tasks', {name: props.user, date: date.toLocaleDateString()})
        .then(response => {
            setTasks(response.data)
        })
        .catch(error => console.log(error))
    }, [props.date])

    function changeArrow() {
        setArrow(prev => !prev)
    }

    function handleChange(e) {
        setNewTask(e.target.value);
        setZoom(true);
    }

    function addNewTask() {
        if (newTask != "") {
            axios.post('https://daily-calendar-project.herokuapp.com/addTask', {name: name, date: date.toLocaleDateString(), task: newTask})
            .then(response=>setTasks(response.data))
            .catch(error => console.log(error))

        }
        setNewTask("")
        setArrow(false)
        setZoom(false)
    }

    async function deleteTask(task) {
        await axios.post('https://daily-calendar-project.herokuapp.com/deleteTask', {name: name, date: date.toLocaleDateString(), task:task})
            .then()
            .catch(error => console.log(error))
        
        await axios.post('https://daily-calendar-project.herokuapp.com/tasks', {name: name, date: date.toLocaleDateString()})
        .then(response => setTasks(response.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className = 'row'>
                <div className="col-9">
                    <strong style={{marginLeft: "10px", color: "orange"}}>{tasks.length}</strong> Tasks left
                </div>
                <IconButton className="col-2 arrow" onClick={changeArrow} size="small">
                    {arrow  && <ArrowDropDownIcon size="small"/>}
                    {!arrow  && <ArrowDropUpIcon size="small"/>}
                </IconButton>
            </div>
            {!arrow && <div className="tasklist">
                {
                tasks.map(task =>
                    <div  key={task.task} className = "single-task">
                        <label>{task.task}</label>
                        <Zoom in={true}><ClearIcon name={task.task} className="remove-icon" onClick={()=>deleteTask(task.task)} size="small"/></Zoom>
                    </div>
                )
                }
            </div>}
            <div className="row">
                <div className="col-8">
                <TextField  style={{marginLeft: "10px"}} id="standard-basic" label="New Task" variant="standard" onChange={handleChange} value={newTask} />
                </div>
                <div className="col-4 addicon" >
                    <Zoom in={true}><Fab onClick={addNewTask} size="small" color="secondary"><AddIcon size="large"></AddIcon></Fab></Zoom>
                </div>
            </div>

        </div>
    );
}

export default Task;