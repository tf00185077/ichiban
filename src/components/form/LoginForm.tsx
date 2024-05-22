import { useState } from "react";
import Input from "./Input";
const LoginForm = () => {
    const [userData, setUserData] = useState({
        account: "",
        password: "",
    });
    const login = (event: React.FormEvent) => {
        event.preventDefault();
        console.log(userData);
    };
    return (
        <form onSubmit={login} className="flex-1 pr-[40px]">
            <Input
                fieldName="帳號"
                fieldValue={userData.account}
                onChange={(value) =>
                    setUserData({ ...userData, account: value })
                }
                placeholder="請輸入電子郵件"
                isNessary
                type="text"
            ></Input>
            <div>
                <Input
                    fieldName="密碼"
                    fieldValue={userData.password}
                    onChange={(value) =>
                        setUserData({ ...userData, password: value })
                    }
                    placeholder="請輸入密碼"
                    isNessary
                    type="password"
                ></Input>
                <p className="cursor-pointer text-end text-[#d04a26] hover:text-[#a53b1e] translate-y-[-20px]">
                    忘記密碼?
                </p>
            </div>
            <input
                className="w-full btn-custom mt-[20px] mx-auto "
                type="submit"
                value="立即登入"
            />
        </form>
    );
};
export default LoginForm;
