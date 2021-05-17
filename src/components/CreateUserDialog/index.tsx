import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMP } from '../../constants';
import { ModalContent, ModalShadow, ModalBanner, Input, Modal, ModalFooter, ConfirmButton, Select, Option, Optgroup } from "./styles";


const ModalContainer: React.FC<{ setOpen: (data: boolean) => void }> = ({ setOpen }) => {
    const state = useSelector<initialState, initialState>((state: initialState) => state)
    const dispatch = useDispatch();

    const [userData, setUserdata] = useState<IPopuate>({
        name: "",
        dateOfBirth: "",
        gender: "Male",
        salary: ""
    })

    function close() {
        setOpen(false);
    }

    function handlefinish() {
        setOpen(false);
        window.location.reload()
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch({type: EMP.ADD, payload: {...userData}})
    }

    return (
        <>
            {state.isDone_action && handlefinish()}
            <ModalShadow onClick={close} />
            <Modal>
                <ModalBanner>Add Employee</ModalBanner>
                <ModalContent>
                    <form onSubmit={handleSubmit} id="my-form">
                        <Input
                            placeholder="Name"
                            type="text"
                            required
                            onChange={e => setUserdata({ ...userData, name: e.target.value })}
                        />
                        <Input
                            placeholder="Date of Birth"
                            type="date"
                            required
                            onChange={e => setUserdata({ ...userData, dateOfBirth: e.target.value })}
                        />
                        <Select name="cars" id="cars" onChange={e => setUserdata({ ...userData, gender: e.target.value })}>
                            <Optgroup label="Gener">
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                            </Optgroup>
                        </Select>
                        <Input
                            placeholder="salary"
                            type="number"
                            required
                            onChange={e => setUserdata({ ...userData, salary: e.target.value })}
                        />
                    </form>
                </ModalContent>
                <ModalFooter>
                    <ConfirmButton type="submit" disabled={state.isLoading_action} form="my-form"> {state.isLoading_action ? <p>Loading</p> : state.isError_action ? <p>Try again</p> : <p>Submit</p>} </ConfirmButton>
                </ModalFooter>
            </Modal>
        </>
    );
}

export { ModalContainer }