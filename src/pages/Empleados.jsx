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

function createData(numId, name, email, rol, date, status) {
    return { numId, name, email, rol, date, status };
}

const statusComponent = [
    {
        name: 'Disponible',
        sx: {backgroundColor:'#38BF22', color: 'white', padding:"5px", borderRadius:2, fontWeight:'bold'},
    },

    {
        name: 'Vacaciones',
        sx: {backgroundColor:'#33BAB2', color: 'white', padding:"5px", borderRadius:2, fontWeight:'bold'},
    },
    {
        name: 'Ocupado',
        sx: {backgroundColor:'#BA3333', color: 'white', padding:"5px", borderRadius:2, fontWeight:'bold'},
    },
]

const Empleados = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [listEmployers, setListEmployers] = useState([])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const view = (obj) => {
        console.log(obj)
    }

    const edit = (obj) => {
        console.log(obj)
    }

    useEffect(() => {

        setListEmployers([
            createData('#00000', 'nomre', 'correoempleado@mail.com', ' Oper - Vtas', '10/10/2023', 0),
            createData('#00000', 'nomre', 'correoempleado@mail.com', ' Oper - Com', '10/10/2023', 1),
            createData('#00000', 'nomre', 'correoempleado@mail.com', ' Oper - Adm', '10/10/2023', 2),
        ])
    }, [])

    return (
        <Box sx={{ width: '100%' }}>

            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', paddingBottom: '50px' }}
            >
                Empleados
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
                                <TableCell align="center">Numero identificación</TableCell>
                                <TableCell align="center">Nombre</TableCell>
                                <TableCell align="center">Correo</TableCell>
                                <TableCell align="center">Rol</TableCell>
                                <TableCell align="center">Fecha</TableCell>
                                <TableCell align="center">Estado</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listEmployers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.numId}</TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.email}</TableCell>
                                    <TableCell align="center">{row.rol}</TableCell>
                                    <TableCell align="center">{row.date}</TableCell>
                                    <TableCell align="center">
                                        <Typography variant='p' sx={statusComponent[row.status].sx}>
                                            {statusComponent[row.status].name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => view(row)}>
                                            <VisibilityIcon id={index} sx={{ color: "black" }} />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => edit(row)}>
                                            <EditIcon sx={{ color: "black" }} />
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
                    count={listEmployers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

export default Empleados