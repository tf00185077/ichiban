import React from "react";
import {SelectButtonBar} from '../../components/IChiBan/SelectBarComponents/SelectButtonBar'

const Ichiban = () => {
    return (
        <>
            <div className="w-4/5 mx-auto h-full bg-white p-[30px]">
                <div className="mb-15">首頁/一極棒</div>
                <div className="py-2">
                    <SelectButtonBar/> 
                </div>
                <div className="py-2">
                    <hr />
                </div>
                <div>一極棒</div>
            </div>
        </>
    )

};
export default Ichiban;
