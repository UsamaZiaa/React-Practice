import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const Router = () => {
    return (
        <BrowserRouter>

            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route>
                    <h1>Not Found</h1>
                </Route>
            </Switch>

        </BrowserRouter>
    )
}

export default Router;