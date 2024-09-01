import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListTask from '../ListTask';
import ModalAddTask from '../ModalAddTask';

type AppProps = {
    name: string;
};
function ContentCommon({name}:AppProps) {
    const splitName = name.split(" ")
  return (

       <div className='allTask__container'>
      <div className='allTask__header'>
        <div className='allTask__title'><span className='border'>{splitName[0]}</span> {splitName[1]}</div>
        <AddCircleOutlineIcon className='allTask__icon' />
      </div>
      <div className='listTask'>
        <ListTask/>
      </div>
      <ModalAddTask/>
    </div>
  )
}

export default ContentCommon
