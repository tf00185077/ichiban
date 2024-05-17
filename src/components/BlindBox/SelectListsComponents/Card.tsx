// Card.tsx
import React from 'react';
import { CardListsProps } from "./type";

export const Card: React.FC<{ list: CardListsProps }> = ({ list }) => {
    return(
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 relative">
                <img src={list.img_url} alt={list.context} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="flex justify-between  mb-2 absolute bottom-2  w-full items-end">
                    <div className="bg-yellow-500 font-semibold rounded-full p-2">{list.status}</div>
                    <div className='flex items-end'>
                        <div className="text-yellow-500 font-semibold  text-7xl">{list.price}</div>
                        <div>
                        <img src={"/Image/ProductIcon/coin_kh.e7582786.svg"} alt="coin"/>
                        <div className="text-white font-semibold  text-lg">/盒</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4">
                <div className="p-4">
                    <div className='flex justify-between items-center'>
                    <div className="relative inline-block">
                        <div className="bg-red-500 text-white px-4 py-1 transform   inline-flex items-center">
                            <div className="custom-skew">
                                剩餘 3盒
                            </div>
                        </div>
                    </div>
                    <div className="bg-yellow-400 text-white font-bold py-1 px-2">
                        賞翻天
                    </div>
                    </div>
                </div>
                <div className="p-2 text-gray-800 font-semibold mb-2">{list.context}</div>
                {/* <div className="text-gray-500">{list.context}</div> */}
            </div>
        </div>
    );
};
