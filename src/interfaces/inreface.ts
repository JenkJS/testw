export interface IValidations {
    isEmpty?: boolean,
    minLength?: number,
    isEmail?:boolean,
}

export interface IUseValidation {
    value: string ,
    validations? : IValidations
}
export interface IUseInput {
    initialValue: string ,
    validations? : IValidations
}
export interface IRequestAuth {
    email: string,
    password: string
}
