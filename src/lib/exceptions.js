/* export class AuthRequiredError extends Error {
    constructor(message = "Error") {
        super(message)
        this.name = 'Error' 
    }
} */

export class AuthRequiredError extends Error {
    constructor(message = 'Error') {
        super(message)
        this.name = ' Error'
    }
}
