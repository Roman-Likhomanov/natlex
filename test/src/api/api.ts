import axios from 'axios'
import {SeriesType} from '../redux/series-reducer';

export const api = () => {
    return axios.get<SeriesType[]>('http://localhost:3001/data')
}


