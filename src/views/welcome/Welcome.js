import React, {Component} from 'react';
import SideNav from "./container/SideNav";
import './Welcome.css';
import {Switch, Route} from "react-router";
import Routes from '../../AppRoutes';


class Welcome extends Component {
    state = {
        sideNavItems: [
            { label:'Dashboard', path:'',exact:true},
            { label:'Settings', path:'/settings',exact:true},
        ],
        activeState: 0
    }
    changeActiveStateHandler = (active) => {
        this.setState({
            activeState: active
        })
    }

    render() {
        return (
            <section id="welcome">
                <SideNav changeActiveState={this.changeActiveStateHandler}
                         activeState={this.state.activeState}
                         sideNavItems={this.state.sideNavItems}/>
                <div className="content">
                    <Switch>
                        {Routes.map((route, key) => (
                            <Route path={route.path} key={key}
                                   component={route.component} exact={route.exact}/>
                        ))}
                    </Switch>
                </div>

            </section>

        );
    }

}

export default Welcome;