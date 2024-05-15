export class User {
    // lastname : string = "";

    //put ! as optional
    lastname !: string;
    firstname !: string;
    email !: string;
    food !: string[];

    //constructor (name : dataType)
    constructor(lastname1: string, firstname: string, email: string, food: string[]){
        
        this.lastname = lastname1;
        this.firstname = firstname;
        this.email = email;
        this.food = food;
    }
}
