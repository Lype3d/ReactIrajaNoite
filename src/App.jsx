import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form'
import NovaTarefa from './components/NovaTarefa'
import GetAxios from './components/GetAxios'
import PostAxios from './components/PostAxios'
import paisagem from './images/andre-alexander-N3V2uhtuDCo-unsplash.jpg'
import { useEffect } from 'react'
import BotaoUseEffect from './components/BotaoUseEffect'
import DeleteAxios from './components/DeleteAxios'
function App() {

    

  return (
    <div className="App">
      <div>
        <img src={reactLogo} width="120px" />
        <img src={paisagem} width="120px" />
      </div>
      <h2>Primeiro Projeto React com Vite</h2>
     
      <NovaTarefa/>
      <br />
      <DeleteAxios/>
      <br />
      <GetAxios/>
      <br />
      <BotaoUseEffect/>
    </div>
  )
}
export default App