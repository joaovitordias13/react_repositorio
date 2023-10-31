  // 1. Importação 2.codigo 3. export
  
import { useState } from "react";
import Formulario from "./components/Formulario";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
  
  function App() {
    const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
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
      <Perfil nome="João Vitor" endereco='https://github.com/joaovitordias13.png'/>
      <ReposList />
      {/* {formularioEstaVisivel && (
        <Formulario /> //para comentar apertar ctrl e ;
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </main>
  )
}

export default App