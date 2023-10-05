import { useState } from "react"
import Button from "./Button"
import "./ImcCalc.css"

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")

    const validDigits = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }


    const handleHeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeight(updateValue)
        console.log(updateValue)
    }
    const handleWeightChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setWeight(updateValue)
        console.log(updateValue)
    }

    const clearForm = (e) => {
        e.preventDefault()
        setHeight("")
        setWeight("")
    }

    return (
        <div id="calc_container">
            <h2>Calculadora IMC</h2>
            <form id="imc-form">
                <div className="form-control">
                    <label>
                        <span>Altura:</span>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Exemplo 1,75"
                            onChange={(e) => handleHeightChange(e)} value={height}
                        />
                    </label>
                    <div className="form-control">
                        <label>
                            <span>Peso:</span>
                            <input
                                type="text"
                                name="weight"
                                id="weight"
                                placeholder="Exemplo 70,5"
                                onChange={(e) => handleWeightChange(e)} value={weight} />
                        </label>
                    </div>
                </div>
                <div className="action-control">
                    <Button action={(e) => calcImc(e, height, weight)} id={"btn-enviar"} text={"Enviar"} />
                    <Button action={clearForm} id={"btn-limpar"} text={"Limpar"} />
                </div>
            </form>
        </div>
    )
}

export default ImcCalc