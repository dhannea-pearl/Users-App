
export interface Addres {
    street: string,
    city: string,
    zipCode: string
}

export interface Profile {
    name: string,
    email: string,
    addres: Addres
}

export interface NotificationSettings {
    email: boolean,
    push: boolean
}

export interface Settings{
    theme: string,
    notification: NotificationSettings
}


export interface User {
    id: number,
    username: string,
    profile: Profile,
    settings: Settings,
    role: string[] // array of strings
}


