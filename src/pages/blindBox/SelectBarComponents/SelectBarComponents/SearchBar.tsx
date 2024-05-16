import { useEffect } from "react"
import { useBlindBoxContext, BlindBoxState, BlindBoxAction } from "@/context/blindBox";
export const SearchBar = () => {
    const { state, dispatch }:{ state: BlindBoxState, dispatch: React.Dispatch<BlindBoxAction> }  = useBlindBoxContext();
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'UPDATE_KEYWORD', payload: event.target.value})
    }
    const search = () => {
        console.log(state,'搜尋的東西')
    }
    return (
        <>
            <div className="bg-white flex text-yellow-500 w-full  ring-1 ring-slate-700 rounded-full py-1 px-2">
                <input onChange={handleChange} className="p-2d" placeholder="搜尋關鍵字" value={state.searchKeyword} ></input> 
                
                <button onClick={search}  className="bg-black text-yellow-500 w-full ring-2 ring-amber-400 rounded-2xl px-4" >搜尋</button>
            </div>
        </>
    )
}