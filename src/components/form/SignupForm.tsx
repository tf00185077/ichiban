import { useState } from "react";
import Input from "./Input";
import useUserStore, { User } from "@/store/userStore";
import { signupApi } from "@/api/signup";
const SignupForm = () => {
    const {
        userData,
        setUserData,
    }: { userData: User; setUserData: (userData: Partial<User>) => void } =
        useUserStore();
    const [checked, setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    const signup = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!checked) return;
        const res = signupApi(userData);
        console.log(res);
    };
    return (
        <form onSubmit={signup}>
            <div className="flex justify-between ">
                <div className="pr-[40px] flex min-w-[50%] flex-col border-r border-gray-300 ">
                    <Input
                        fieldName="E-mail"
                        fieldValue={userData.email}
                        onChange={(value) => setUserData({ email: value })}
                        placeholder="請輸入電子郵件"
                        isNessary
                        type="email"
                    ></Input>
                    <Input
                        fieldName="帳號"
                        fieldValue={userData.account}
                        onChange={(value) => setUserData({ account: value })}
                        placeholder="請輸入帳號"
                        isNessary
                        type="password"
                    ></Input>
                    <Input
                        fieldName="密碼"
                        fieldValue={userData.password}
                        onChange={(value) => setUserData({ password: value })}
                        placeholder="請輸入密碼"
                        isNessary
                        type="password"
                    ></Input>
                    <Input
                        fieldName="手機"
                        fieldValue={userData.phoneNum}
                        onChange={(value) => setUserData({ phoneNum: value })}
                        placeholder="請輸入手機號碼"
                        isNessary
                        type="tel"
                    ></Input>
                </div>
                <div className="gap-[20px] pl-[40px] max-w-[350px]">
                    <Input
                        fieldName="您的姓名"
                        fieldValue={userData.realName}
                        onChange={(value) => setUserData({ realName: value })}
                        placeholder="請輸入您的姓名"
                        isNessary
                    ></Input>
                    <Input
                        fieldName="暱稱"
                        fieldValue={userData.nickName}
                        onChange={(value) => setUserData({ nickName: value })}
                        placeholder="請輸入暱稱"
                        isNessary
                    ></Input>
                    <div className="flex flex-col">
                        <div className="flex gap-[20px]">
                            <div className="w-1/2">
                                <Input
                                    fieldName="郵遞區號"
                                    fieldValue={userData.districtNo}
                                    onChange={(value) =>
                                        setUserData({ districtNo: value })
                                    }
                                    placeholder="請輸入郵遞區號"
                                    isNessary
                                ></Input>
                            </div>
                            <div className="w-1/2">
                                <Input
                                    fieldName="居住城市"
                                    fieldValue={userData.city}
                                    onChange={(value) =>
                                        setUserData({ city: value })
                                    }
                                    placeholder="請輸入居住城市"
                                    isNessary
                                ></Input>
                            </div>
                        </div>
                        <Input
                            fieldName="居住地區"
                            fieldValue={userData.districtName}
                            onChange={(value) =>
                                setUserData({ districtName: value })
                            }
                            placeholder="請輸入居住地區"
                            isNessary
                        ></Input>
                    </div>
                    <Input
                        fieldName="詳細地址"
                        fieldValue={userData.address}
                        onChange={(value) => setUserData({ address: value })}
                        placeholder="請輸入收賞地址詳細"
                        isNessary
                    ></Input>
                </div>
            </div>
            <div className="flex items-center justify-center mt-[20px] cursor-pointer">
                <input onChange={handleChange} value="true" type="checkbox" />
                <p>
                    我同意賞翻天提供的「
                    <a
                        className="text-[#d04a26]"
                        href="https://kujiflip.tw/policy"
                        target="_blank"
                    >
                        網站服務條款
                    </a>
                    」與「
                    <a
                        className="text-[#d04a26]"
                        href="https://kujiflip.tw/privacy"
                        target="_blank"
                    >
                        隱私權政策
                    </a>
                    」。
                </p>
            </div>
            <div className="flex justify-center">
                <button
                    className="btn-custom mt-[20px] mx-auto max-w-[300px]"
                    type="submit"
                >
                    註冊成為會員
                </button>
            </div>
        </form>
    );
};

export default SignupForm;
