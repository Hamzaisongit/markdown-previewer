import React, { useContext } from "react";
import Nav from './Components/Nav'
import { Editor } from "./Components/Editor";
import Context from "./Context/creator";


export default function App(){

  const {theme} = useContext(Context)

  document.querySelector('body').setAttribute('style',`background : ${theme}`)

  return(
    <>
    
    <Nav></Nav>  
    <Editor></Editor> 
     
    </>
  )
}