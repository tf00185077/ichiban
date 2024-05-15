import MainCard from "@/components/layout/MainCard";
import SignupForm from "@/components/form/SignupForm";
const Singup = () => {
  return (
    <>
      <div className="mb-15">首頁/盲盒</div>
      <div className="mt-20 mx-auto max-w-[700px] flex flex-col">
        <p className="text-center">
          為避免您的賞品寄送權益，請務必如實填寫會員資料
        </p>
        <p className="text-center mb-[20px]">
          <span className="text-red-600">*</span>為必填項目
        </p>
        <SignupForm></SignupForm>
      </div>
      </>
  );
};

export default Singup;
