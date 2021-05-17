import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ModalContainer} from "../CreateUserDialog";
import { Container, Logo, Menu, MenuItem } from './styles';
import { EMP } from '../../constants';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const state = useSelector<initialState, initialState>((state: initialState) => state)
    
    const dispatch = useDispatch();
    useEffect(() => {
        function getData() {
            dispatch({type: EMP.GET});
        }
        getData()
    }, [dispatch])
    return (
        <>
            <Container>
                <Logo>Addis sw Test Project</Logo>
                <Menu>
                    {state.isDone && <MenuItem onClick={()=>setOpen(true)}>Add Employee</MenuItem>}
                </Menu>
            </Container>
            {open && (
                <ModalContainer
                    setOpen={setOpen}
                />
            )}
        </>
    );
}

export default Navbar;