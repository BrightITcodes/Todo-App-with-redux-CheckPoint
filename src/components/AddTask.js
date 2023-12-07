import React,{useState } from 'react'
import {useDispatch} from "react-redux"
import { addTask } from "../redux/actions/action"


const AddTask = () => {
    const [Text, setText] = useState("")
    const dispatch = useDispatch()
    const add = () =>{
        dispatch(addTask({id:Math.random(), task:Text, isDone: false}));
        setText("");
    }
    return (
        <div className="add">
        <input type="text" onChange={(e) => setText(e.target.value)} value={Text} />
        <button onClick={add}>add</button>
        </div>
    )
}

export default AddTask
