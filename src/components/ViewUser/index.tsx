import React from 'react';
import { ModalContent, ModalShadow, Modal, ModalBanner } from "./styles";
import { Box, Card, Title, Typography } from "../Employee/styles";


const ViewContainer: React.FC<{
    name: string;
    dateofbirth: string;
    gender: string;
    salary: number;
    setOpen: (data: boolean) => void
}> = ({
    name,
    dateofbirth,
    gender,
    salary,
    setOpen
}) => {
        function close() {
            setOpen(false);
        }
        return (
            <>
                <ModalShadow onClick={close} />
                <Modal>
                    <ModalBanner>Employee</ModalBanner>
                    <ModalContent>
                        <Card>
                            <Box>
                                <Title>Name</Title>
                                <Typography>{name}</Typography>
                            </Box>
                            <Box>
                                <Title>Date of birth</Title>
                                <Typography>{dateofbirth}</Typography>
                            </Box>
                            <Box>
                                <Title>Gender</Title>
                                <Typography>{gender}</Typography>
                            </Box>
                            <Box>
                                <Title>Salary</Title>
                                <Typography>{salary}</Typography>
                            </Box>
                        </Card>
                    </ModalContent>
                </Modal>
            </>
        );
    }

export { ViewContainer }