import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import '../static/css/navbar.css';

function Navbar() {
   return (
      <div className="navbar">
         <AppBar position="fixed">
            <Toolbar>
               <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
               >
                  <Grid item xs={4}>
                     <Typography variant="title" color="inherit">Ideal Flatmates</Typography>
                  </Grid>
                  <Grid item xs={7} container justify="flex-end">
                     <MenuItem component={Link} to="">Accommodation in Dublin</MenuItem>
                     <MenuItem component={Link} to="">Flatmate of the week</MenuItem>
                     <MenuItem component={Link} to="">Contact</MenuItem>
                  </Grid>
               </Grid>
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default Navbar;