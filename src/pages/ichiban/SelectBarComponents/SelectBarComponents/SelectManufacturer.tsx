


import { Manufacturer } from "./type"
import { useIchiBanContext } from "@/context/ichiban"
export const SelectManufacturer = () => {
    const { state, dispatch } = useIchiBanContext(); 

   
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: 'UPDATE_MANUFACTURER', payload: event.target.value });
    };
    return (
        <>
            <select className="bg-black text-yellow-500 w-full" onChange={handleChange} value={state.selectedManufacturer}>
                <option value="">全部產品</option>
                {Object.keys(Manufacturer).map((key)=>(
                    <option key={key} value={Manufacturer[key as keyof typeof Manufacturer]}>
                       {Manufacturer[key as keyof typeof Manufacturer]} 
                    </option>
                ))}
            </select>
        </>
    )
}