import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
  } from "react-router-dom"
import { ThemeProvider } from "styled-components";

import {DarkTheme} from '../config/themes'

import Login from '../views/Login'
import Characters from '../views/Characters'

import Header from '../components/header'

const Router = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path="/">
                      <Login></Login>
                    </Route>
                    <Route path="/characters">
                      <Characters></Characters>
                    </Route>

                    <Redirect from="/*" to="/" />
                </Switch>
        </BrowserRouter>
      </ThemeProvider>
    )
}

export default Router