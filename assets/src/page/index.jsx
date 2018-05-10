import React, {Component} from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Redirect} from 'react-router-dom';
import '../App.css';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            redirectToReferrer: false,
        }
    }

    handleAccount = (e) => {
        this.setState({account: e.target.value});
    };
    handlePassword = (e) => {
        this.setState({password: e.target.value});
    };
    signIn = () => {
        if (this.state.account !== this.state.password) {
            alert('请检查用户名与密码')
        } else {
            this.setState({
                redirectToReferrer:true,
            })
        }
    };

    render() {
        if (this.state.redirectToReferrer) {
            return <Redirect to='/cluster'/>;
        }
        return (
            <div>
                <div style={{width: '280px', margin: '100px auto 0 '}}>
                    <Card>
                        <CardHeader
                            title="登录"
                            // subtitle="Subtitle"
                            // actAsExpander={true}
                            // showExpandableButton={true}
                        />
                        <CardActions>
                            <TextField
                                hintText="用户名"
                                value={this.state.account}
                                onChange={this.handleAccount}
                            /><br/>
                            <TextField
                                hintText="密码"
                                type="password"
                                value={this.state.password}
                                onChange={this.handlePassword}
                            /><br/>
                            <RaisedButton label="登录" primary={true} style={{marginLeft: '80px'}} onClick={this.signIn}/>
                        </CardActions>
                        <CardText expandable={true}>

                        </CardText>
                    </Card>
                </div>

            </div>
        );
    }
}

export default Index;
