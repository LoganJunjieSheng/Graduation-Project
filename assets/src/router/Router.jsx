import React from 'react';
import {
    // BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Index from '../page/index';
import PageClusterControl from '../page/clusterControl';
// import routes from './router.config';

const Routers = () => (
    <div>
        <Switch>
            <Route path="/index" exact={true} component={Index}/>
            <Route path="/cluster" exact={true} component={PageClusterControl}/>//集群控制

            <Redirect from="/" to="/index"/> {/*重定向*/}
        </Switch>
    </div>

);

export default Routers;