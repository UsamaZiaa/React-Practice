import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users'
import User from './components/User';

const Router = () => {
    return (
        <BrowserRouter>

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