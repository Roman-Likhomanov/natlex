import {
    Box, Button, Dialog,
    DialogActions, DialogContent,
    DialogTitle, FormControl, MenuItem, TextField
} from '@mui/material';
import {ChangeEvent, useState} from 'react';
import style from '../Settings.module.css';
import {SeriesType} from '../../../redux/series-reducer';
import {dataSeries} from './data'


type PopupAddPropsType = {
    addChart: (serie: SeriesType) => void
}

export const PopupAdd: React.FC<PopupAddPropsType> = (props) => {

    const [openPopup, setOpenPopup] = useState(false)

    const [name, setName] = useState('')
    const [color, setColor] = useState('')
    const [styleLine, setstyleLine] = useState('')
    const [data, setData] = useState('')

    let serie = {
        name: name,
        color: color,
        dashStyle: styleLine,
        data: dataSeries[data]
    }

    const handleClickOpenPopup = () => {
        setOpenPopup(true)
    }

    const handleAdd = () => {
        props.addChart(serie)
        setOpenPopup(false)
        setName('')
        setColor('')
        setstyleLine('')
        setData('')
    }

    const handleClose = () => {
        setOpenPopup(false)
        setName('')
        setColor('')
        setstyleLine('')
        setData('')
    }

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value as string)
    }

    const handleChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value as string)
    }

    const handleChangeStyleLine = (event: ChangeEvent<HTMLInputElement>) => {
        setstyleLine(event.target.value as string)
    }

    const handleChangeData = (event: ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value as string)
    }

    return (
        <div className={style.popup}>
            <Button size="small" variant="contained" onClick={handleClickOpenPopup}>
                Add chart
            </Button>
            <Dialog
                open={openPopup}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={style.dialogTitle} id="alert-dialog-title">
                    {'Add chart'}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{minWidth: 250}}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-basic"
                                label="Name chart"
                                variant="outlined"
                                helperText="Please enter the name of the chart"
                                value={name}
                                onChange={handleName}/>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Color chart"
                                value={color}
                                onChange={handleChangeColor}
                                helperText="Please select color chart"
                            >
                                <MenuItem value="#FFA500">Orange</MenuItem>
                                <MenuItem value="#808080">Gray</MenuItem>
                                <MenuItem value="#00FFFF">Aqua</MenuItem>
                                <MenuItem value="#000000">Black</MenuItem>
                                <MenuItem value="#808000">Olive</MenuItem>
                            </TextField>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Style line chart"
                                value={styleLine}
                                onChange={handleChangeStyleLine}
                                helperText="Please select style line chart"
                            >
                                <MenuItem value="Solid">Solid</MenuItem>
                                <MenuItem value="Dash">Dash</MenuItem>
                                <MenuItem value="Dot">Dot</MenuItem>
                                <MenuItem value="DashDot">DashDot</MenuItem>
                                <MenuItem value="LongDash">LongDash</MenuItem>
                            </TextField>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Data chart"
                                value={data}
                                onChange={handleChangeData}
                                helperText="Please select default data for the chart"
                            >
                                <MenuItem value="default1">Default data 1</MenuItem>
                                <MenuItem value="default2">Default data 2</MenuItem>
                                <MenuItem value="default3">Default data 3</MenuItem>
                            </TextField>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions className={style.dialogAction}>
                    <Button onClick={handleAdd}>Add chart</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}






