import { Link } from "react-router-dom";
const LoginAndSignup = () => {
  return (
    <>
      <div className="text-white flex items-center font-header pt-[10px] h-[39.11px]">
        <div className="flex items-center justify-center mr-[5px]  w-[62px] bg-[#d04a26] rounded-[30px]">
          <img
            className="w-[14px] h-[14px]"
            src="src/assets/icon/user-icon.png"
            alt=""
          />
          <Link to="/topUp" className="text-[14.8Linkx]">
            儲值
          </Link>
        </div>
        <div className="flex">
          <img
            className="w-[25px] h-[25px]"
            src="src/assets/icon/user-icon.png"
            alt=""
          />
          <Link to="/login" className="text-shadow">
            登入/註冊
          </Link>
        </div>
      </div>
    </>
  );
};
export default LoginAndSignup;
