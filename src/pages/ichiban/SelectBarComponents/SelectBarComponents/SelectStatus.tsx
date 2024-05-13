import { Status } from "./type";
import { useIchiBanContext } from "@/context/ichiban"

export const SelectStatus = () => {
    const {state, dispatch}=useIchiBanContext()
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
                <option value="">全部狀態</option>
                {Object.keys(Status).map((key) => (
                    <option key={key} value={Status[key as keyof typeof Status]}>
                        <div className="mx-auto">{Status[key as keyof typeof Status]}</div>
                    </option>
                ))}
            </select>
        </>
    )
}
