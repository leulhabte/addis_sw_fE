import React, { useState } from 'react'
import { DialogContainer } from "../Dialog";
import { ModalContainer } from "../UpdateUserDialog";
import { Box, Card, Button, Title, Typography } from "./styles";

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
        const [open, setOpen] = useState(false);
        return (
            <div>
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
                    <Box property="flex-start">
                        <Button onClick={() => setOpen(true)}>Update</Button>
                        <Button color="red" onClick={() => setOpenDialog(true)}>Delete</Button>
                    </Box>
                </Card>
                {openDialog && (
                    <DialogContainer
                        setOpen={setOpenDialog}
                        id={id}
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