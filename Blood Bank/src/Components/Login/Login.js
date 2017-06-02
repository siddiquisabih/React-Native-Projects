import React, { Component } from "react"
import { Text, View } from "react-native"
import { Button,Spinner, Header, Input } from "../../Tags"

import { StackNavigator } from "react-navigation"

import { connect } from "react-redux"
import Midware from "../../Store/Middleware/Midware"

function mapStateToProps(state) {
    return {
        storeState: state,
        errorMessage : state.message
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loginMeth: (idPass) => {
            dispatch(Midware.LoginUser(idPass))
        }
    }
}
class Login extends Component {

    componentWillReceiveProps(prop) {
        const { navigate } = this.props.navigation
      
        if (this.props.storeState.loginSucess!==false) {
            navigate('MainRoute')
         }

console.log("this is loginsucess prop " ,this.props.storeState.loginSucess) 

    }


    static navigationOptions = {
        title: "Login"
    }

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            // errr : this.props.errorMessage,
        }
    }

    LoginUserMethod() {
        let userDetail = {
            id: this.state.email,
            pass: this.state.password
        }
        this.props.loginMeth(userDetail)
        
        this.setState({
            email : '' ,
             password : ''

        })

      


    }

    render() {
        return (
            <View>
                <Header text="Login" />
                <Input
                    placeHolder="abc@example.com"
                    onChangeText={email => {
                        this.setState({
                            email
                        })
                    }}
                    value={this.state.email}
                />

                <Input
                    placeHolder="password"
                    secureTextEntry
                    onChangeText={password => {
                        this.setState({
                            password
                        })
                    }}
                    value={this.state.password}
                />

<Text>{this.props.errorMessage}</Text>

<Button onPress={this.LoginUserMethod.bind(this)}>Login</Button>
     

            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)