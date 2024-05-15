import Input from "./Input";
import useUserStore, { User } from "@/store/userStore";
const SignupForm = () => {
  const {
    userData,
    setUserData,
  }: { userData: User; setUserData: (userData: Partial<User>) => void } =
    useUserStore();
  return (
    <form>
      <div className="flex justify-between ">
        <div className="pr-[40px] flex flex-1 flex-col border-r border-gray-300 ">
          <Input
            fieldName="E-mail"
            fieldValue={userData.email}
            onChange={(value) => setUserData({ email: value })}
            placeholder="請輸入電子郵件"
            isNessary
            type="email"
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
            fieldName="確認密碼"
            fieldValue={userData.confirmPassword}
            onChange={(value) => setUserData({ confirmPassword: value })}
            placeholder="再次輸入密碼"
            isNessary
            type="password"
          ></Input>
          <Input
            fieldName="手機"
            fieldValue={userData.phone}
            onChange={(value) => setUserData({ phone: value })}
            placeholder="請輸入手機號碼"
            isNessary
            type="tel"
          ></Input>
          <div className="flex-1"></div>
        </div>
        <div className="flex-1 gap-[20px] pl-[40px]">
          <Input
            fieldName="暱稱"
            fieldValue={userData.nickName}
            onChange={(value) => setUserData({ nickName: value })}
            placeholder="請輸入暱稱"
            isNessary
          ></Input>
          <Input
            fieldName="Line ID"
            fieldValue={userData.LineId}
            onChange={(value) => setUserData({ LineId: value })}
            placeholder="請輸入Line ID"
            isNessary={false}
          ></Input>
          <Input
            fieldName="收賞姓名"
            fieldValue={userData.recipientName}
            onChange={(value) => setUserData({ recipientName: value })}
            placeholder="請輸入真實姓名"
            isNessary={false}
          ></Input>
          <Input
            fieldName="收賞地址"
            fieldValue={userData.address}
            onChange={(value) => setUserData({ address: value })}
            placeholder="請輸入收賞地址"
            isNessary={false}
          ></Input>
          <Input
            fieldName="詳細地址"
            fieldValue={userData.addressDetail}
            onChange={(value) => setUserData({ addressDetail: value })}
            placeholder="請輸入收賞地址詳細"
            isNessary={false}
          ></Input>
        </div>
      </div>
      <div className="flex items-center justify-center mt-[20px] cursor-pointer">
        <input type="checkbox" />
        <p>
          我同意賞翻天提供的「
          <a className="text-[#d04a26]" href="https://kujiflip.tw/policy" target="_blank">
            網站服務條款
          </a>
          」與「
          <a className="text-[#d04a26]" href="https://kujiflip.tw/privacy" target="_blank">
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
