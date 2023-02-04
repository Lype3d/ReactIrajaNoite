import { useState } from "react"
import axios from "axios"
function DeleteAxios() {
    const [id, setId] = useState(0)
   
    function DeletarNota() {
        axios
          .delete(`https://servidor-notas-4ki9.onrender.com/notas/${id}`)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div>
            <h3>Deletar Tarefa</h3>
            <label>Id: </label>
            <input type="number" id="id" onChange={()=>(
                setId(document.getElementById('id').value)
    )}/>
            <button onClick={()=>DeletarNota()}>Deletar</button>
        </div>
    )
}
export default DeleteAxios 
