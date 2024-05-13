import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface IChiBanState {
    selectedStatus: string;
    selectedManufacturer: string;
    searchKeyword: string;
}
type IChiBanAction = 
    | { type: 'UPDATE_STATUS'; payload: string }
    | { type: 'UPDATE_MANUFACTURER'; payload: string }
    | { type: 'UPDATE_KEYWORD'; payload: string }
    | { type: 'RESET' };
interface IChiBanContextType {
    state: IChiBanState;
    dispatch: React.Dispatch<IChiBanAction>;
}
const defaultDispatch: React.Dispatch<IChiBanAction> = () => initialState; 
const initialState = {
    selectedStatus: '',
    selectedManufacturer: '',
    searchKeyword: ''
};    


const IChiBanContext = createContext<IChiBanContextType>({
    state: initialState,
    dispatch: defaultDispatch,
});




function reducer(state: IChiBanState, action: IChiBanAction): IChiBanState {
    switch (action.type) {
        case 'UPDATE_STATUS':
            return { ...state, selectedStatus: action.payload };
        case 'UPDATE_MANUFACTURER':
            return { ...state, selectedManufacturer: action.payload };
        case 'UPDATE_KEYWORD':
            return { ...state, searchKeyword: action.payload };
        case 'RESET':
            return initialState;
        default:
            throw new Error();
    }
}


interface IChiBanProviderProps {
    children: ReactNode;
}

export const IChiBanProvider = ({ children }: IChiBanProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <IChiBanContext.Provider value={{ state, dispatch }}>
            {children}
        </IChiBanContext.Provider>
    );
};

export const useIchiBanContext = () => {
    return useContext(IChiBanContext);
};
