import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import DefaultItem from './DefaultItem';
import { fakeData } from './fakeData';

function ListTask() {
    const rows = [];
    for (let i = 0; i < fakeData.length + 1; i += 4) {
        rows.push(fakeData.slice(i, i + 4));
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
                                    <div className='item__updated'>{item.updatedData}</div>

                                    <div className='item__footer'>
                                        <div className={`item__status ${item.status === "Incomplete" ? "item__status__incomplete" : "item__status__completed"}`}>{item.status}</div>
                                        <div className='item__footer__icon'>
                                            <EditNoteIcon className='editIcon' />
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
