import "./TableImc.css"
import Button from "./Button"

const TableImc = ({ data, imc, funcReturn, infoClass, info}) => {


  return (
    
    <div className="table-container">
      <div className="result-imc">
        <h2>Seu IMC : <span className={infoClass}>{imc}</span></h2>
        <h3>Situação Atual : <span className={infoClass}>{info}</span></h3>
        <h4>Confira as Classificações:</h4>
      </div>
      <div className="table-header">
        <h4>IMC</h4>
        <h4>Classificação</h4>
        <h4>Obesidade</h4>
      </div>
      {data.map((dados) => (
        <div className="table-data" key={dados.info}>
          <p>{dados.classification}</p>
          <p>{dados.info}</p>
          <p>{dados.obesity}</p>

        </div>
      ))}
      <Button action={funcReturn} id={"btn-voltar"} text={"Voltar"}/>
    </div>


  )
}

export default TableImc