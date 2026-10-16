
export interface IUser {
    id: number;
    name: string;
    email: string;
}

export interface IUserRecord extends IUser {
    password?: string;
    senha?: string;
}