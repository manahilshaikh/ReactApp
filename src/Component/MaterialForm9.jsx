import React, { useState } from "react";
import { Grid,TextField,Card,CardContent } from "@mui/material";




 export const MaterialForm9=() =>{ 
    const [Name,setName] = useState()
    const [Fathers,setFathers] = useState()
    const [Roll,setRoll] = useState()
    const [Class,setClass] = useState()
    const [City,setCity] = useState()
    const [Address,setAddress] = useState()
    return (
        <div>
                <h1>School Data 9 Class</h1>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <TextField label ="Name of student" variant="outlined" onChange={(e)=>setName(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label ="Fathers Name" variant="outlined" onChange={(e)=>setFathers(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label ="RollNumber" variant="outlined" onChange={(e)=>setRoll(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Class" variant="outlined" onChange={(e)=>setClass(e.target.value)}/>
                </Grid>
                <Grid item xs={4}>
                    <TextField label="City" variant="outlined" onChange={(e)=>setCity(e.target.value)}/>
                </Grid>
                    <Grid item xs={4}>
                        <TextField label="Address"variant="outlined"onChange={(e)=>setAddress(e.target.value)} />
                    </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent style={{backgroundColor:"aqua"}}>
                            <h1>
                                Name:{Name}
                            </h1>
                            <h1>Fathers Name:{Fathers}</h1>
                            <h1>Roll Number:{Roll}</h1>
                            <h1>Class:{Class}</h1>
                            <h1>City:{City}</h1>
                            <h1>Address:{Address}</h1>
                        </CardContent>
                    </Card>

                </Grid>
            </Grid>
        </div>

    )
}


