import {
    Box,
    CircularProgress,
    Container,
    Pagination,
    Paper,
    TableContainer,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { InitPost } from "./interfaces";

const Home: React.FC = () => {
    const [tempPage, setTempPage] = useState<number>(0);

    const [paginationPage, setPaginationPage] = useState<number>(1);
    const [totalPostCount, setTotalPostCount] = useState<number>(0);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [posts, setPosts] = useState<InitPost[]>([]);
    const rowsPerPage: number = 20;

    useEffect(() => {

        const interval = setInterval(() => {
            setTempPage(_page => _page + 1);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

        getPosts()

    }, [tempPage])

    const getPosts = async () => {

        try {
            setIsLoading(true);
            const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${tempPage}`);
            const data = await res.json();
            setPosts([...posts, ...data.hits]);
            setTotalPostCount([...posts, ...data.hits].length);
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    const handleChangePage = async (event: unknown, newPage: number) => {
        setPaginationPage(newPage);
    }

    return (
        <div data-testid="home">
            <h2>All Posts</h2>
            {
                isLoading ? <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress size={30} />
                </Box> : <></>
            }
            <Container style={{ maxWidth: "100%" }}>
                <TableContainer sx={{ height: "80vh" }} component={Paper}>
                    <DataTable posts={posts} paginationPage={paginationPage} rowsPerPage={rowsPerPage}></DataTable>
                </TableContainer>
                <Paper color="standard" sx={{ display: "flex", justifyContent: "center", my: 2, py: 1, backgroundColor: "#FFEEEE" }}>
                    <Pagination color="primary" data-testid="pagination"
                        count={totalPostCount / rowsPerPage}
                        page={paginationPage}
                        onChange={handleChangePage}
                    />
                </Paper>
            </Container>
        </div>
    )
}

export default Home;