import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'; 
import Container from '@mui/material/Container'; 
 
const Header = () => { 
  return (
    <>    
    {/* <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters> 
              Need to add logo left side and user avatar in right side 
        </Toolbar>
      </Container>
    </AppBar> */}

    <nav className="navbar navbar-background">
      <div className="container-fluid aligin-left">
        <a className="navbar-brand" href="#">
          <img src="/img/images.jpg" alt="" width="40" height="34" class="rounded-circle" />
        </a>

        <a className="navbar-brand" href="#">
          <img src="/img/images.jpg" alt="" width="40" height="34" class="rounded-circle" />
        </a>

      </div>
    </nav>
    </>
  );
};
export default Header2;
