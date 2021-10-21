import { useState } from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';
  
const PrivateRoute = ({ children, ...rest }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    return (
        <Route {...rest}>
            { token ? children : <Redirect to="/" />}
        </Route>
    )
}

export default PrivateRoute;