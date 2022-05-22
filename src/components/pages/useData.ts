import { useEffect, useState } from "react";
import { InitPost, useDataType } from "./interfaces";

const useData = () : useDataType => {
    const [tempPageStart, setTempPageStart] = useState<number>(0);
    const [tempPage, setTempPage] = useState<number>(tempPageStart);
    const [paginationPage, setPaginationPage] = useState<number>(1);
    const [totalPostCount, setTotalPostCount] = useState<number>(0);

    const [posts, setPosts] = useState<InitPost[]>([]);
    const [postInterval, setPostInterval] = useState<any>();
    const rowsPerPage: number = 20;

    const getPosts = async () => {

        try {
            const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${tempPage}`);
            const data = await res.json();
            setPosts([...posts, ...data.hits]);
            setTotalPostCount([...posts, ...data.hits].length);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTempPage(_page => _page + 1);
        }, 10000);

        setPostInterval(interval)
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

        getPosts()

    }, [tempPage])

    return {
        tempPage,
        paginationPage,
        totalPostCount,
        posts,
        postInterval,
        rowsPerPage,
        tempPageStart,
        setPaginationPage,
        setTempPage,
        setTempPageStart
    }

}

export default useData