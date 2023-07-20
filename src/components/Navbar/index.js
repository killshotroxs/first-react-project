import React from 'react';
import { Nav, NavLink, Bars,NavMenu} from './NavbarE';  

const Navbar = () => {
    return (
      <>
        <Nav>
          <Bars />
    
          <NavMenu>
            <NavLink to='/Postings' activeStyle>
              Postings
            </NavLink>
            <NavLink to='/Profile' activeStyle>
              Profile
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  };
    
  export default Navbar;