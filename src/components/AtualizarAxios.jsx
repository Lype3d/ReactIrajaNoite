import { useState } from "react"
import axios from "axios"
function AtualizarAxios() {
  const [id, setId] = useState(0)

    function AtualizarNota() {
        axios
          .put(`https://servidor-notas-4ki9.onrender.com/notas/${id}`, dado)
          .then((response) => { console.log(response) })
          .catch((error) => { console.log(error) })
      }
    return (
        <div>
            <label>Atualizar Nota: </label>
            <input type="number" id="id" onChange={()=>(
                setId(document.getElementById('id').value)
    )}/>
            <button onClick={()=>AtualizarNota()}>Cadastrar</button>
        </div>
    )
}
export default AtualizarAxios