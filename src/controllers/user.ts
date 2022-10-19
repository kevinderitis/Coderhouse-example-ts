class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }
}

export default User;