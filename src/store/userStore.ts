// userStore.ts
import { createStore } from 'zustand/vanilla';
import { useStore } from 'zustand';
export type User = {
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    nickName: string;
    LineId:string;
    recipientName:string;
    address:string;
    addressDetail:string;
}

export type UserStore = {
  userData: User;
  setUserData: (userData: Partial<User>) => void;
}

const store = createStore<UserStore>((set) => ({
  userData: {
    password: '',
    email: '',
    confirmPassword: '',
    phone: '',
    nickName: '',
    LineId:'',
    recipientName:'',
    address:'',
    addressDetail:''
  },
  setUserData: (userData) => set((state) =>({
        userData: { ...state.userData, ...userData }
  }))
}));

const useUserStore = () => useStore(store);
export default useUserStore;
