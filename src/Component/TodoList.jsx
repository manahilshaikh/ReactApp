import React, { useState } from "react";


export const TodoList =() =>{
    const[toDo,setToDo] =useState ([])
    const[copytoDo,setCopyToDo] =useState ([])
    const [text,setText] =useState ('')
    const [selectedIndex,setSelectedIndex]=useState (null)
    const [edit,setEdit] =useState (false)
    const handelAddTask =() =>{
        if(edit){
            const editTask= toDo.map(
                (elem,index)=>index===selectedIndex? text : elem)
                setToDo(editTask)
                setCopyToDo(editTask)
                setText(' ')
                setEdit(false)
            }else {
        if(!text.trim()) return
        setToDo([...toDo,text])
        setCopyToDo([...toDo,text])
        setText('')
    }
    }
    const handleDeleteTask =(item,id)=>{
        const remainTask =toDo.filter((elem,index)=>index!==id)
        setToDo (remainTask)
    }
    const handelSearchTask=(value) =>{
        const searchItem =copytoDo.filter(
        (elem)=>elem.toUpperCase().includes(value.toUpperCase()))
        
        setToDo(searchItem)
    }
    const handelEditTask =(item,ind) =>{
        
        setSelectedIndex(ind)
        setText(item)
        setEdit(true)

    }
    console.log()
    return (
        <div> 
            <h1>To Do sList</h1>
            <input type="text" 
            placeholder="Search here..."
            onChange={(e)=>handelSearchTask(e.target.value)}/>
            <input type="text"  
            placeholder="Add To Do"
            value={text}
            onChange={(e)=>setText(e.target.value)}/>
            {' '}
            <button onClick={()=>handelAddTask()}>
                {edit ?"Edit":"Add"} Task
                Add Task</button>
            <ol>
               {toDo.map((item,index)=>{
                return (
                    <li key={index}>{item}
                    <button onClick={()=>handleDeleteTask(item,index)}>Delete</button>
                    <button onClick={()=>handelEditTask(item,index)}>Edit</button>
                    </li>
                )
               })} 
            </ol>
        </div>
    )
}
