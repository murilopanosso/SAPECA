import React from "react"
import {Route, Redirect, HashRouter, Switch} from "react-router-dom"
import Measurements from "../measurements/measurements" 
import AboutTeam from "../about/aboutTeam";


export default props => (
    <HashRouter>
            <div>
                <Route exact path="/" component={Measurements}/>
                <Route exact path="/AboutTeam" component={AboutTeam}/>
                <Redirect path="*" to="/"/>
            </div>
    </HashRouter>
)