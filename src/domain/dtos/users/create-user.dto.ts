export class CreateUserDTO {
    constructor(

        public name: string,
        public email: string,
        public password: string,
        public role: string

    ) { }
    static create(object: { [key: string]: any }): [string?, CreateUserDTO?] {

        const { name, email, password, role } = object;
            if(!name) return ['name is required']
    }
}
