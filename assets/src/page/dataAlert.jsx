import React, {Component} from 'react';
import '../App.css';
import config from '../config'
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import ReactEcharts from 'echarts-for-react';
import dataAlertArray1 from "../echarts/dataAlert/array1";
import myDate from '../echarts/date';
class PageDataAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array1: [],
            array1Value: [],
            array1Time:[],
            array1Max: 0,
            arrayControl: null,
        }
    }

    getArray1 = () => {
        const that = this;
        axios.get(config.ip + '/dataAlert')
            .then(function (res) {
                const data = res.data.data;
                const time=res.data.time;
                // console.log(time);
                const idStart = data.indexOf('id:\'') + 4;
                const idEnd = data.indexOf('\',');
                const id = data.substring(idStart, idEnd);
                // console.log(idStart);
                // console.log(idEnd);
                // console.log(id);
                const valueStart = data.indexOf('value:\'') + 7;
                const valueEnd = data.indexOf('\',', idEnd + 2);
                const value = data.substring(valueStart, valueEnd);
                // console.log(valueStart);
                // console.log(valueEnd);
                // console.log(value);
                const maxStart = data.indexOf('max:\'') + 5;
                const maxEnd = data.indexOf('\',', valueEnd + 2);
                const max = data.substring(maxStart, maxEnd);
                // console.log(valueStart);
                // console.log(valueEnd);
                // console.log(max);
                let array1 = Object.assign([], that.state.array1);
                let array1Value = Object.assign([], that.state.array1Value);
                let array1Time = Object.assign([], that.state.array1Time);
                array1.push({
                    id: id,
                    value: value,
                    max: max,
                });
                array1Value.push(value);
                array1Time.push(myDate.timestamp(time));
                that.setState({
                    array1: array1,
                    array1Value: array1Value,
                    array1Time:array1Time,
                    arrayMax: max,
                })
            })
            .catch(function (err) {
                console.log(err);
            })
        // console.log(this.state.array1)
    };
    startWatchArray1 = () => {
        let arrayControl = setInterval(this.getArray1, 1000);
        this.setState({arrayControl: arrayControl})
    };
    endWatchArray1 = () => {
        clearInterval(this.state.arrayControl);
    };

    render() {
        return (
            <div className='body'>
                <h1 className='title-left'>数据预警</h1>
                <div>
                    <RaisedButton label="开始监控" style={{marginRight: '30px'}} primary={true}
                                  onClick={() => this.startWatchArray1(0)}/>
                    <RaisedButton label="结束监控" secondary={true} onClick={() => this.endWatchArray1(0)}/>
                    <ReactEcharts
                        option={dataAlertArray1(this.state.array1Value,this.state.array1Time)}
                        key={'用户总数'}
                    />
                </div>

            </div>
        );
    }
}

export default PageDataAlert;
