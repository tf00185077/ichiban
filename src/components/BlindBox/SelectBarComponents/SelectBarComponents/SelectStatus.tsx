import { StatusLists } from "./type";
import { useBlindBoxContext, BlindBoxState, BlindBoxAction } from "@/context/blindBox";
export const SelectStatus = () => {
    const { state, dispatch }:{ state: BlindBoxState, dispatch: React.Dispatch<BlindBoxAction> }  = useBlindBoxContext();
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'UPDATE_STATUS', payload: event.target.value });
    };
    return (    
        
        <>
           <select
                className="bg-black text-yellow-500 w-full hover:opacity-70 rounded-full py-2.5 px-4 ring-4 ring-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 cursor-pointer"
                onChange={handleChange}
                value={state.selectedStatus}
            >
                {StatusLists.map((item, index)=>(
                    <option value={item.name_en} key={index}>{item.name_tw}</option>
                ))}
            </select>
        </>
    )
}
