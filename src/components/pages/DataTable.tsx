import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Column, InitPost, TableDataInit } from './interfaces';

const columns: readonly Column[] = [
    { id: "title", label: "Title", minWidth: 170 },
    { id: "url", label: "URL", minWidth: 150 },
    { id: "created_at", label: "Created At", minWidth: 100 },
    { id: "author", label: "Author", minWidth: 100 },
];

const DataTable: React.FC <TableDataInit> = ({ posts, paginationPage, rowsPerPage }) => {
    const history = useHistory();
    console.log(posts);
    
    const getDetails = (post: InitPost) => {
        history.push({
            pathname: '/details',
            state: post
        })
    }

    return (
        <Table stickyHeader aria-label="sticky table" data-testid="dataTable">
            <TableHead>
                <TableRow data-testid="dataRow">
                    {
                        columns.map(columnData =>
                            <TableCell
                                key={columnData.id}
                                align={columnData.align}
                                style={{ minWidth: columnData.minWidth, backgroundColor: "#FFEEEE", fontWeight: "bold" }}
                            >
                                {columnData.label}
                            </TableCell>
                        )
                    }
                </TableRow>
            </TableHead>

            <TableBody>
                {
                    posts.slice((paginationPage - 1) * rowsPerPage, (paginationPage - 1) * rowsPerPage + rowsPerPage)
                        .map((rowData, index) => {
                            return (
                                <TableRow
                                    hover
                                    sx={{ cursor: "pointer" }}
                                    key={index}
                                    onClick={() => getDetails(rowData)}
                                >
                                    {
                                        columns.map(column => {
                                            const value = rowData[column.id];
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                >
                                                    {value}
                                                </TableCell>
                                            )
                                        })
                                    }
                                </TableRow>
                            )
                        })
                }
            </TableBody>
        </Table>
    );
};

export default DataTable;