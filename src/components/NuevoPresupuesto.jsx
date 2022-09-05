import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0) {
            setMensaje('It is not a valid quote')
            return
        } 
        setMensaje('')
        setIsValidPresupuesto(true)
        
    }

    return (
        <div className="contenedor-presupuesto contenedor sombra">
            
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Add Your Budget</label>

                    <input 
                        className="nuevo-presupuesto"
                        type="number"
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value="ADD" />

                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
