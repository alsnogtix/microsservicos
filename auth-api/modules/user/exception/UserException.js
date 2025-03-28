class UserException extends Error{
    constructor(status, message){
        super(message);
        this.status = status;
        this.message = message;
        this.name = this.constuctor.name;
        Error.captureStackTrace(this.this.constuctor);
    }
}

export default  UserException;