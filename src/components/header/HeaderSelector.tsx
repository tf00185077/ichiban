import { Link } from "react-router-dom";

const routerName = {
  一番賞: "ichiban",
  盲盒: "blindBox",
  賞品盒: "prizeBox",
  賞品: "prize",
  即時榜單: "instantRanking",
  每日簽到: "dailySigning",
  最新消息: "latestNews",
};

const HeaderSelector = ({ name,iconName }: { name: keyof typeof routerName,iconName:string }) => {
  return (
    <>
      <Link
        className="flex mr-[15px] text-white hover:text-[#f4c221] text-[17.6px] font-bold font-header px-[10px] bg-[#23058C80] hover:bg-[#070137E6] header-text-shadow rounded-[30px]"
        to={`${routerName[name]}`}
          >
            <img className="w-[25px] h-[25px]" src={`src/assets/icon/${iconName}.png`} alt="" />
        {name}
      </Link>
    </>
  );
};
export default HeaderSelector;
