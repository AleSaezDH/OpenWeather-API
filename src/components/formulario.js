import React, { useState } from 'react';
import {Card, TextField, Snackbar, Button} from '@material-ui/core';
import Alert from './alert';

function Formulario ({setBusqueda}) {

    const [error, setError] = useState(false);
    const [datos, setDatos] = useState({
        ciudad : '',
        pais : ''
    });

    const {ciudad, pais} = datos;

    function validarForm (e) {
        e.preventDefault();

        if ((ciudad).trim() === '') {
            return setError(true);
        }
        setError(false);
        setBusqueda(datos);
        setDatos({ciudad:'', pais: ''})
    }

    return (<>
        <Card style={{width:600, height:300, display:'flex', justifyContent:'center', alignItems:'center', margin:'0 auto', marginTop: 70}}>
        <form style={{display:'flex', flexDirection:'column', width:500}} onSubmit={validarForm}>
            <TextField id="outlined-basic" label="Ciudad" variant="outlined" name='ciudad' onChange={(e) => setDatos({...datos, [e.target.name]:e.target.value})} value={ciudad} style={{marginBottom:50}}/>

            <Button type='submit' variant="contained" color="secondary">Buscar</Button>
        </form>
        </Card>
        {error ? <Alert setError={setError} error={error}/> : null}
        </>
    )
}

export default Formulario 
