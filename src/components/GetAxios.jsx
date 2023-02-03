import axios from "axios";
import Tarefa from "./Tarefa";
import { useEffect, useState } from "react";
function GetAxios() {
  const [tarefas, setTarefas]=useState([])
  useEffect(()=>{
  axios
    .get('https://servidor-notas-4ki9.onrender.com/notas')
    .then((response) => { 
    console.log(response.data[0].titulo) 
    setTarefas(response.data)
    })
    .catch((error) => { console.error(error) });
},[])
  return (
    
    <div>
      
    {tarefas.map((element,key)=>(
    <Tarefa titulo={element.titulo} key={key}/> 
    ))}
     
    </div>
  )
}
export default GetAxios