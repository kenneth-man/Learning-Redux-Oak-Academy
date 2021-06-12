import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='ui raised very padded segment'>
            <a className='ui teal inverted segment'>Gloria</a>
            <div className='ui right floated header'>
                <NavLink to='/' exact={true} activeClassName={'navlink-active'} className='navlink transition'>Home</NavLink>
            
                <NavLink to='/about' exact={true} activeClassName={'navlink-active'} className='navlink transition'>About</NavLink>
            
                <NavLink to='/contact' exact={true} activeClassName={'navlink-active'} className='navlink transition'>Contact</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;