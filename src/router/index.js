import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"
import { useState } from "react"

// import { ThemeProvider } from "styled-components";

// import {DarkTheme} from '../config/themes'
import routes from './routes'

import Header from '../components/header'

import Login from '../views/Login'
import Characters from '../views/Characters'
import Character from "../views/Character";
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

const Router = () => {
    const [token, setToken] = useState(localStorage.getItem('token'))
    // const isAuthenticated = getToken();

    return (
        // <ThemeProvider theme={DarkTheme}>
        <BrowserRouter>
            <Header/>

            <Switch>
                {/* <Route exact path="/">
                    <Login></Login>
                </Route>
                <Route exact path="/characters">
                    <Characters></Characters>
                </Route>
                <Route exact path="/characters/:id">
                    <Character></Character>
                </Route> */}

                {routes.map(({ component: Component, path, exact, meta}) => (
                    meta.requiresAuth ? (
                        <PrivateRoute path={path} exact={exact}>
                            <Component />
                        </PrivateRoute>
                    ) : (
                        <PublicRoute path={path} exact={exact}>
                            <Component />
                        </PublicRoute>
                    )
                ))}

                <Redirect from="/*" to="/" />
            </Switch>
        </BrowserRouter>
    //   </ThemeProvider>
    )
}

export default Router