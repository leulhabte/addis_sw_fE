import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {ModalContainer} from "../CreateUserDialog";
import { Container, Logo, Menu, MenuItem } from './styles';
import { EMP } from '../../constants';

const Navbar: React.FC = () => {
    const [open, setOpen] = useState(false);
    
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
                <Logo>Addis software</Logo>
                <Menu>
                    <MenuItem onClick={()=>setOpen(true)}>Add Employee</MenuItem>
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