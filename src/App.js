import React from 'react'
import Router from './router'
import { ThemeProvider } from "styled-components";

import {DarkTheme} from './config/themes'

// import './App.css'
// import Header from './components/header'
// import Counter from './components/counter'
// import Todos from './components/todos'
// import HarryPotter from './components/api'

function App() {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Router/>
        </ThemeProvider>

        // <div className="App">
        //   {/* <Header label="Vive la France"/> */}
        //   {/* <Counter/> */}
        //   {/* <Todos/> */}
        //   {/* <HarryPotter/> */}
        // </div>
    )
}

export default App
