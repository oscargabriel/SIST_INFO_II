import { Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import TableRol from '../Components/TableRole';
import AddButton from '../Components/AddButton';
import AddRol from '../Components/AddRol';

function createData(opeType, rol, departament, c, u, r, d) {
    return { opeType, rol, departament, c, u, r, d };
}

const Roles = () => {

    const [listRol, setListRol] = useState([])
    const [add, setAdd] = useState(false);

    const openView = (index) => {
        console.log(index)
    }

    const openEdit = (index) => {
        console.log(index)
    }

    const openAdd = () =>{
        setAdd(true)
    }

    const closeAdd = () =>{
        setAdd(false)
    }

    const addElement = (data)=>{
        const newList = listRol
        newList.push(data)
        setListRol(newList)
        setAdd(false)
    }

    useEffect(() => {

        console.log("Aqui se hara el llamado de la api para obtener roles");
    }, [])

    return (
        <Box sx={{ width: '100%' }}>

            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', paddingBottom: '50px' }}
            >
                Listado de Roles
            </Typography>
            <AddButton action={openAdd} >Agregar Rol</AddButton>
            <AddRol addElement={addElement} isOpen={add} handleClose={closeAdd} />
            <TableRol listRol={listRol} openView={openView} openEdit={openEdit} />
        </Box>
    );
}

export default Roles