import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export type BlindBoxState = {
    selectedStatus: string;
    selectedManufacturer: string;
    searchKeyword: string;
}
export type BlindBoxAction = 
    | { type: 'UPDATE_STATUS'; payload: string }
    | { type: 'UPDATE_MANUFACTURER'; payload: string }
    | { type: 'UPDATE_KEYWORD'; payload: string }
    | { type: 'RESET' };
export type BlindBoxContextType = {
    state: BlindBoxState;
    dispatch: React.Dispatch<BlindBoxAction>;
}
const defaultDispatch: React.Dispatch<BlindBoxAction> = () => initialState; 
const initialState = {
    selectedStatus: '',
    selectedManufacturer: '',
    searchKeyword: ''
};    
const BlindBoxContext = createContext<BlindBoxContextType>({
    state: initialState,
    dispatch: defaultDispatch,
});

function reducer(state: BlindBoxState, action: BlindBoxAction): BlindBoxState {
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
            throw new Error(`Unhandled action `);
    }
}

interface BlindBoxProviderProps {
    children: ReactNode;
}

export const BlindBoxProvider = ({ children }: BlindBoxProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState); 

    return (
        <BlindBoxContext.Provider value={{ state, dispatch }}>
            {children}
        </BlindBoxContext.Provider>
    );
};
export const useBlindBoxContext = () => {
    return useContext(BlindBoxContext);
};
