import React, { Component } from "react"
import { Button } from "../../Tags"
import { View } from "react-native"

import { StackNavigator } from "react-navigation"

class Home extends Component {
    static navigationOptions = {
        title: 'Blood Bank'
    }
    render() {

        const { navigate } = this.props.navigation

        return (
            <View style={style.container}>

                <View style={style.viewStyle} >
                    <Button onPress={() => {
                        navigate('SignupRoute')
                    }} title="Signup" >Signup</Button>


                    <Button onPress={() => {
                        navigate('LoginRoute')
                    }} title="Login" >Login</Button>

                </View>


            </View>
        )
    }
}

export default Home

const style = {
    viewStyle: {
        marginTop: 390,
        // backgroundColor : "blue"
    },
    container: {
        // backgroundColor:"red",
        flex: 1
    }

}


