import { useEffect, useState } from 'react'

function Horario(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString('pt-BR'))

    useEffect(() => {
        const timer = setInterval(() => {
            setHora(new Date().toLocaleTimeString('pt-BR'))
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return <div className="hora"> {hora}  </div>
}

export default Horario;

