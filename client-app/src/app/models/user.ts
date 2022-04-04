export interface User {
     username: string;
     displayName: string;
     token: string;
     image?: string;
}

export interface UserFormValue {
     email?: string;
     passwod?: string;
     displayName?: string;
     username?: string;
}