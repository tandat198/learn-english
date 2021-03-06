import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={HomePage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
