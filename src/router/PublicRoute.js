import { useState } from 'react';
import {
    Route,
    Redirect
  } from 'react-router-dom';
  
const PublicRoute = ({ children, ...rest }) => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    return (
        <Route {...rest}>
            { !token ? children : <Redirect to="/characters" />}
        </Route>
    )
}

export default PublicRoute;