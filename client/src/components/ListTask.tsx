import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import DefaultItem from './DefaultItem';
import { useContext, useEffect } from 'react';
import { PopUpContext } from './common/ContentCommon';

interface ListTaskProps {
    data: any[]
}

function ListTask({ data }: ListTaskProps) {
    const context = useContext(PopUpContext)
    const rows = [];
    for (let i = 0; i < data.length + 1; i += 4) {
        rows.push(data?.slice(i, i + 4));
    }

    const handleEdit = (item: any) => {
        // TODO : useRef later
        context?.setId(item._id)
        context?.setIsEdit(true)
        setTimeout(() => {
            const titleArea = document.querySelector(".title__area")
            const desArea = document.querySelector(".des__area")
            const compeltedCheckbox = document.querySelector(".completed") as HTMLInputElement;
            const importantCheckbox = document.querySelector(".important") as HTMLInputElement;
            // TODO: Clean code
            // Reset value when edit
            compeltedCheckbox.checked = false
            importantCheckbox.checked = false
            if (titleArea) titleArea.textContent = item.title
            if (desArea) desArea.textContent = item.content
            if (item.status === "Completed") {
                compeltedCheckbox.checked = true
            } else {
                importantCheckbox.checked = true
            }
        }, 0)


        context?.setStatePopup(true)
    }
    return (
        <div className='listTask___container'>
            {rows.map((row, index) => (
                <div className="row" key={index}>
                    {row.map((item, colIndex) => (
                        item?.default ? (
                            <div className="col">
                                <DefaultItem />
                            </div>
                        ) : (
                            <div className="col" key={colIndex}>
                                <div className='list__item'>
                                    <div className='item__title'>{item.title}</div>
                                    <div className='item__content'>
                                        {item.content}
                                    </div>
                                    <div className='item__updated'>{item.created_at}</div>

                                    <div className='item__footer'>
                                        <div className={`item__status ${item.status === "Incomplete" ? "item__status__incomplete" : "item__status__completed"}`}>{item.status}</div>
                                        <div className='item__footer__icon'>
                                            <EditNoteIcon onClick={() => handleEdit(item)} className='editIcon' />
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            ))}
        </div>
    )
}

export default ListTask
