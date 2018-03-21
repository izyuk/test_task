import React from 'react';
import Menu from './menu';
import Contacts from './contacts';

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <Menu/>
                <Contacts/>
            </nav>
        )
    }
}

export default Nav;