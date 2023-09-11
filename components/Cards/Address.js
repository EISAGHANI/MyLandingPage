import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/LocalPhone';
// import LocationIcon from '@mui/icons-material/LocationOn';
import useStyles from './cards-style';

function Address(props) {
  const { classes } = useStyles();
  const {
    name, text,
  } = props;
  return (
    <div className={classes.paperAddress}>
      <Typography variant="h6" display="block">
        {name}
      </Typography>
      <Grid container>

        <Grid item xs={12}>
          {text}
        </Grid>
      </Grid>
    </div>
  );
}

Address.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};

export default Address;
