interface IEmployee {
    _id: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    salary: number;
}

interface IPopuate {
    name: string;
    dateOfBirth: string;
    gender: string;
    salary: string;
}

interface IData {
    error: null | string;
    data: IEmployee[]
}

interface initialState {
    isLoading: boolean;
    isError: boolean;
    isDone: boolean;
    isLoading_action: boolean;
    isError_action: boolean;
    isDone_action: boolean;
    data: IEmployee[]
}

type payload = {
    type: string,
    payload: {
        data: IEmployee,
        value: boolean
    }
}

type String = string

// type DispatchType = (args: payload) => payload