import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl, InputLabel, MenuItem, Select,
    SelectChangeEvent
} from '@mui/material';
import {useState} from 'react';
import style from '../Settings.module.css';

type PopupRemovePropsType = {
    removeChart: (name: string) => void
}


export const PopupRemove: React.FC<PopupRemovePropsType> = (props) => {

    const [openPopup, setOpenPopup] = useState(false)

    const [value, setValue] = useState('')

    const handleClickOpenPopup = () => {
        setOpenPopup(true)
    }

    const handleRemove = () => {
        props.removeChart(value)
        setOpenPopup(false)
    }

    const handleClose = () => {
        setOpenPopup(false)
    }

    const handleChangeSelect = (event: SelectChangeEvent) => {
        setValue(event.target.value as string)
    }

    return (
        <div className={style.popup}>
            <Button size="small" variant="contained" onClick={handleClickOpenPopup}>
                Remove chart
            </Button>
            <Dialog
                open={openPopup}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle className={style.dialogTitle} id="alert-dialog-title">
                    {'Remove chart'}
                </DialogTitle>
                <DialogContent>
                    <Box sx={{minWidth: 250}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Chart</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={value}
                                label="Chart"
                                onChange={handleChangeSelect}
                            >
                                <MenuItem value="Lexus">Lexus</MenuItem>
                                <MenuItem value="Mersedes">Mersedes</MenuItem>
                                <MenuItem value="BMW">BMW</MenuItem>
                                <MenuItem value="Land Rover">Land Rover</MenuItem>
                                <MenuItem value="Jaguar">Jaguar</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions className={style.dialogAction}>
                    <Button onClick={handleRemove}>Remove chart</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}


