import React, { Component } from "react"
import { Text, View } from "react-native"
import { Button, Header } from "../../Tags"

import { StackNavigator } from "react-navigation"

import { connect } from "react-redux"
import Midware from "../../Store/Middleware/Midware"

function mapStateToProps(state) {
    return {
        storeState: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logoutMeth: () => {
            dispatch(Midware.LogoutUser())
        }
    }
}
class Logout extends Component {

    static navigationOptions = {
        title: "Logout"
    }
   
   

LogoutUserMethod(){
this.props.logoutMeth()
const {navigate} = this.props.navigation
navigate('HomeComponent')

}


   
    render() {
        return (
            <View>
                <Header text="Logout" />


                
<Button onPress={this.LogoutUserMethod.bind(this)}>Logout</Button>
     

            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)