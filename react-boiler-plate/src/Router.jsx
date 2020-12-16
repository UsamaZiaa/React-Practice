import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users'
import User from './components/User';

const Router = () => {
    return (
        <BrowserRouter>

            {/* <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
            </ul> */}

            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contactus" component={Contact} />
                <Route path="/users" component={Users}/>
                <Route path="/user/:userId" component={User}/>
                <Route component={() => <h1>Not Found</h1>}/>
            </Switch>

        </BrowserRouter>
    )
}

export default Router;