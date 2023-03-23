export class Student {
    constructor(
        public id: number, 
        public firstName: string,
        public lastName: string,
        public email: string,
        public course: string,
        public mark: number,
        public approved: boolean,
        public professional: boolean,
        public age: number,
        public birthdate: Date, 
    ){}
}