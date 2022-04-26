import React, { createContext } from 'react';
import { useDataType } from './interfaces';
import useData from './useData';

type DataContextProviderProps = {
    children: React.ReactNode
}

export const DataContext = createContext<any | null>(null);

const DataProvider: React.FC = ({ children: DataContextProviderProps }) => {
    const allContext: useDataType = useData();
    return (
        <DataContext.Provider>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;