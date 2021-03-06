import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EMP } from '../../constants';
import { ModalContent, ModalShadow, ModalBanner, Input, Modal, ModalFooter, ConfirmButton, Select, Option, Optgroup } from "./styles";


const ModalContainer: React.FC<{ 
    setOpen: (data: boolean) => void,
    name: string;
    dateofbirth: string;
    gender: string;
    salary: string;
    _id: string; }> = ({ setOpen, name, dateofbirth, gender, salary, _id }) => {
    const [userData, setUserdata] = useState<IPopuate>({
        name,
        dateOfBirth: dateofbirth,
        gender,
        salary
    })
    const dispatch = useDispatch();
    const state = useSelector<initialState, initialState>((state: initialState) => state)

    function close() {
        setOpen(false);
    }

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        dispatch({type: EMP.UPDATE, payload: {...userData, _id}})
    }

    function handlefinish() {
        setOpen(false);
        window.location.reload()
    }
    
    return (
        <>
            {state.isDone_action && handlefinish()}
            <ModalShadow onClick={close} />
            <Modal>
                <ModalBanner>Update Employee</ModalBanner>
                <ModalContent>
                    <form onSubmit={handleSubmit} id="my-form">
                        <Input
                            placeholder="Name"
                            type="text"
                            required
                            defaultValue={name}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => setUserdata({ ...userData, name: e.currentTarget.value })}
                        />
                        <Input
                            placeholder="Date of Birth"
                            type="date"
                            required
                            defaultValue={dateofbirth}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => setUserdata({ ...userData, dateOfBirth: e.currentTarget.value })}
                        />
                        <Select name="cars" id="cars" defaultValue={gender} onChange={(e: React.FormEvent<HTMLSelectElement>) => setUserdata({ ...userData, gender: e.currentTarget.value })}>
                            <Optgroup label="Gener">
                                <Option value="Male">Male</Option>
                                <Option value="Female">Female</Option>
                            </Optgroup>
                        </Select>
                        <Input
                            placeholder="salary"
                            type="number"
                            required
                            defaultValue={salary}
                            onChange={(e: React.FormEvent<HTMLInputElement>) => setUserdata({ ...userData, salary: e.currentTarget.value })}
                        />
                    </form>
                </ModalContent>
                <ModalFooter>
                    <ConfirmButton type="submit" form="my-form" disabled={state.isLoading_action}> {state.isLoading_action ? <p>Loading...</p> : state.isError_action ? <p>Try again</p> : <p>Update</p>} </ConfirmButton>
                </ModalFooter>
            </Modal>
        </>
    );
}

export { ModalContainer }