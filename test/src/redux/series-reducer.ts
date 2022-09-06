import {Dispatch} from 'redux';
import {api} from '../api/api';

export type SeriesType = {
    name: string
    color: string
    dashStyle: string
    data: DataType[]
}
export type DataType = number[]

type SetSeriesType = {
    type: 'SET-SERIES'
    series: SeriesType[]
}

type AddSerieType = {
    type: 'ADD-SERIE'
    serie: SeriesType
}

type ChangeSerieType = {
    type: 'CHANGE-SERIE'
    name: string
    changeName: string
    changeColor: string
    changeStyleLine: string
}

type RemoveSerieType = {
    type: 'REMOVE-SERIE'
    name: string
}

type ActionsType = SetSeriesType | AddSerieType | ChangeSerieType | RemoveSerieType


const initialState: Array<SeriesType> = []

export const seriesReducer = (state: Array<SeriesType> = initialState, action: ActionsType): Array<SeriesType> => {
    switch (action.type) {
        case 'SET-SERIES': {
            return action.series
        }
        case 'ADD-SERIE': {
            return [action.serie, ...state]
        }
        case 'CHANGE-SERIE': {
            const serie = state.find(s => s.name === action.name)
            if (serie) {
                serie.name = action.changeName
                serie.color = action.changeColor
                serie.dashStyle = action.changeStyleLine
            }
            return [...state]
        }
        case 'REMOVE-SERIE': {
            return state.filter(s => s.name !== action.name)
        }
        default:
            return state
    }
}

export const setSeriesAC = (series: SeriesType[]) => {
    return {type: 'SET-SERIES', series}
}

export const addSerieAC = (serie: SeriesType) => {
    return {type: 'ADD-SERIE', serie}
}

export const changeSerieAC = (name: string, changeName: string, changeColor: string, changeStyleLine: string) => {
    return {type: 'CHANGE-SERIE', name, changeName, changeColor, changeStyleLine}
}

export const removeSerieAC = (name: string) => {
    return {type: 'REMOVE-SERIE', name}
}

export const getSeriesTC = () => {
    return async (dispatch: Dispatch) => {
        let data = await api()
        dispatch(setSeriesAC(data.data))
    }
}



