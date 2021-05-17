import React, { useState } from 'react'
import { DialogContainer } from "../Dialog";
import { ModalContainer } from "../UpdateUserDialog";
import { ViewContainer } from "../ViewUser";
import { Box, Button, Title, Typography, Paper, Row } from "./styles";

const Employees: React.FC<{
    name: string;
    dateofbirth: string;
    gender: string;
    salary: number;
    id: string;
}> = ({
    name,
    dateofbirth,
    gender,
    salary,
    id
}) => {
        const [openDialog, setOpenDialog] = useState(false);
        const [openViewUser, setOpenViewUser] = useState(false);
        const [open, setOpen] = useState(false);
        return (
            <div>
                <Paper>
                    <Row>
                        <Title>Name {<Typography>{name}</Typography>}</Title>
                        <Box>
                            <Button color="green" onClick={() => setOpenViewUser(true)}>View</Button>
                            <Button onClick={() => setOpen(true)}>Update</Button>
                            <Button color="red" onClick={() => setOpenDialog(true)}>Delete</Button>
                        </Box>
                    </Row>
                </Paper>
                {openDialog && (
                    <DialogContainer
                        setOpen={setOpenDialog}
                        id={id}
                    />
                )}
                {openViewUser && (
                    <ViewContainer
                        name={name}
                        dateofbirth={dateofbirth}
                        gender={gender}
                        salary={salary}
                        setOpen={setOpenViewUser}
                    />
                )}
                {open && (
                    <ModalContainer
                        setOpen={setOpen}
                        name={name}
                        dateofbirth={dateofbirth}
                        gender={gender}
                        salary={salary.toString()}
                        _id={id}
                    />
                )}
            </div>
        )
    }

export default Employees