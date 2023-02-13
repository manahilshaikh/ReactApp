import React ,{useState}from "react";
import { TextField,Grid ,Button,Card,CardContent,item } from "@mui/material";

 export const SchoolForm=()=>{
    const [name,setName] =useState()
    const [mobile,setMobile] =useState()
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()
    const [data,setData] =useState([])
            const handleSubmit=()=>{
            const obj={
                firstName:name,
                mobileNo:mobile,
                emailid:email,
                conpassword:password
            }
            setData([...data,obj]
                )
            
            } 
            const handleDelete =(index) =>{
                const deleteData =data.filter((item,ind)=>ind !=index
                     )
                setData(deleteData)
            }
            console.log(data)          
    return (
        <div>
            <h1>School Registration</h1>

            <Grid container spacing={10}>
                <Grid item xs={12} md={3
                } >
                    <TextField label="name"onChange={(e)=>setName(e.target.value)}  />
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField label="mobile" type="number"onChange={(e)=>setMobile(e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={3}>
                    <TextField label="Email" type='email'onChange={(e)=>setEmail(e.target.value)}/>
                </Grid>

                <Grid item xs={12} md={3}>
                    <TextField label="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
                </Grid>
                <Grid item xs={12}></Grid>
                <Grid item xs={6}></Grid>
                <Grid>
                    <Button variant="contained" color="error" onClick={handleSubmit}>
                        Submit</Button>
                </Grid>
            </Grid>
            <Grid container>
            {data.map((item,index)=>{
                return (
                        <Grid item xs={6}>
                        <Card>
                            <CardContent>
                            <h1>name:{item.firstName}</h1>
                            <h1>mobile:{item.mobileNo}</h1>
                            <h1>email:{item.emailid}</h1>
                            <h1>password:{item.conpassword}</h1>
                            <Button variant="contained"color="error" onClick={() =>handleDelete(index)}>
                                Delete</Button>
                            </CardContent>
                        </Card>
                        </Grid>
                )
            })}
            </Grid>
           
        </div>
    )
}