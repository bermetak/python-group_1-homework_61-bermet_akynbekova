import React, {Component, Fragment} from 'react';
import {NavLink} from 'react-router-dom';


class Layout extends Component {
    render() {
        return (
            <Fragment>
                <div className="Navlinks">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/aboutus'>About Us</NavLink>
                    <NavLink to='/contacts'>Contacts</NavLink>
                </div>
                {this.props.children}
            </Fragment>
        );
    }
}

export default Layout;
