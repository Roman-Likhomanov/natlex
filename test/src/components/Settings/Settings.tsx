import Highcharts from 'highcharts/highstock';
import style from './Settings.module.css';
import {Button} from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import {SeriesType} from '../../redux/series-reducer';
import { useNavigate } from 'react-router-dom';
import {PopupRemove} from './RemoveChart/PopupRemove';
import {PopupAdd} from './AddChart/PopupAdd';
import {PopupChange} from './ChangeChart/PopupChange';

type SettingsPropsType = {
    series: Array<SeriesType>
    addChart: (serie: SeriesType) => void
    changeChart: (name: string, changeName: string, changeColor: string, changeStyleLine: string) => void
    removeChart: (name: string) => void
}

const Settings: React.FC<SettingsPropsType> = (props) => {

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
    }

    const navigate = useNavigate()

    const handleClickViewMode = () => {
        navigate('/')
    }

    return <div>
        <div className={style.container}>
            <h2>Settings</h2>
            <Button onClick={handleClickViewMode} variant="contained">ViewMode</Button>
        </div>
        <div className={style.popupContainer}>
            <PopupAdd addChart={props.addChart}/>
            <PopupChange changeChart={props.changeChart} series={props.series}/>
            <PopupRemove removeChart={props.removeChart}/>
        </div>
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>

}

export default Settings