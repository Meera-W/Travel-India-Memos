import React from 'react';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import SpaOutlinedIcon from '@material-ui/icons/SpaOutlined';

const FooterComponent = () => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography variant="h5" align="center" gutterbottom>
                <SpaOutlinedIcon color='primary'/>
               
            </Typography>
         
            <Typography variant="overline" align="center" color="textPrimary" gutterbottom>
                Meera Wadher • Gauri Shewale 
                
            </Typography>
            <Typography variant="caption" gutterbottom>
                Copyright ©Travel India 2021
            </Typography>
        </div>
    );
}

export default FooterComponent;