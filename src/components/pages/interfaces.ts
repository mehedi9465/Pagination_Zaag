export interface InitPost {
    title: string,
    url: string,
    created_at: Date,
    author: string
}


export interface Column {
    id: "title" | "url" | "created_at" | "author",
    label: string,
    minWidth?: number,
    align?: "right"
}

export interface TableDataInit {
    posts: InitPost[],
    paginationPage: number,
    rowsPerPage: number
    getDetails: any
}

export interface useDataType {
    tempPage: number;
    paginationPage: number;
    totalPostCount: number;
    isLoading: boolean;
    posts: InitPost[];
    postInterval: any;
    rowsPerPage: number;
    tempPageStart: number;
    setPaginationPage: React.Dispatch <any>;
    setTempPage: React.Dispatch <any>;
    setTempPageStart: React.Dispatch <any>;
}