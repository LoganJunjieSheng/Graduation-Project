import React from 'react';
import {
    // BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import Index from '../page/index';
import PageClusterControl from '../page/clusterControl';
import PageAuthorityManagement from '../page/authorityManagement';
import PageDataAlert from '../page/dataAlert';
import PageDataVisualization from "../page/dataVisualization";
// import routes from './router.config';

const Routers = () => (
    <div>
        <Switch>
            <Route path="/index" exact={true} component={Index}/>
            <Route path="/cluster" exact={true} component={PageClusterControl}/>{/*集群控制*/}
            <Route path="/authority" exact={true} component={PageAuthorityManagement}/>{/*集群控制*/}
            <Route path="/alert" exact={true} component={PageDataAlert}/>{/*数据预警*/}
            <Route path="/visualization" exact={true} component={PageDataVisualization}/>{/*大数据可视化*/}

            <Redirect from="/" to="/index"/> {/*重定向*/}
        </Switch>
    </div>

);

export default Routers;