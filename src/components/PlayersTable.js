import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PlayersTable(props) {

    const { players } = props;

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Player</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Nationality</TableCell>
                <TableCell>Age</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {players.map((player) => (
                <TableRow
                key={player.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.position}</TableCell>
                <TableCell>{player.nationality}</TableCell>
                <TableCell>{player.age}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}