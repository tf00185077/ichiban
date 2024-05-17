// userStore.ts
import { createStore } from "zustand/vanilla";
import { useStore } from "zustand";
export type User = {
  id: string;
  account: string;
  password: string;
  realName: string;
  nickName: string;
  phoneNum: string;
  email: string;
  city: string;
  districtNo: string;
  districtName: string;
  address: string;
};

export type UserStore = {
  userData: User;
  setUserData: (userData: Partial<User>) => void;
};

const store = createStore<UserStore>((set) => ({
  userData: {
    id: "0",
    account: "",
    password: "",
    realName: "",
    nickName: "",
    phoneNum: "",
    email: "",
    city: "",
    districtNo: "",
    districtName: "",
    address: "",
  },
  setUserData: (userData) =>
    set((state) => ({
      userData: { ...state.userData, ...userData },
    })),
}));

const useUserStore = () => useStore(store);
export default useUserStore;
