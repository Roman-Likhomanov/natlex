import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import {SeriesType} from '../../redux/series-reducer';
import {Button} from '@mui/material';
import style from './ViewMode.module.css';
import { useNavigate } from 'react-router-dom';

type PropsType = {
    series: Array<SeriesType>
}

const ViewMode: React.FC<PropsType> = (props) => {

    const options = {
        title: {
            text: 'My charts cars'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text: 'Date'
            },
            type: 'datetime',
            labels: {
                formatter: function (this: any) {
                    return Highcharts.dateFormat('%d %b %Y', this.value)
                }
            }
        },
        yAxis: {
            title: {
                text: 'Our values'
            }
        },

        series: props.series,
        rangeSelector: {
            enabled: true,
            inputEnabled: true,
            inputPosition: {
                align: 'center'
            }
        },
    }

    const navigate = useNavigate()

    const handleClickSettings = () => {
        navigate('/settings')
    }

    return <div>
        <div className={style.container}>
            <h2>ViewMode</h2>
            <Button onClick={handleClickSettings} variant="contained">Settings</Button>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>

}

export default ViewMode