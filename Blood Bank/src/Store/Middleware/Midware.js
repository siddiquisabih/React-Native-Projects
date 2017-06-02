import * as firebase from "firebase"
import Actions from "../Action/AuthAction"
class Midware {

    static SignupUser(userDetail) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.createUserWithEmailAndPassword(userDetail.id, userDetail.pass).then(() => {
                dispatch(Actions.SignupAction())
            }
            )
        }
    }

    static LoginUser(userDetail) {
        return (dispatch) => {
            let auth = firebase.auth();
            auth.signInWithEmailAndPassword(userDetail.id, userDetail.pass).then(() => {
                dispatch(Actions.LoginAction())
            }).catch((error) => {

                // dispatch(Actions.errorAction(error.message))
                console.log(error.message);

            });
        }
    }


    static LogoutUser() {
        return (dispatch) => {
            firebase.auth().signOut().then(() => {

                dispatch(Actions.logoutUserAction())

            })
        }

    }



    static dataSend(userDetail) {
        return (dispatch) => {

            let database = firebase.database().ref().child("dataRedux")
            let data = {
                userData: userDetail
            }
            database.push(data)
            dispatch(Actions.dataAction())
        }
    }


    static getData() {
        return (dispatch) => {
            let arrdata = [];
            let database = firebase.database().ref("dataRedux")

            database.on("value", (object) => {

                let keys = object.val();
                for (var a in keys) {
                    arrdata.push(keys[a].userData)
                }
                dispatch(Actions.getDataAction(arrdata))
            })

        }
    }
}
export default Midware