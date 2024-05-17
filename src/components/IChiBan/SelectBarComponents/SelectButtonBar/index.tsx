import {selectButtonLists, SelectButtonListProps} from './type'
import { SelectButton } from './SelectButton'
import { SelectFilterManu } from '../SelectFilterManu'
import { SelectFilterManuBoard } from '../SelectFilterManu/SelectFilterManuBoard'

export const SelectButtonBar = () => {
    return (
        <>
            <div className='flex gap-4 py-4'>
                {selectButtonLists.map((item: SelectButtonListProps, index: number)=>(
                    <SelectButton key={index} item={item} index={index}/>
                ))}
            </div>
            <div className='py-1'>
                <SelectFilterManu/>
                <SelectFilterManuBoard/>
            </div>
        </>
    )
}