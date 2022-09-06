import {combineReducers, createStore, applyMiddleware} from 'redux';
import {seriesReducer} from './series-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    series: seriesReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


