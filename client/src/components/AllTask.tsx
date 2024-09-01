import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListTask from './ListTask';

function AllTask() {
  return (
    <div className='allTask__container'>
      <div className='allTask__header'>
        <div className='allTask__title'><span className='border'>All</span> Tasks</div>
        <AddCircleOutlineIcon className='allTask__icon' />
      </div>
      <div className='listTask'>
        <ListTask/>
      </div>
    </div>
  )
}

export default AllTask
