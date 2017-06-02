import React, { Component } from "react"
import { Text, View } from "react-native"
import {Button,Header,Input} from "../../Tags"
import Midware from "../../Store/Middleware/Midware"
import { connect } from "react-redux"
import {StackNavigator} from "react-navigation"


function mapStateToProps(state) {
    return {

        storeState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {

        signupMeth: (idPass) => {
            dispatch(Midware.SignupUser(idPass))
        }

    }
}

class Signup extends Component {
    componentWillReceiveProps(prop) {
        const { navigate } = this.props.navigation
      
        if (prop.storeState.signupSucess) {
            navigate('MainRoute')
        }
// console.log(prop , "signup")

    }




    static navigationOptions={
            title : "Signup"
        }
   
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    SignupUserMethod() {
        let userDetail = {
            id: this.state.email,
            pass: this.state.password
        }
        this.props.signupMeth(userDetail)
    }

    render() {
       
        return (
            <View>
                <Header text="Signup" />

                <Input
                    placeHolder="abc@example.com"
                    onChangeText={email => {
                        this.setState({
                            email
                        })
                    } }
                    value={this.state.email}
                    />

                <Input
                    placeHolder="password"
                    secureTextEntry
                    onChangeText={password => {
                        this.setState({
                            password
                        })
                    } }
                    value={this.state.password}
                    />

                <Button onPress={this.SignupUserMethod.bind(this)}>Signup</Button>

            </View>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup)