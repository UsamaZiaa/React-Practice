import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ path, component }) => {
    const isAuthentication = localStorage.getItem("isLoggedIn");
    const Component = component;
    return <Route path={path}
        render={() => {
            if (isAuthentication) {
                return <Component />
            } else {
                return <Redirect to="/" />
            }
        }}
    />
}

export default PrivateRoute;