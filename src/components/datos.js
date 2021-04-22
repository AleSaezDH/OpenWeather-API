import React from 'react';
import {Card, Typography } from '@material-ui/core';
import 'fontsource-roboto';

function Datos ({datosFinales, pais}) {

    let kelvin = 273.15;

    return (
        <Card style={{width:400, margin:'0 auto', marginTop:30, padding:20}}>
            <Typography variant="h4" style={{textTransform:'capitalize'}}>
                {datosFinales.name}
            </Typography>

            <Typography variant="h6" style={{textTransform:'capitalize'}}>
                Humedad: {datosFinales.main.humidity} %
            </Typography>

            <Typography variant="h6" style={{textTransform:'capitalize'}}>
                Temperatura: {parseFloat(datosFinales.main.temp - kelvin).toFixed(1)} <span> &#x2103; </span>
            </Typography>

            <Typography variant="h6" style={{textTransform:'capitalize'}}>
                Temperatura máxima: {parseFloat(datosFinales.main.temp_max - kelvin).toFixed(1)} <span> &#x2103; </span>
            </Typography>

            <Typography variant="h6" style={{textTransform:'capitalize'}}>
                Temperatura mínima: {parseFloat(datosFinales.main.temp_min - kelvin).toFixed(1)} <span> &#x2103; </span>
            </Typography>

            <Typography variant="h6" style={{textTransform:'capitalize'}}>
                Sensación térmica: {parseFloat(datosFinales.main.feels_like - kelvin).toFixed(1)} <span> &#x2103; </span>
            </Typography>
        </Card>
    )
}

export default Datos;
