import { useEffect } from "react"
import { useIchiBanContext } from "@/context/ichiban";

export const SearchBar = () => {
    const { state, dispatch } = useIchiBanContext(); 

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type: 'UPDATE_KEYWORD', payload: event.target.value})
    }
    const search = () => {

    }
    return (
        <>
           <input onChange={handleChange} value={state.searchKeyword}></input> 
           <button onClick={search}>搜尋</button>
        </>
    )
}