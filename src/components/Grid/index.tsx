import React from 'react'
import { Grid, Box } from "./styles";
import Employee from '../Employee/index'
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Oval } from "../../assets/oval.svg";
import { Button } from "../Employee/styles";
import { EMP } from '../../constants';

export default function GridContainer() {
    const state = useSelector<initialState, initialState>((state) => state)
    const dispatch = useDispatch()
    return (
        <>
            {state.isLoading && 
            <Box><Oval scale={5} /></Box>
            }
            {state.isError && <Box><Button onClick={()=> dispatch({type: EMP.GET}) }>Retry</Button></Box>}
            <Grid>
                {
                    state.data&&
                    state.data.length !== 0 &&
                    state.data.map((value: IEmployee, index: number) => (
                        <Employee
                            key={index}
                            name={value.name}
                            dateofbirth={value.dateOfBirth}
                            gender={value.gender}
                            salary={value.salary as number}
                            id={value._id}
                        />
                    ))
                }
            </Grid>
        </>
    )
}
