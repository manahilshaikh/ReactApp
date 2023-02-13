import React,{useState} from "react";
 import { Button } from "@mui/material";




export const AccauntList =() =>{
     const [data,setdata] =useState (0)
     const handleClick =(val) =>{
        setdata(data+val)
     }
     
    return (
        <div>
            <h1>Counter</h1>
                {/* <Button variant="contained"color="error"onClick={()=>setdata(data+1)}>
                    +
                    </Button> */}
                    <Button variant="contained"color="error"onClick={()=>handleClick(+1)}>
                    
                    </Button>
                
                <h1>Counter Value:{data}</h1>
                <Button variant="contained"color="primary"onClick={()=>handleClick(-1)}>
                    -
                    </Button>
            {/* <Button variant="contained"color="primary"onClick={()=>setdata(data-1)}>
                -
                </Button> */}   
        </div>
    )
}