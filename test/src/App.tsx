import React, {useEffect} from 'react';
import './App.module.css';
import {Route, Routes} from 'react-router-dom';
import ViewMode from './components/ViewMode/ViewMode';
import Settings from './components/Settings/Settings';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';
import {addSerieAC, changeSerieAC, getSeriesTC, removeSerieAC, SeriesType} from './redux/series-reducer';
import {useDispatch} from 'react-redux';
import style from './App.module.css';

function App() {

    const series = useSelector<AppRootStateType, Array<SeriesType>>(state => state.series)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSeriesTC())
    }, [])

    const addChart = (serie: SeriesType) => {
        const action = addSerieAC(serie)
        dispatch(action);
    }

    const changeChart = (name: string, changeName: string, changeColor: string, changeStyleLine: string) => {
        const action = changeSerieAC(name, changeName, changeColor, changeStyleLine);
        dispatch(action)
    }

    const removeChart = (name: string) => {
        const action = removeSerieAC(name);
        dispatch(action)
    }

    return (
        <div className={style.app}>
            <h1>Charts</h1>
            <Routes>
                <Route path="/" element={<ViewMode series={series}/>}/>
                <Route path="/settings/" element={<Settings
                    series={series}
                    addChart={addChart}
                    changeChart={changeChart}
                    removeChart={removeChart}/>}/>
            </Routes>
        </div>
    );
}

export default App
