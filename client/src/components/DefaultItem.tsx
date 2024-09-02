import { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { PopUpContext } from './common/ContentCommon';

function DefaultItem() {
  const context = useContext(PopUpContext)

  const handleAddNewTask = () => {
    if (context) {
      context.setStatePopup(true)
      context.setIsEdit(false)
    }
  }
  return (
    <div className='defaut__item' onClick={handleAddNewTask}>
      <AddIcon />
      <span>Add New Task</span>
    </div>
  )
}

export default DefaultItem
