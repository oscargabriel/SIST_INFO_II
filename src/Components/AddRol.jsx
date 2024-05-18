import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    IconButton,
    FormGroup,
    FormControlLabel,
    TextField,
    DialogActions,
    Checkbox
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import OKButton from "./OKButton";
import CancelButton from "./CancelButton";
import useForm from "../utils/useForm";

const AddRol = (props) => {

    const initial = {
        typeOperator: "",
        rol: "",
        departament: "depar",
        c: false,
        r: false,
        u: false,
        d: false,
    }


    const { addElement, isOpen, handleClose } = props
    const [form, handleChange, reset] = useForm(initial)

    const save = () => {
        addElement({
            opeType: form.typeOperator,
            rol: form.rol,
            departament: form.departament,
            c: form.c,
            r: form.r,
            u: form.u,
            d: form.d,

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


                <TextField
                    name="typeOperator"
                    label="Tipo de Operador"
                    variant="filled"
                    sx={{ marginBottom: "20px" }}
                    value={form.typeOperator}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="rol"
                    label="Rol"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.rol}
                    onChange={handleChange}
                />
                <br />

                <TextField
                    name="departament"
                    label="Departamento"
                    variant="filled"
                    sx={{ marginBottom: "20px", width: "100%" }}
                    value={form.departament}
                    onChange={handleChange}
                />
                <br />


                <FormGroup>
                    <FormControlLabel label="Crear" control={<Checkbox size="small" checked={form.c.checked} onChange={handleChange} name="c" />} />
                    <FormControlLabel label="Actualizar" control={<Checkbox size="small" checked={form.u.checked} onChange={handleChange} name="u" />} />
                    <FormControlLabel label="Leer" control={<Checkbox size="small" checked={form.r.checked} onChange={handleChange} name="r" />} />
                    <FormControlLabel label="Borrar" control={<Checkbox size="small" checked={form.d.checked} onChange={handleChange} name="d" />} />
                </FormGroup>

            </DialogContent>
            <DialogActions>
                <OKButton action={save}>Guardar</OKButton>
                <CancelButton action={handleClose}>Cancelar</CancelButton>
            </DialogActions>
        </Dialog>
    )
}

export default AddRol