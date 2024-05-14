import React from "react";
import { SelectBar } from "./SelectBarComponents/SelectBar";
import { IChiBanProvider } from "@/context/ichiban";
import MainCard from "@/components/layout/MainCard";
import { SelectLists } from "./SelectListsComponents/SelectLists";
const Ichiban = () => {
    return (
        <>
            <IChiBanProvider>
                <div className="w-4/5 mx-auto h-full bg-white p-[30px]">
                    <div className="mb-15">首頁/盲盒</div>
                    <SelectBar/>
                    <hr/>
                    <div>盲盒結果</div>
                    <SelectLists/>
                </div>
            </IChiBanProvider>
        </>
    )

};
export default Ichiban;
