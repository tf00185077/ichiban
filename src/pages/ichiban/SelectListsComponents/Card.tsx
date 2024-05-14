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
            <div className="p-4">
                <div className="text-gray-800 font-semibold mb-2">{list.context}</div>
                <div className="text-gray-600 mb-2">{list.manufacturer}</div>
                <div className="text-gray-500">剩餘: {list.remaining}</div>
            </div>
        </div>
    );
};
