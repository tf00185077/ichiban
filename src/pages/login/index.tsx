import LoginForm from "@/components/form/LoginForm";
const Login = () => {
  return (
    <div className="w-[1200px]">
      <div className="mb-15">首頁/<span className="text-[#f4c221]">登入</span></div>
      <div className="font-header flex justify-center max-w-[700px] mx-auto">
        <LoginForm></LoginForm>
        <div className="flex flex-col justify-center max-w-[350px] flex-1 pl-[40px] border-l border-gray-300">
          <p className="font-bold">歡迎來到 賞翻天 官方網站!</p>
          <p>如果你還沒有帳號~</p>
          <button className="flex items-center justify-center bg-[#d04a26] rounded-[30px] py-[7px] px-[20px] my-[20px] text-white font-bold border-[3px] border-[#9a3418]">立即註冊</button>
          <p>加入<span className="text-[#d04a26]">賞翻天</span>會員後，你將獲得無數刺激和創新的功能。 只需線上儲值，就能立即獲得豐富的回饋！ 免去親自走訪門市的麻煩，趕緊來試試你的抽獎運氣吧！ 夢幻A賞、最後賞將直接送到你家！</p>
        </div>
      </div>
    </div>
  )
};
export default Login;
