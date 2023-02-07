import React from "react"
import "./boton.css"
interface ButtonProps {
    legenda?:string ;
}

const Boton= (props:ButtonProps)=>{
    const {legenda} = props
 return (
    <button>{legenda}</button>
 )
}


export default Boton;