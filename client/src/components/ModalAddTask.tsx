
import clsx from 'clsx';
import { styled, css } from '@mui/system';
import { Modal as BaseModal } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import React, { ChangeEvent, useContext, useState } from 'react';
import { PopUpContext } from './common/ContentCommon';
import { useLocation, useSubmit } from 'react-router-dom';
import Content from './Content';

type ModalUnstyledProps = {
  isCompleteTask : boolean,
  isAllTask: boolean,
  isImportantTask : boolean
};

export default function ModalUnstyled({isCompleteTask, isAllTask, isImportantTask}:ModalUnstyledProps) {
  const context = useContext(PopUpContext)
  const location = useLocation()
  let submit = useSubmit();
  const [title, setTitle] = useState("")
  const [des, setDes] = useState("")


  const handleToggleCompleted = (e: ChangeEvent<HTMLInputElement>) => {
    context?.setIsCompleted(e.target.checked)
    context?.setIsImportant(false)
  }
  const handleToggleImportant = (e: ChangeEvent<HTMLInputElement>) => {
    context?.setIsCompleted(false)
    context?.setIsImportant(e.target.checked)
  }

  const handleCreateTask = () => {
    let status = context?.isCompleted ? "Completed" : "Incomplete"
    if(isCompleteTask){
      status = "Completed"
    }
    if(isImportantTask){
      status = "Incomplete"
    }

    context?.setStatePopup(false)
    if (!context?.isEdit) {
      const payload = {
        title,
        content: des,
        status
      }
      submit(payload, {
        method: "post",
        action: location.pathname,
      });
    } else {
      let updatedTitle = title;
      let updatedDes = des;

      const titleArea = document.querySelector(".title__area");
      const desArea = document.querySelector(".des__area");

      if (titleArea?.textContent) updatedTitle = updatedTitle || titleArea.textContent;
      if (desArea?.textContent) updatedDes = updatedDes || desArea.textContent;

      const payload = {
        id: context?.id || "",
        title: updatedTitle,
        content: updatedDes,
        status
      };
      submit(payload, {
        method: "put",
        action: location.pathname,
      });
    }
  }
  return (
    <div>
      <Modal
        aria-labelledby="unstyled-modal-title customModal"
        aria-describedby="unstyled-modal-description"
        open={context?.statePopUp ?? false}
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={{ width: 400 }}>
          <div className='popup-create'>Create a Task</div>
          <div onClick={() => context?.setStatePopup(false)} className='x__btn'>x</div>
          <div className='popup-title'>Title</div>
          <textarea onChange={(e) => setTitle(e.target.value)} className='title__area'></textarea>
          <div className='popup-des'>Description</div>
          <textarea onChange={(e) => setDes(e.target.value)} className='des__area'></textarea>
          <div className='popup-date'>Date</div>
          <input type="datetime-local" name="appointment" className='datetime-local' />
          <div className='completed__container'>
            <span>Toggle Completed</span>
            <input className='completed' onChange={handleToggleCompleted} style={{ width: "auto" }} type='checkbox' checked={isCompleteTask || context?.isCompleted || false} disabled = {isCompleteTask || isImportantTask}/>
          </div>

          <div className='important__container'>
            <span>Toggle Important</span>
            <input className='important' onChange={handleToggleImportant} style={{ width: "auto" }} type='checkbox' checked={isImportantTask || context?.isImportant || false} disabled = {isCompleteTask || isImportantTask}/>
          </div>
          <div className='create__container'>
            <div className='create__btn' onClick={handleCreateTask}>
              <AddIcon />
              Create Task
            </div>
          </div>
        </ModalContent>
      </Modal>
    </div>
  );
}

const Backdrop = React.forwardRef<
  HTMLDivElement,
  { open?: boolean; className: string }
>((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'base-Backdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

const Modal = styled(BaseModal)`
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

const StyledBackdrop = styled(Backdrop)`
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: #1C1C1C
    -webkit-tap-highlight-color: transparent;
  `;

const ModalContent = styled('div')(
  ({ theme }) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: hidden;
      background-color: #1C1C1C;
      border:none;
      border-radius: 8px;
      box-shadow: 0 4px 12px
        ${theme.palette.mode === 'dark' ? 'rgb(0 0 0 / 0.5)' : 'rgb(0 0 0 / 0.2)'};
      padding: 24px;

      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
      }

      & .modal-description {
        margin: 0;
        line-height: 1.5rem;
        font-weight: 400;
        margin-bottom: 4px;
      }
    `,
);
