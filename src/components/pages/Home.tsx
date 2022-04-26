import {
    Box,
    CircularProgress,
    Container,
    Pagination,
    Paper,
    TableContainer,
} from "@mui/material";
import DataTable from "./DataTable";
import { InitPost } from "./interfaces";
import { useHistory } from 'react-router-dom';
import useData from "./useData";

const Home: React.FC = () => {
    const history = useHistory();
    const { paginationPage, posts, isLoading, setPaginationPage, rowsPerPage, totalPostCount, setTempPageStart, tempPageStart } = useData();
    
    const getDetails = (post: InitPost) => {
        history.push({
            pathname: '/details',
            state: post
        })
    }
    
    const handleChangePage = async (event: unknown, newPage: number) => {
        setPaginationPage(newPage);
        setTempPageStart(newPage)
        // console.log(newPage);
        
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
                    <DataTable posts={posts} paginationPage={paginationPage} rowsPerPage={rowsPerPage} getDetails={getDetails}></DataTable>
                </TableContainer>
                <Paper color="standard" sx={{ display: "flex", justifyContent: "center", my: 2, py: 1, backgroundColor: "#FFEEEE" }}>
                    <Pagination color="primary" data-testid="pagination"
                        count={totalPostCount / rowsPerPage}
                        page={tempPageStart? tempPageStart : paginationPage}
                        onChange={handleChangePage}
                    />
                </Paper>
            </Container>
        </div>
    )
}

export default Home;