import { useState } from "react"
import style from "./Formulario.module.css"

const Formulario = ({onCalculaImc}) =>{
  const [altura,setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const calculaImc = () => {
    const imc = peso / (altura * altura)
    onCalculaImc(imc);
    console.log(imc.toFixed(2))
  }

  return(
    <>
    <form className={style.formulario}>
      <div className={style.campoAltura}>
        <label className={style.label}>Digite sua altura<span className={style.span}>(ex: 1,75)</span></label>
        <input type="number" onBlur={(e) => setAltura(Number(e.target.value))} placeholder="Metros"/>
        <button type="button" className={style.btnCalcular} onClick={calculaImc}>Calcular</button>
      </div>

      <div className={style.campoPeso}>
        <label className={style.label}>Digite seu peso <span className={style.span}>(ex: 80kg)</span></label>
        <input type="number" onBlur={(e) => setPeso(Number(e.target.value))} placeholder="quilos"/>
      </div>
    </form>
    </>
  )
}

export default Formulario