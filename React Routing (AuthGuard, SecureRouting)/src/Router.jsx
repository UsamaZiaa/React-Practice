import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users'
import User from './components/User';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <PrivateRoute path="/home" component={Home}/>
                <PrivateRoute path="/users" component={Users} />
                <PrivateRoute path="/user/:userId" component={User} />
                <Route component={() => <h1>Not Found</h1>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;