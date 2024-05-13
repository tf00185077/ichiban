import { create } from "zustand";


export interface selectedBarStatusProps {
    
}
const inititalSelectBarStatus: selectedBarStatusProps = {
    selectedStatus: '',
    selectedManufacturer: '',
    searchKeyword: ''
}
interface searchPatientState {
    selectedBarStatus: selectedBarStatusProps;
    updateSelectedBarStatus: (newData: Partial<selectedBarStatusProps>) => void;
    resetSelectedBarStatus: () => void;
}

export const useSearchPatientStore = create<searchPatientState>((set) => ({
    selectedBarStatus: inititalSelectBarStatus,
    updateSelectedBarStatus: (newData) =>
        set((state) => ({
            selectedBarStatus: { ...state.selectedBarStatus, ...newData }
        })),
    resetSelectedBarStatus: () =>
        set(() => ({
            selectedBarStatus: inititalSelectBarStatus
        }))
}));
