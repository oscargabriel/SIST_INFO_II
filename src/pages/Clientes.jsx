
import {Box, Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import InfoClient from '../Components/InfoClient';
import EditClient from '../Components/EditClient';
import TableClients from '../Components/TableClients';
import AddCLient from '../Components/AddClient';
import AddButton from '../Components/AddButton';

function createData(rif, name, address, telephone) {
    return { rif, name, address, telephone };
}

const initial_state = createData("","","","")

const Clientes = () => {


    const [listClients, setListClients] = useState([]);
    const [selectInfo, setSelectInfo] = useState(initial_state)
    const [view, setView] = useState(false);
    const [edit, setEdit] = useState(false);
    const [add, setAdd] = useState(false);

    

    const openView = (index) => {
        
        const info = listClients[index]
        setSelectInfo(info)

        setView(true);
    }

    const closeView = () => {
        setView(false);
    };

    const openEdit = (index) => {
        const info = listClients[index]
        setSelectInfo(info)

        setEdit(true)
    }

    const closeEdit = () => {
        setEdit(false)
    }

    const openAdd = () =>{
        setAdd(true)
    }

    const closeAdd = () =>{
        setAdd(false)
    }

    const addElement = (data)=>{
        const newList = listClients
        newList.push(data)
        setListClients(newList)
        setAdd(false)
    }

    const updateRecord = (data)=>{
        const newList = listClients.map((obj) =>{
            return obj.rif === selectInfo.rif?  data: obj;
        })
        setListClients(newList)
        setEdit(false)
    }

    useEffect(() => {

        console.log("Aqui se hara el llamado de la api para obtener clientes");
    }, [])

    return (
        <Box sx={{ width: '100%' }}>
            
            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '20px' }}
            >
                Clientes
            </Typography>
            <AddButton action={openAdd} >Agregar Cliente</AddButton>
            <AddCLient addElement={addElement} isOpen={add} handleClose={closeAdd} />

            <TableClients openView={openView} openEdit={openEdit} listClients={listClients} />
            <InfoClient info={selectInfo} isOpen={view} handleClose={closeView} />
            <EditClient updateList={updateRecord} isOpen={edit} handleClose={closeEdit}  />

        </Box>
    );
}

export default Clientes