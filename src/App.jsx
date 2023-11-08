  // 1. Importação 2.codigo 3. export
  
import { useState } from "react";
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
  
  function App() {
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
    const [nomeUsuario,setNomeUsuario] = useState('')
    const nome = "João";
    function retornaNome(){
      return nome
    }

    const pessoa = {
      nome: 'Maria'
    }

  return (  //tem que colocartudo dentro de uma tag como header foofter main ou div
  // ; e opcional
    <main>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}
      {/* {formularioEstaVisivel && (
        <Formulario /> //para comentar apertar ctrl e ;
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </main>
  )
}

export default App