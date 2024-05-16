import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Box from '@mui/material/Box';
import { IconButton, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import ListIcon from '@mui/icons-material/List';
import InfoClient from '../Components/InfoClient';


function createData(rif, name, direction, telphone) {
    return { rif, name, direction, telphone };
}


const initial_state = createData("","","","")

const Clientes = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [listClients, setListClients] = useState([]);
    const [selectInfo, setSelectInfo] = useState(initial_state)
    const [view, setView] = useState(false);
    const [Edit, setOpenEdit] = useState(false);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const openView = (obj) => {
        setView(true);
        setSelectInfo(obj);
    }

    const closeView = () => {
        setView(false);
    };

    const openEdit = (obj) => {
        console.log(obj)
    }

    const cLoseEdit = (obj) => {
        console.log(obj)
    }

    useEffect(() => {

        setListClients([
            createData('#10000', 'nomre', 'direccion', '+584124875214'),
            createData('#20000', 'nomre', 'direccion', '+584124875214'),
            createData('#30000', 'nomre', 'direccion', '+584124875214'),
        ])
    }, [])

    return (
        <Box sx={{ width: '100%' }}>

            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', paddingBottom: '50px' }}
            >
                Clientes
            </Typography>

            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size='small'
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Rif</TableCell>
                                <TableCell align="center">Nombre</TableCell>
                                <TableCell align="center">Dirección</TableCell>
                                <TableCell align="center">Telefono</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listClients.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.rif}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.direction}</TableCell>
                                    <TableCell align="center">{row.telphone}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => openView(row)}>
                                            <VisibilityIcon id={index} sx={{ color: "black" }} />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => openEdit(row)}>
                                            <EditIcon sx={{ color: "black" }} />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton>
                                            <ListIcon sx={{ color: "black" }} />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={listClients.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />

            </Paper>

            < InfoClient info={selectInfo} isOpen={view} handleClose={closeView} />


        </Box>
    );
}

export default Clientes