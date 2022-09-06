import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl, MenuItem, TextField
} from '@mui/material';
import {ChangeEvent, useEffect, useState} from 'react';
import style from '../Settings.module.css';
import {SeriesType} from '../../../redux/series-reducer';


type PopupChangePropsType = {
    changeChart: (name: string, changeName: string, changeColor: string, changeStyleLine: string) => void
    series: Array<SeriesType>
}


export const PopupChange: React.FC<PopupChangePropsType> = (props) => {

    const [openPopup, setOpenPopup] = useState(false);
    const [name, setName] = useState<string>('')
    const [changeName, setChangeName] = useState<string>('')
    const [changeColor, setChangeColor] = useState<string>('')
    const [changeStyleLine, setChangeStyleLine] = useState<string>('')


    useEffect(() => {
        let changeSeries = props.series.find(s => s.name === name) as SeriesType

        if(changeSeries) {
            setChangeName(changeSeries.name)
            setChangeColor(changeSeries.color)
            setChangeStyleLine(changeSeries.dashStyle)
        }
    },[name])


    const handleClickOpenPopup = () => {
        setOpenPopup(true)
    }

    const handleChange = () => {
       if (changeName && changeColor && changeStyleLine){
           props.changeChart(name, changeName, changeColor, changeStyleLine)
       }
        setOpenPopup(false)
        setName('')
        setChangeName('')
        setChangeColor('')
        setChangeStyleLine('')
    }

    const handleClose = () => {
        setOpenPopup(false)
        setName('')
        setChangeName('')
        setChangeColor('')
        setChangeStyleLine('')
    }

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value as string)
    }

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setChangeName(event.target.value as string)
    }

    const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
        setChangeColor(event.target.value as string)
    }

    const handleChangeStyleLine = (event: ChangeEvent<HTMLInputElement>) => {
        setChangeStyleLine(event.target.value as string)
    }

    return (
        <div className={style.popup}>
            <Button size="small" variant="contained" onClick={handleClickOpenPopup}>
                Change chart
            </Button>
            <Dialog
                open={openPopup}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={style.dialogTitle} id="alert-dialog-title">
                    {'Change chart'}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{minWidth: 250}}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-basic"
                                label="Name of the chart to change"
                                variant="outlined"
                                helperText="Please enter the name of the chart to change"
                                value={name}
                                onChange={handleName}/>
                            <TextField
                                id="outlined-basic"
                                variant="outlined"
                                helperText="Please сhange the name of the chart"
                                value={changeName}
                                onChange={handleChangeName}/>
                            <TextField
                                id="outlined-select-currency"
                                label=""
                                select
                                value={changeColor}
                                onChange={handleChangeColor}
                                helperText="Please сhange the color of the chart"
                            >
                                <MenuItem value="#FFA500">Orange</MenuItem>
                                <MenuItem value="#808080">Gray</MenuItem>
                                <MenuItem value="#00FFFF">Aqua</MenuItem>
                                <MenuItem value="#000000">Black</MenuItem>
                                <MenuItem value="#808000">Olive</MenuItem>
                                <MenuItem value="#FF0000">Red</MenuItem>
                                <MenuItem value="#0000FF">Blue</MenuItem>
                                <MenuItem value="#32CD32">LimeGreen</MenuItem>
                                <MenuItem value="#FFD700">Gold</MenuItem>
                                <MenuItem value="#FF00FF">Magenta</MenuItem>
                            </TextField>
                            <TextField
                                id="outlined-select-currency"
                                label=""
                                select
                                value={changeStyleLine}
                                onChange={handleChangeStyleLine}
                                helperText="Please сhange the style line of the chart"
                            >
                                <MenuItem value="Solid">Solid</MenuItem>
                                <MenuItem value="Dash">Dash</MenuItem>
                                <MenuItem value="Dot">Dot</MenuItem>
                                <MenuItem value="DashDot">DashDot</MenuItem>
                                <MenuItem value="LongDash">LongDash</MenuItem>
                            </TextField>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions className={style.dialogAction}>
                    <Button onClick={handleChange}>Change chart</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


