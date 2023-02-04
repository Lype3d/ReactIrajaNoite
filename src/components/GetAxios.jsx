import axios from "axios";
import Tarefa from "./Tarefa";
import { useEffect, useState } from "react";
function GetAxios() {
  const [tarefas, setTarefas]=useState([])
  const [ref, setRef] = useState(0)
  useEffect(()=>{
  axios
    .get('https://servidor-notas-4ki9.onrender.com/notas')
    .then((response) => { 
    console.log(response.data[0].titulo) 
    setTarefas(response.data)
    })
    .catch((error) => { console.error(error) });
},[ref])
  return (
    
    <div>
      <button onClick={()=>setRef(ref+1)}>Atualizar</button>
    {tarefas.map((element,key)=>(
    <Tarefa tituloTarefa={element.titulo} key={key}/> 
    ))}
     
    </div>
  )
}
export default GetAxios