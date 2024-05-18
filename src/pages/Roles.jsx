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
import CheckIcon from '@mui/icons-material/Check';

function createData(opeType, rol, departament, c, u, r, d) {
    return { opeType, rol, departament, c, u, r, d };
}

const Roles = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [listRol, setListRol] = useState([])

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

        setListRol([
            createData('OPERADOR', 'OPERADOR', 'ADMINISTRATIVO', true, false, true, false),
            createData('OPERADOR', 'OPERADOR', 'ADMINISTRATIVO', true, false, true, false),
            createData('OPERADOR', 'OPERADOR', 'ADMINISTRATIVO', true, false, true, false),
        ])
    }, [])

    return (
        <Box sx={{ width: '100%' }}>

            <Typography
                component="h1"
                sx={{ fontWeight: 'bold', fontSize: '32px', paddingBottom: '50px' }}
            >
                Listado de Roles
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
                                <TableCell align="center">Tipo de operador</TableCell>
                                <TableCell align="center">Rol</TableCell>
                                <TableCell align="center">Departmento</TableCell>
                                <TableCell align="center">C</TableCell>
                                <TableCell align="center">U</TableCell>
                                <TableCell align="center">R</TableCell>
                                <TableCell align="center">D</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listRol.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{row.opeType}</TableCell>
                                    <TableCell align="center">{row.rol}</TableCell>
                                    <TableCell align="center">{row.departament}</TableCell>
                                    <TableCell align="center">{row.c ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>
                                    <TableCell align="center">{row.u ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>
                                    <TableCell align="center">{row.r ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>
                                    <TableCell align="center">{row.d ? <CheckIcon sx={{ color: "green" }} /> : ' '}</TableCell>

                                    <TableCell>
                                        <IconButton onClick={()=>view(row)}>
                                            <VisibilityIcon id={index} sx={{ color: "black" }} />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>
                                        <IconButton onClick={()=>edit(row)}>
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
                    count={listRol.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}

export default Roles