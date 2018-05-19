import React, {Component} from 'react';
import '../App.css';
import config from '../config'
import axios from 'axios';

class PageDataAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    test = () => {
        axios.get(config.ip + '/kafka')
            .then(function (res) {
                console.log(res);
            })
    };

    render() {
        return (
            <div className='body'>
                <h1 className='title-left'>数据预警</h1>
                <button onClick={this.test}>test</button>
            </div>
        );
    }
}

export default PageDataAlert;
