import {DataType} from '../../../redux/series-reducer';

type DataSeriesType = {
    [key: string]: Array<DataType>
}

export const dataSeries: DataSeriesType = {
    default1: [
        [Date.UTC(2022, 0, 1), 10.0],
        [Date.UTC(2022, 1, 1), 1.9],
        [Date.UTC(2022, 2, 1), 19.5],
        [Date.UTC(2022, 3, 1), 8.5],
        [Date.UTC(2022, 4, 1), 30.2],
        [Date.UTC(2022, 5, 1), 43.5],
        [Date.UTC(2022, 6, 1), 7.2],
        [Date.UTC(2022, 7, 1), 4.5],
        [Date.UTC(2022, 8, 1), 35.3],
        [Date.UTC(2022, 9, 1), 12.3],
        [Date.UTC(2022, 10, 1), 37.9],
        [Date.UTC(2022, 11, 1), 2.6]
    ],
    default2: [
        [Date.UTC(2022, 0, 1), 1.0],
        [Date.UTC(2022, 1, 1), 14.9],
        [Date.UTC(2022, 2, 1), 21.5],
        [Date.UTC(2022, 3, 1), 32.5],
        [Date.UTC(2022, 4, 1), 40.2],
        [Date.UTC(2022, 5, 1), 43.5],
        [Date.UTC(2022, 6, 1), 57.2],
        [Date.UTC(2022, 7, 1), 14.5],
        [Date.UTC(2022, 8, 1), 5.3],
        [Date.UTC(2022, 9, 1), 12.3],
        [Date.UTC(2022, 10, 1), 27.9],
        [Date.UTC(2022, 11, 1), 2.6]
    ],
    default3: [
        [Date.UTC(2022, 0, 1), 13.0],
        [Date.UTC(2022, 1, 1), 34.9],
        [Date.UTC(2022, 2, 1), 41.5],
        [Date.UTC(2022, 3, 1), 52.5],
        [Date.UTC(2022, 4, 1), 10.2],
        [Date.UTC(2022, 5, 1), 13.5],
        [Date.UTC(2022, 6, 1), 37.2],
        [Date.UTC(2022, 7, 1), 34.5],
        [Date.UTC(2022, 8, 1), 35.3],
        [Date.UTC(2022, 9, 1), 32.3],
        [Date.UTC(2022, 10, 1), 27.9],
        [Date.UTC(2022, 11, 1), 22.6]
    ]
}