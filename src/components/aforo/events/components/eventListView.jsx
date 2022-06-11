import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from "@mui/material/TableSortLabel";
import InfoIcon from '@mui/icons-material/Info';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { useDispatch  } from 'react-redux'
import {setSelectedEvent} from '../../../../features/events/eventsSlice';

function createData(fecha, nombre, hora, capacidad, reservas, porcReservas, asistencia, estado) {
    return { fecha, nombre, hora, capacidad, reservas, porcReservas, asistencia, estado };
}

const rows = [
    createData("20/05/2022", "Culto 1", "09:00", 500, "100", "100%", "50", "Pendiente"),
    createData("16/05/2022", "Culto 2", "12:00", 1000, "40", "100%", "50", "Pendiente"),
    createData("18/05/2022", "Culto 4", "14:00", 2000, "1500", "100%", "50", "Pendiente"),
    createData("15/05/2022", "Culto 3", "10:00", 5000, "3500", "100%", "50", "Pendiente"),
    createData("10/05/2022", "Culto 5", "20:00", 500, "300", "100%", "50", "Pendiente"),
    createData("17/05/2022", "Culto 6", "15:00", 3000, "2000", "100%", "50", "Pendiente"),
    createData("19/05/2022", "Culto 7", "18:00", 50, "35", "100%", "50", "Pendiente")
];

export default function BasicTable({events}) {

    const dispatch = useDispatch();
    const [rowData, setRowData] = useState(events);
    const [orderDirection, setOrderDirection] = useState("asc");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [page, setPage] = React.useState(0);

    useEffect(()=>{
        setRowData(events);
    }, [events]);
    
    const sortArray = (arr, orderBy, columnName) => {
        switch (orderBy) {
            case "asc":
            default:
                return arr.sort((a, b) =>
                    a[columnName] > b[columnName] ? 1 : b[columnName] > a[columnName] ? -1 : 0
                );
            case "desc":
                return arr.sort((a, b) =>
                    a[columnName] < b[columnName] ? 1 : b[columnName] < a[columnName] ? -1 : 0
                );
        }
    };

    const selectEvent = (event) => {
        dispatch(
            setSelectedEvent({
                selectedEventId: event
            })
        )
    };

    const handleSortRequest = (columnName) => {
        setRowData(sortArray(rowData, orderDirection, columnName));
        setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" onClick={() => handleSortRequest('date')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Fecha
                                </TableSortLabel>
                            </TableCell>

                            <TableCell align="center" onClick={() => handleSortRequest('name')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Nombre
                                </TableSortLabel>
                            </TableCell>

                            <TableCell align="center" onClick={() => handleSortRequest('time')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Hora
                                </TableSortLabel>
                            </TableCell>

                            <TableCell align="center" onClick={() => handleSortRequest('capacity')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Capacidad
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center" onClick={() => handleSortRequest('capacity')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Resevas
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center" onClick={() => handleSortRequest('capacity')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    % Resevas
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center" onClick={() => handleSortRequest('capacity')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Asistencia
                                </TableSortLabel>
                            </TableCell>
                            <TableCell align="center" onClick={() => handleSortRequest('status')}>
                                <TableSortLabel active={true} direction={orderDirection}>
                                    Estado
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowData.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell component="th" scope="row" align="center">
                                    {row.date?.split("T")[0]}
                                </TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.time}</TableCell>
                                <TableCell align="center">{row.capacity}</TableCell>
                                <TableCell align="center">{row.capacity}</TableCell>
                                <TableCell align="center">{row.capacity}</TableCell>
                                <TableCell align="center">{row.capacity}</TableCell>
                                <TableCell align="center">{row.status}</TableCell>
                                <TableCell align="center">
                                    <Stack spacing={1} direction="row">
                                        <InfoIcon></InfoIcon>
                                        <ModeEditIcon onClick = {() => {selectEvent(row)}}></ModeEditIcon>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}