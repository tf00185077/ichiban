import { Outlet } from "react-router-dom";
import MemberSideBar from "@/components/memberCenter/sidebar";
const MemberDetail = () => {
  return (
    <div>
      <div className="mb-[15px]">首頁/會員資料修改</div>
      <div className="flex gap-16">
        <MemberSideBar></MemberSideBar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};
export default MemberDetail;
