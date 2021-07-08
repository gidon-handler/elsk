
interface Address {
    street: string,
    city: string,
    country: string,
    zip: number | undefined
};

export class User {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    gender: 'male' | 'female' = 'male';
    address: Address = { street: '', city: '', country: '', zip: undefined };
    phoneNumbers: string[] = [];
}
