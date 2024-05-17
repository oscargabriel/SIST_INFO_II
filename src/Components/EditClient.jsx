import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    TextField,
    DialogActions
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OKButton from "./OKButton";
import CancelButton from "./CancelButton";
import useForm from "../utils/useForm";

const EditClient = (props) => {

    const initial = {
        typeId: "V",
        rif: "",
        name: "",
        telephone: "",
        address: "",
    }


    const { updateList, isOpen, handleClose } = props
    const [form, handleChange, reset] = useForm(initial)


    const save = () => {
        updateList({
            rif: form.typeId+"-"+form.rif,
            name: form.name,
            telephone: form.telephone,
            address: form.address,
        })
        reset()
    }

    return (
        <Dialog
            component='form'
            onClose={handleClose}
            open={isOpen}
            sx={{ padding: '10px ' }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='p' sx={{ fontWeight: 'bold' }} >
                    Editar cliente
                </Typography>

                <IconButton aria-label="close" onClick={handleClose} sx={{ marginLeft: '8px' }}>
                    <CloseIcon />
                </IconButton>

            </DialogTitle>
            <DialogContent>

                <FormControl>
                    <RadioGroup
                        name="typeId"
                        value={form.typeId}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="V" control={<Radio size="small" />} label="V" />
                        <FormControlLabel value="J" control={<Radio size="small" />} label="J" />
                    </RadioGroup>
                </FormControl>

                <TextField
                    name="rif"
                    label="Rif/Cedula"
                    variant="filled"
                    sx={{ marginBottom: "20px" }}
                    value={form.rif}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="name"
                    label="Nombre"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.name}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="telephone"
                    label="Telefono"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.telephone}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="address"
                    label="Dirección"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.address}
                    onChange={handleChange}
                />

            </DialogContent>
            <DialogActions>
                <OKButton action={save}>Guardar</OKButton>
                <CancelButton action={handleClose}>Cancelar</CancelButton>
            </DialogActions>
        </Dialog>
    )

}

export default EditClient