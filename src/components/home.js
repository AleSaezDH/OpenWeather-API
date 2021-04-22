import React, { useEffect, useState } from 'react';
import Formulario from './formulario';
import Datos from './datos';
import Alert from './alert';

function Home () {

    const [busqueda, setBusqueda] = useState({});
    const [datosFinales, setDatosFinales]= useState({});
    const [errorHome, setErrorHome] = useState(false);

    const {ciudad, pais} = busqueda;
    useEffect(() => {
        if (Object.keys(busqueda).length !== 0) {
            let apiKey = '86b11e90bb1cbc62d052e9530b562940';
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.cod !== 200) {
                    return setErrorHome(true);
                }
                setDatosFinales(data);
            });
        }
    }, [busqueda]);

    return (
        <div>
            <Formulario setBusqueda={setBusqueda}/>
            {errorHome && Object.keys(busqueda).length !== 0 ? <Alert setErrorHome={setErrorHome} errorHome={errorHome}/> : null}
            {Object.keys(datosFinales).length !== 0 ? <Datos datosFinales={datosFinales} pais={pais}/> : null }
        </div>
    )
}

export default Home 
