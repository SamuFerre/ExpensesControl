import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {


    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Expenses Filter</label>
                    <select
                        value={filtro}
                        onChange={e => setFiltro(e.target.value) }
                    >
                        <option value="">-- All Categories --</option>
                        <option value="saving">Saving</option>
                        <option value="food">Food</option>
                        <option value="home">Home</option>
                        <option value="leisure">Leisure</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="subscriptions">Subscriptions</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros
