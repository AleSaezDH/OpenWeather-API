import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import {Snackbar, Card} from '@material-ui/core';

function Alert({setErrorHome, errorHome, error, setError}) {

    
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props}/>;
      }
      
      const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          '& > * + *': {
            marginTop: theme.spacing(2),
          },
        },
      }));
      
        const classes = useStyles();
        const [open, setOpen] = React.useState(true);
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setErrorHome(false)
          //setOpen(false);
        };
        

        const handleCloseT = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
          setError(false)
          //setOpen(false);
        };

    return (<>
        {errorHome ? <div className={classes.root}><Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info"> 
              Ubicación no encontrada
            </Alert>
            </Snackbar></div> : null }

            {error ? <div className={classes.root}><Snackbar open={open} autoHideDuration={6000} onClose={handleCloseT}>
            <Alert onClose={handleCloseT} severity="info"> 
            Completa la ciudad
            </Alert>
            </Snackbar></div> : null }
            </>
    )
}

export default Alert
