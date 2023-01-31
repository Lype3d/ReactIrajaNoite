import axios from "axios";
function PostAxios() {
  const dado = {
    id: "",
    titulo: "Estudando Post Axios",
    status: true,
  }
  function PostarNotas() {
    axios
      .post('https://servidordenotas-5hrw.onrender.com/notas', dado)
      .then((response) => { console.log(response) })
      .catch((error) => { console.log(error) });
  }
  return (
    <button onClick={()=>PostarNotas()}>Postar</button>
  )
}
export default PostAxios