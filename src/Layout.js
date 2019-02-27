import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';


class Layout extends Component {
    render() {
        return (
            <Fragment>
                <div className="Navlinks">
                    <div className='container pt-3'>
                        <NavLink className='link mr-3' to='/'>Home</NavLink>
                        <NavLink className='link mr-3' to='/aboutus'>About Us</NavLink>
                        <NavLink className='link mr-3' to='/contacts'>Contacts</NavLink>
                    </div>
                </div>
                {this.props.children}
            </Fragment>
        );
    }
}

export default Layout;
