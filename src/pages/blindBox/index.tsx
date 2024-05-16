import React from "react";
import { SelectBar } from "../blindBox/SelectBarComponents/SelectBar";
import { BlindBoxProvider } from "@/context/blindBox";
import MainCard from "@/components/layout/MainCard";
import { SelectLists } from "../blindBox/SelectListsComponents/SelectLists";
const BlindBox = () => {
    return (
        <>
            <BlindBoxProvider>
                <div className="w-4/5 mx-auto h-full bg-white p-[30px]">
                    <div className="mb-15">首頁/盲盒</div>
                    <div className="py-2">
                        <SelectBar/>
                    </div>
                    <div className="py-2">
                        <hr />
                    </div>
                    <div>盲盒結果</div>
                    <SelectLists/>
                </div>
            </BlindBoxProvider>
        </>
    )

};
export default BlindBox;
