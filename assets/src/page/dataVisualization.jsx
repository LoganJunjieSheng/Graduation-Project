import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ReactEcharts from 'echarts-for-react';
import '../App.css';
import retainLineSmooth from '../echarts/retain/lineSmooth';

class PageDataVisualization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            option: '大数据展示'
        }
    }

    componentWillMount() {

    }

    handleOption = (e) => {
        this.setState({option: e});
    }

    getEchart = () => {
        switch (this.state.option) {
            case '用户总数':
                return (<ReactEcharts
                    option={retainLineSmooth()}
                />);
        }
    }

    render() {
        return (
            <div className='body'>
                <h1 className='title-left'>大数据可视化</h1>
                <Row>
                    <Col xs="3">
                        <Paper>
                            <List>
                                <Subheader>数据列表</Subheader>
                                <ListItem primaryText="用户"
                                          nestedItems={[
                                              <ListItem key='用户总数' primaryText="用户总数" onClick={() => {
                                                  this.handleOption('用户总数')
                                              }}/>,
                                              <ListItem key='增长' primaryText="增长"/>,
                                              <ListItem key='分布' primaryText="分布"/>,
                                              <ListItem key='消费' primaryText="消费"/>,
                                          ]}/>
                            </List>
                        </Paper>
                    </Col>
                    <Col xs="9">
                        <Paper style={{minHeight: '500px', padding: '0 10px'}}>
                            <Subheader>{this.state.option}</Subheader>
                            <div>
                                {this.getEchart()}

                            </div>
                        </Paper>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PageDataVisualization;
