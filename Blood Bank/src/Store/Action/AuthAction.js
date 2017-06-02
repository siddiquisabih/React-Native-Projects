class Actions {

    static login = "Login"
    static signup = "Signup"
    static sendData = "send data"
    static getData = "get data"
    static error = "error"
    static logout = "logout"


    static LoginAction() {
        return {
            type: Actions.login
        }
    }

    static SignupAction() {
        return {
            type: Actions.signup
        }
    }
    static dataAction() {
        return {
            type: Actions.sendData
        }
    }

    static getDataAction(value) {
        return {
            type: Actions.getData,
            data: value
        }
    }


static errorAction(message){
    return{
        type : Actions.error,
        errorMessage : message
    }
}


static logoutUserAction(){
    return{
        type : Actions.logout
    }
}



}
export default Actions