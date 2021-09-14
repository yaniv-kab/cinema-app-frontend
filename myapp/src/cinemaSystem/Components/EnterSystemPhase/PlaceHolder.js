import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginComp from './Login'
import CreateAcc from './CreateAccount'
import MainComp from '../MainPhase/MainPage'
const PlaceHolderComp = () => {




    return (
        <div>
            <h1><img style={{ marginTop: "20px" }} src="https://img.icons8.com/plasticine/50/000000/documentary.png" /> Movies - Subscription Web Site</h1>
            <Switch>
                <Route exact path="/" component={LoginComp} />
                <Route path="/createAcc" component={CreateAcc} />
                <Route path="/main" component={MainComp} />
            </Switch>


        </div>
    )
}
export default PlaceHolderComp