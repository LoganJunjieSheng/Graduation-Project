import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
// import IconButton from 'material-ui/IconButton';
// import FontIcon from 'material-ui/FontIcon';
import {Link} from 'react-router-dom';
class MyNav extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
    handleClose = () => this.setState({open: false});

    render() {
        return (
            <div>
                <AppBar
                    title="Edison"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}

                />
                <Drawer
                    open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <MenuItem><Link className='link' to='cluster'>集群控制</Link></MenuItem>
                    <MenuItem>权限管理</MenuItem>
                </Drawer>
            </div>

        );
    }
}

export default MyNav;
