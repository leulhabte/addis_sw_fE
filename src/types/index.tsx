export interface IEmployee {
    _id: string;
    name: string;
    dateOfBirth: string;
    gender: string;
    salary: number;
}

export interface IData {
    error: null | string;
    data: IEmployee[]
}

export interface initialState {
    isLoading: boolean;
    isError: boolean;
    data: IEmployee[]
}

export interface payload {
    type: string,
    payload: boolean | IEmployee
}