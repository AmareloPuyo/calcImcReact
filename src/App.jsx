import { useState } from 'react'
import { data } from "./data/data"
import ImcCalc from './components/ImcCalc'
import TableImc from './components/TableImc'
import './App.css'

function App() {

  const [imc, setImc] = useState("")
  const [info, setInfo] = useState("")
  const [infoClass, setInfoClass] = useState("")

  const calcImc = (e, height, weight) => {
    e.preventDefault()
    if (!height || !weight) return;
    const valHeight = +height.replace(",", ".")
    const valWeight = +weight.replace(",", ".")
    const imc = (valWeight / (valHeight * valHeight)).toFixed(1);
    console.log(imc)
    setImc(imc)

    data.forEach((dados)=>{
      if(imc >= dados.min && imc <= dados.max){
          setInfo(dados.info)
          setInfoClass(dados.infoClass)
          
      }
    })
  }

  const funReturn = () => {
    setImc("")
  }


  return (
    <div className="container">

      {imc ? <TableImc funcReturn={funReturn} data={data} imc={imc} infoClass={infoClass} info={info} /> : <ImcCalc calcImc={calcImc} />}

    </div>
  )
}

export default App
