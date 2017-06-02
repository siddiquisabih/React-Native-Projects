import Actions from "../Action/AuthAction"

const initial_state = {

    login: "false",
    signup: "false",
    isRigister: "false",
    DataSend: "false",
    GetData: "false",
    Data: [],
    loginSucess: "false",
    signupSucess: "false",
    isloading: "false",
    isError: "false",
    message: '',
    logout: "false"
}

function AuthReducer(state = initial_state, action) {
    switch (action.type) {
        case Actions.login:
            return Object.assign({}, state, { login: "true", isRigister: "true", loginSucess: "true", isloading: "true" })

        case Actions.signup:
            return Object.assign({}, state, { signup: "true", isRigister: "true", isloading: "true", signupSucess: "true" })

        case Actions.sendData:
            return Object.assign({}, state, { DataSend: "true" })

        case Actions.getData:
            return Object.assign({}, state, { GetData: "true", Data: action.data })

        case Actions.error:
            return Object.assign({}, state, { isError: "true", message: action.errorMessage })

        case Actions.logout:
            return Object.assign({}, state, {
                logout: "true", login: "false", signup: "false", loginSucess: "false",
                signupSucess: "false", isRigister: "false"

            })



        default:
            return state
    }
}
export default AuthReducer