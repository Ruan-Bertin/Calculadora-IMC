import { useState } from 'react'

import Formulario from './components/Formulario'
import Tabela from './components/Resultado';

function App() {

  const [resultado, setResultado] = useState(NaN);

  const calculaImc = (imc) => {
    setResultado(imc);
  };

  return (
    <div className='container'>
      <h1 className='title'>Calculadora de IMC</h1>
      <Formulario onCalculaImc={calculaImc}/>
      <Tabela resultadoImc={Number(resultado).toFixed(2)}/>
    </div>
  )
}

export default App
