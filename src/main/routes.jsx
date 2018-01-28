import React from "react"
import {Route, Redirect, HashRouter, Switch} from "react-router-dom"
import Measurements from "../measurements/measurements" 



export default props => (
    <HashRouter>
            <div>
                <Route exact path="/" component={Measurements}/>
                <Redirect path="*" to="/"/>
            </div>
    </HashRouter>
)