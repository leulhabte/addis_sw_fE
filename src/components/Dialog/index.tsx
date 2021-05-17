import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMP } from '../../constants';
import { ModalContent, ModalShadow, Modal, ModalFooter, ConfirmButton} from "./styles";


const DialogContainer:React.FC<{
    setOpen: (data: boolean)=> void,
    id: string
}> = ({ setOpen, id}) => {
    const dispatch = useDispatch();
    const state = useSelector<initialState, initialState>(state => state)
    function close() {
        setOpen(false);
    }
    const handleFinish = ()=>{
        close()
        window.location.reload()
    }
    const removeEmployee = async ()=>{
        dispatch({type: EMP.DELETE, payload: id})
    }

    return (
        <>
            {state.isDone_action && handleFinish()}
            <ModalShadow onClick={close} />
            <Modal>
                <ModalContent>
                    Confirm Deletion
                </ModalContent>
                <ModalFooter>
                    <ConfirmButton onClick={removeEmployee} disabled={state.isLoading_action}> {state.isLoading_action ? <p>Loading</p> : state.isError_action ? <p>Try again</p> : <p>Yes</p>} </ConfirmButton>
                    <ConfirmButton onClick={close}  disabled={state.isLoading_action} color="blue"> cancel </ConfirmButton>
                </ModalFooter>
            </Modal>
        </>
    );
}

export {DialogContainer}