import { Link } from "react-router-dom";
const MemberSideBar = () => {
  return (
    <div className="w-[200px]">
      <div className="w-full py-[8px] text-white flex justify-center items-center bg-[#06c7e4] rounded-[25px]">
        <img
          className="w-[16px] h-[16px]"
          src="/src/assets/icon/user-icon.png"
          alt="user-icon"
        />
        <p>代幣儲值</p>
      </div>
      <div className="flex  flex-col mt-[24px] py-[40px] bg-[#f5f5f5] rounded-[25px]">
        <div className="w-full py-[8px] flex flex-col justify-center items-center bg-[#f3e7d5]">
          <div className="flex gap-[8px] items-center">
            <img
              className="w-[16px] h-[16px]"
              src="/src/assets/icon/user-icon.png"
              alt="user-icon"
            />
            <p className="font-bold">會員管理</p>
          </div>
          <div className="mt-[8px] self-end w-[120px] text-[14px] flex flex-col gap-[4px]">
            <Link
              to="/member-center"
              className="cursor-pointer hover:text-[#d04a26]"
            >
              會員資料修改
            </Link>
            <Link
              to="/member-center/ChangePassword"
              className="cursor-pointer hover:text-[#d04a26]"
            >
              修改密碼
            </Link>
          </div>
        </div>
        <div className="w-full py-[8px] flex flex-col justify-center items-center bg-[#f3e7d5]">
          <div className="flex gap-[8px] items-center">
            <img
              className="w-[16px] h-[16px]"
              src="/src/assets/icon/user-icon.png"
              alt="user-icon"
            />
            <p className="font-bold">消費紀錄</p>
          </div>
        </div>
        <div className="w-full py-[8px] flex flex-col justify-center items-center bg-[#f3e7d5]">
          <div className="flex gap-[8px] items-center">
            <img
              className="w-[16px] h-[16px]"
              src="/src/assets/icon/user-icon.png"
              alt="user-icon"
            />
            <p className="font-bold">消費獎勵</p>
          </div>
          <div className="mt-[8px] self-end w-[120px] text-[14px] flex flex-col gap-[4px]">
            <Link
              to="/member-center"
              className="cursor-pointer hover:text-[#d04a26]"
            >
              每月儲值獎勵
            </Link>
            <Link
              to="/member-center/ChangePassword"
              className="cursor-pointer hover:text-[#d04a26]"
            >
              今日消費獎勵
            </Link>
          </div>
        </div>
        <div className="w-full py-[8px] flex flex-col justify-center items-center bg-[#f3e7d5]">
          <div className="flex gap-[8px] items-center">
            <img
              className="w-[16px] h-[16px]"
              src="/src/assets/icon/user-icon.png"
              alt="user-icon"
            />
            <p className="font-bold">訂單紀錄</p>
          </div>
        </div>
        <div className="w-full py-[8px] flex flex-col justify-center items-center bg-[#f3e7d5]">
          <div className="flex gap-[8px] items-center">
            <img
              className="w-[16px] h-[16px]"
              src="/src/assets/icon/user-icon.png"
              alt="user-icon"
            />
            <p className="font-bold">優惠查詢</p>
          </div>
          <div className="mt-[8px] self-end w-[120px] text-[14px] flex flex-col gap-[4px]">
            <Link
              to="/member-center"
              className="cursor-pointer hover:text-[#d04a26]"
            >
              未使用
            </Link>
            <Link
              to="/member-center/ChangePassword"
              className="cursor-pointer hover:text-[#d04a26]"
            >
              已使用與過期
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MemberSideBar;
