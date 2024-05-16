import { SelectStatus, SelectManufacturer, SearchBar } from "./SelectBarComponents"



export const SelectBar = () => {
    return (
        <>
            <div className="w-full flex justify-between">
                <div className="flex space-x-4">
                    <SelectStatus/>
                    <SelectManufacturer/>
                </div>
                <div>
                    <SearchBar/>
                </div>
            </div>
        </>
    )
}