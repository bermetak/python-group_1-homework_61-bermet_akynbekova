import React, {Component} from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import Home from './containers/Home/Home';
import AboutUs from './containers/AboutUs/AboutUs';
import Contacts from './containers/Contacts/Contacts';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <div className="container">
                        <Switch>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/aboutus" component={AboutUs}/>
                            <Route path="/" exact component={Home}/>
                        </Switch>
                    </div>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
