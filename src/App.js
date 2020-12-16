import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, NavLink
} from "react-router-dom";
import React, {useContext} from 'react';
import {firebaseAuth} from './provider/AuthProvider'
import Signin from "./component/Signin";
import Home from "./component/Home";
import Signup from "./component/Signup";
import Download from "./component/Download";

function App() {
    const {token} = useContext(firebaseAuth)
    return (
        <div>
            <nav className={"App-header"}>
                <h1>w3rk.ml</h1>
                <ul>

                    <li>{
                        !token ?
                            <NavLink exact activeClassName='is-active' to="/">Login</NavLink>
                            : <NavLink exact activeClassName='is-active' to="/">Manage</NavLink>
                    }
                    </li>
                    {
                        !token ?
                            <li>
                                <NavLink activeClassName='is-active' to="/register">Register</NavLink>
                            </li>
                            : null
                    }

                    <li>
                        <NavLink activeClassName='is-active' to="/download">Download</NavLink>
                    </li>
                    <li>
                        <a target="_blank" href={"https://www.twitch.tv/w3rk"}>Twitch</a>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/download">
                    <Download/>
                </Route>
                <Route path="/register">
                    <Signup/>
                </Route>
                <Route path="/">
                    {rProps => token === null ? <Signin/> : <Home/>}
                </Route>
            </Switch>
        </div>
    );
}

function Login() {
    return <h2>Login</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

export default App;
