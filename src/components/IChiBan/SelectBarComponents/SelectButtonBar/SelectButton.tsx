import { SelectButtonListProps } from './type'

export const SelectButton = ({ item, index }: { item: SelectButtonListProps, index: number }) => {
    return (
        <div className=''>
            <button className={` text-yellow-900 text-lg font-bold px-4 py-2 rounded-full border-[3px] border-yellow-900 hover:cursor-pointer hover:opacity-70}`}>
                {item.name}
            </button>
        </div>
    )
}
