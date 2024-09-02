import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListTask from '../ListTask';
import ModalAddTask from '../ModalAddTask';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type AppProps = {
  name: string;
  data: any[]
};

interface PopUpContextType {
  statePopUp: boolean | null;
  setStatePopup: Dispatch<SetStateAction<boolean | null>>;
  id: string
  setId: Dispatch<SetStateAction<string>>;
  isEdit: boolean | null;
  setIsEdit: Dispatch<SetStateAction<boolean | null>>;
}

export const PopUpContext = createContext<PopUpContextType | null>(null)

function ContentCommon({ name, data }: AppProps) {
  const splitName = name.split(" ")


  const [statePopUp, setStatePopup] = useState<boolean | null>(false)
  const [id, setId] = useState<string>("")
  const [isEdit, setIsEdit] = useState<boolean | null>(false)

  const handleAddNewTask = () => {
    setStatePopup(true)
    setIsEdit(false)
  }
  return (
    <PopUpContext.Provider value={{ statePopUp, setStatePopup, id, setId, isEdit, setIsEdit }}>
      <div className='allTask__container'>
        <div className='allTask__header'>
          <div className='allTask__title'><span className='border'>{splitName[0]}</span> {splitName[1]}</div>
          <AddCircleOutlineIcon onClick={handleAddNewTask} className='allTask__icon' />
        </div>
        <div className='listTask'>
          <ListTask data={data} />
        </div>
        <ModalAddTask />
      </div>
    </PopUpContext.Provider>

  )
}

export default ContentCommon
