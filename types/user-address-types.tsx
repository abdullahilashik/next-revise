export interface AddressInterface {
    city: string;
    state: string
}

export interface HobbyInterface {
    name: string;
}

export interface FormDataInterface {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    gender: string;
    address: AddressInterface;
    hobbies: HobbyInterface[];
    startDate: Date;
    subscribe: boolean;
    referral: string;
}