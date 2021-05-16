import { ActionTypes } from "../store/action";

// get all employees
export const fetchEmployee = async (): Promise<IData> => {
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };
    const res = await fetch("/employee", requestOptions);

    if(res.status !== 200){
        throw new Error("");
    }

    return res.json()
}

// add an employee
export const saveData = async (userData: ActionTypes): Promise<IData> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(userData.payload);

    const requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    const res = await fetch("/employee/create", requestOptions)

    if(res.status !== 201){
        throw new Error("Error")
    }

    return res.json()
}

// remove an employee
export const removeEmployee = async (id: ActionTypes): Promise<IData> =>{
    const requestOptions: RequestInit = {
        method: 'DELETE',
        redirect: 'follow'
    };

    const res = await fetch(`/employee/remove?id=${id.payload}`, requestOptions)

    if(res.status === 201){
        return res.json()
    }
    
    throw new Error("");
}


// update an employee
export const updateEmployee = async (userData: IEmployee): Promise<IData> => {
    const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const filter = {
            name: userData.name,
            dateOfBirth: userData.dateOfBirth,
            gender: userData.gender,
            salary: userData.salary
        }
        const raw = JSON.stringify(filter);

        const requestOptions: RequestInit = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        const res = await fetch(`/employee/update?id=${userData._id}`, requestOptions)

        if(res.status === 200){
            return res.json()
        }

        throw new Error("");
        
}
