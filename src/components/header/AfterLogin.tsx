import { Link } from "react-router-dom";
const AfterLogin = () => {
  return (
    <div className="text-[14px] text-white flex items-center font-header pt-[10px] h-[39.11px]">
      <div className="cursor-pointer gap-[8px] flex items-center h-[35px]  text-white hover:text-[#f4c221] text-[17.6px] font-bold font-header px-[10px] bg-[#23058C80] hover:bg-[#070137E6] text-shadow rounded-[30px]">
        <img
          className="w-[25px] h-[25px]"
          src="/Image/ProductIcon/coin_kh.e7582786.svg"
          alt=""
        />
        <p>0</p>
      </div>
      <div className="cursor-pointer gap-[8px] flex items-center h-[35px]  text-white hover:text-[#f4c221] text-[17.6px] font-bold font-header px-[10px] bg-[#23058C80] hover:bg-[#070137E6] text-shadow rounded-[30px]">
        <img
          className="w-[25px] h-[25px]"
          src="/src/assets/icon/lottery_ticket.png"
          alt=""
        />
        <p>0</p>
      </div>
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
      <div className="flex items-center justify-center mr-[5px]  w-[86px] py-[px] bg-[#d07a00] rounded-[30px]">
        <Link to="/member-center" className="text-[14.8Linkx]">
          會員中心
        </Link>
      </div>
    </div>
  );
};
export default AfterLogin;
