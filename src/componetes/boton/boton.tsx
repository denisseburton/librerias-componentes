import React from "react"
import "./boton.css"
interface ButtonProps {
    legend?:string ;
}

const Boton= (props:ButtonProps)=>{
    const {legend} = props
 return (
    <button>{legend}</button>
 )
}


export default Boton;