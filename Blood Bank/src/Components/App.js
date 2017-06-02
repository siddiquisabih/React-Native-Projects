import React, { Component } from "react"
import { Text, View } from "react-native"

import store from "../Store"
import { Provider} from "react-redux"
import * as firebase from "firebase"

import Login from "../Components/Login/Login"
import Signup from "../Components/Signup/Signup"

import {Button} from "../Tags"
import Routes from "../Router/Routes"



class App extends Component {

componentWillMount(){
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCTjf_PRPYJL10bSsIFH3UdkHVPk2QbIwU",
    authDomain: "bloodbank-876e1.firebaseapp.com",
    databaseURL: "https://bloodbank-876e1.firebaseio.com",
    projectId: "bloodbank-876e1",
    storageBucket: "bloodbank-876e1.appspot.com",
    messagingSenderId: "560849097238"
  };
  firebase.initializeApp(config);
}




    render() {
        

        // const {navigate} = this.props.navigation
        return (
<Provider store={store}>


<Routes/>


</Provider>
        )
    }
}
export default App





