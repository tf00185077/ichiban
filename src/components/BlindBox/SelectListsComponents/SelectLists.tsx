
import {CardLists, CardListsProps} from './type'
import { Card } from './Card'
export const SelectLists = () => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 p-10">
                {CardLists.map((item, index) => (
                    <Card key={index} list={item} />
                ))}
            </div>
        </>
    )
}