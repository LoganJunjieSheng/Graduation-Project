import myDate from '../date'
import myData from '../data'
export default function retainLineSmooth() {
    return {
        title : {
            text: '用户数量曲线图',
            // subtext: '数据来自西安兰特水电测控技术有限公司',
            x: 'center',
            align: 'right'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#505765'
                }
            }
        },
        legend: {
            data:['流量'],
            x: 'left'
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
            },
            {
                type: 'inside',
                realtime: true,
            }
        ],
        xAxis: {
            type: 'category',
            data: myDate(),
        },
        yAxis: {
            name: '总用户(人)',
            type: 'value'
        },
        series: [{
            name:'用户人数',
            data:  myData(1000,360,0.05),
            type: 'line',
            smooth: true
        }]
    };
}