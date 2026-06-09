import { useState } from 'react'
import CurrencyInput from 'react-currency-input-field';


function MainPage() {
    const [valor, setValor] = useState('')
    const [porcentagem, setPorcentagem] = useState('')
    const [resultado, setResultado] = useState(0)

    function calculoValores(param1, param2) {
        const numero1 = parseFloat(param1) || 0
        const numero2 = parseFloat(param2) || 0
        const desconto = numero1 * (numero2 / 100)
        return numero1 - desconto
    }

    function handleCalcular() {
        if (valor === '' && porcentagem === '') {
            alert('Informe valores reais!')
            return
        }

        setResultado(calculoValores(valor, porcentagem))
    }

    function limparCampos() {
        setValor('')
        setPorcentagem('')
        setResultado(0)
    }

    return (
        <>
            <main>
                <div className="div-calculo">
                    <input 
                        type="number"
                        placeholder="$"
                        value={valor}
                        onChange={(e) => setValor(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="%"
                        value={porcentagem}
                        onChange={(e) => setPorcentagem(e.target.value)}

                    />

                    <button onClick={handleCalcular}>Calcular %</button>
                    <button onClick={limparCampos}>Limpar</button>

                    <span> ${resultado.toFixed(2)}</span>
                </div>
            </main>
        </>
    )
}

export default MainPage;