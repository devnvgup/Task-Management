import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListTask from '../ListTask';
import ModalAddTask from '../ModalAddTask';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type AppProps = {
  name: string;
  data: any[];
  isCompleteTask : boolean,
  isAllTask: boolean,
  isImportantTask : boolean
};

interface PopUpContextType {
  statePopUp: boolean | null;
  setStatePopup: Dispatch<SetStateAction<boolean | null>>;
  id: string
  setId: Dispatch<SetStateAction<string>>;
  isEdit: boolean | null;
  setIsEdit: Dispatch<SetStateAction<boolean | null>>;
  isImportant: boolean | null;
  setIsImportant: Dispatch<SetStateAction<boolean | null>>;
  isCompleted: boolean | null;
  setIsCompleted: Dispatch<SetStateAction<boolean | null>>;
}

export const PopUpContext = createContext<PopUpContextType | null>(null)

function ContentCommon({ name, data, isCompleteTask, isAllTask, isImportantTask}: AppProps) {
  const splitName = name.split(" ")


  const [statePopUp, setStatePopup] = useState<boolean | null>(false)
  const [id, setId] = useState<string>("")
  const [isEdit, setIsEdit] = useState<boolean | null>(false)
  const [isImportant, setIsImportant] = useState<boolean | null>(false)
  const [isCompleted, setIsCompleted] = useState<boolean | null>(false)

  const handleAddNewTask = () => {
    setStatePopup(true)
    setIsEdit(false)
    //reset checkboxes when add new
    setIsCompleted(false)
    setIsImportant(false)
  }

  const value = {
    statePopUp,
    setStatePopup,
    id,
    setId,
    isEdit,
    setIsEdit,
    isImportant,
    setIsImportant,
    isCompleted,
    setIsCompleted
  }
  return (
    <PopUpContext.Provider value={value}>
      <div className='allTask__container'>
        <div className='allTask__header'>
          <div className='allTask__title'><span className='border'>{splitName[0]}</span> {splitName[1]}</div>
          <AddCircleOutlineIcon onClick={handleAddNewTask} className='allTask__icon' />
        </div>
        <div className='listTask'>
          <ListTask data={data} />
        </div>
        <ModalAddTask isImportantTask={isImportantTask} isAllTask={isAllTask} isCompleteTask={isCompleteTask}/>
      </div>
    </PopUpContext.Provider>

  )
}

export default ContentCommon
