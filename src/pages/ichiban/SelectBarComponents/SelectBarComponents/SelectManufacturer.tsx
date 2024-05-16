


import { ManufacturerLists } from "./type"
import { useIchiBanContext, IChiBanState, IChiBanAction } from "@/context/ichiban";
export const SelectManufacturer = () => {
    const { state, dispatch }:{ state: IChiBanState, dispatch: React.Dispatch<IChiBanAction> }  = useIchiBanContext();
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'UPDATE_MANUFACTURER', payload: event.target.value });
    };
    return (
        <>
            <select
                className="bg-black text-yellow-500 w-full hover:opacity-70 rounded-full py-2.5 px-4 ring-4 ring-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
                onChange={handleChange} 
                value={state.selectedManufacturer}
            >
                <option value="">全部產品</option>
                {ManufacturerLists.map((item, index)=>(
                    <option key={index} value={item.name_en}>{item.name_tw}</option>
                ))}
            </select>
        </>
    )
    
}