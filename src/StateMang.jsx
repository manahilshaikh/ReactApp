import React,{useState} from "react"

export const StateMang=()=>{
    const [data,setData]=useState("he")
    const [text,setText]=useState("he")
    return (
        <div>
            <label htmlFor="">First Name</label>
            <input type="text" onChange={(e)=>setData(e.target.value)} />
            <label htmlFor="">Middle Name</label>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <h1>{data}{text}</h1>
            {/* <button onClick={()=>setData("text")}>Click and see the magic</button> */}
        </div>
    )
}