import { useState } from "react";
import style from "./Resultado.module.css"

const Tabela = ({resultadoImc}) =>{
  
  const abaixoDoPeso = () => {
    return<>
      <td className={style.abaixo}>Menor que 18.5</td>
      <td className={style.abaixo}>Magreza</td>
    </> 
  }

  const normal = () => {
    return <>
      <td className={style.normal}>Entre 18.5 e 24.9</td>
      <td className={style.normal}>Normal</td>
    </>
  }

  const sobrepeso = () => {
    return <>
      <td className={style.sobrePeso}>Entre 25 e 29.9</td>
      <td className={style.sobrePeso}>Sobrepeso</td>
    </>
  }

  const obesidade1 = () => {
    return <>
      <td className={style.obesidade1}>Entre 30 e 34.9</td>
      <td className={style.obesidade1}>Obesidade grau 1</td>
    </>
  }

  const obesidade2 = () =>{
    return <>
      <td className={style.obesidade2}>Entre 35 e 39.9</td>
      <td className={style.obesidade2}>Obesidade grau 2</td>
    </>
  }

  const obesidade3 = () =>{
    return <>
        <td className={style.obesidade3}>Igual ou acima de 40</td>
        <td className={style.obesidade3}>Obesidade morbida</td>
    </>
  }

  return(
    <>
      <table className={style.tabela}>
        <thead>
          <tr>
            <th colSpan={2}>Veja a tabela do imc</th>
          </tr>
        </thead>
        <tbody className="tabelaBody">
          <tr>
            {
              resultadoImc < 18.5 ? abaixoDoPeso(): 
              <>
                <td>Menor que 18.5</td>
                <td>Magreza</td>
              </>
            }
          </tr>
          <tr>
            {
              resultadoImc >= 18.5 && resultadoImc <= 24.9 ? normal():
              <>
                <td>Entre 18.5 e 24.9</td>
                <td>Normal</td>
              </>
            }
          </tr>
          <tr>
            {
              resultadoImc >= 25 && resultadoImc <= 29.9 ? sobrepeso():
              <>
                <td>Entre 25 e 29.9</td>
                <td>Sobrepeso</td>
              </>
            }
          </tr>
          <tr>
            {
              resultadoImc >= 30 && resultadoImc <= 34.9 ? obesidade1():
              <>
                <td>Entre 30 e 34.9</td>
                <td>Obesidade grau 1</td>
              </>
            }
          </tr>
          <tr>
            {
              resultadoImc >= 35 && resultadoImc <= 39.9 ? obesidade2():
              <>
                <td>Entre 35 e 39.9</td>
                <td>Obesidade grau 2</td>
              </>
            }
          </tr>
          <tr>
            {
              resultadoImc >= 40 ? obesidade3():
              <>
                <td>Igual ou acima de 40</td>
                <td>Obesidade morbida</td>
              </>
            }
          </tr>
        </tbody>
      </table>
      <p className={style.resultado}>Seu IMC é: {resultadoImc}</p>
    </>
    
  )

}

export default Tabela