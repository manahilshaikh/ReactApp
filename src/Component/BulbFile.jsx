
import React ,{useState}from "react";
import { Button } from "@mui/material";
import { style } from "@mui/system/Stack/createStack";




    export const BulbFile =() =>{ 
        const [data,setData] =useState()
        const [da1,setDa] =useState()
    return (
        <div className="bulb">
            <h1>Bulb Light</h1>
        
           {data? <img src= "./bulb1.png"/>:<img src='./image.jpg'/>}
            <br/>
            
            <Button variant="contained"color="primary" onClick={()=>setData(!data)}>
                ON
                </Button>
                 {/* <Button variant="contained"color="error"onClick={()=>setDa(da1)}>
                OF
                </Button> */}
        </div>
    )
}