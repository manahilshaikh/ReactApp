import React from "react";



export const GreetComp =(props) =>{
    console.log(props)
    return (
        <div>
            <h1>hello {props.name1} </h1>
            <h1>hello {props.name2} </h1>
            <h1>hello {props.name3} </h1>
        </div>
    )
}