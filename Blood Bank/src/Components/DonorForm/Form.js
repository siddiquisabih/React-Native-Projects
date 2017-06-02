import React, { Component } from "react"
import { Text, View, ScrollView } from "react-native"
import * as firebase from "firebase"

import { Button, Header, Input } from "../../Tags"

import Midware from "../../Store/Middleware/Midware"
import { connect } from "react-redux"

function mapStateToProps(state) {
    return {
        storeState: state
    }
}


function mapDispatchToProps(dispatch) {
    return {
        sendDataToFirebase: (data) => {
            dispatch(Midware.dataSend(data))
        }

    }
}

class Data extends Component {
    static navigationOptions = {
        title: "Donor Form"
    }
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            number: "",
            address: "",
            bloodGroup: "",
        }
    }



    sendData() {
        let detail = {
            email: this.state.email,
            name: this.state.name,
            number: this.state.number,
            address: this.state.address,
            bloodGroup: this.state.bloodGroup
        }

        this.props.sendDataToFirebase(detail)

        this.setState({
            name: "",
            email: "",
            number: "",
            address: "",
            bloodGroup: "",
        })
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Header text="Form" />

                    <Input
                        placeHolder="Full Name"
                        onChangeText={name => {
                            this.setState({
                                name
                            })
                        }}
                        value={this.state.name}
                    />


                    <Input
                        placeHolder="Address"
                        onChangeText={address => {
                            this.setState({
                                address
                            })
                        }}
                        value={this.state.address}
                    />

                    <Input
                        placeHolder="Email"
                        onChangeText={email => {
                            this.setState({
                                email
                            })
                        }}
                        value={this.state.email}

                    />
                    <Input
                        placeHolder="Contact Number"
                        onChangeText={number => {
                            this.setState({
                                number
                            })
                        }}
                        value={this.state.number}
                    />

                    <Input
                        placeHolder="Blood Group"
                        onChangeText={bloodGroup => {
                            this.setState({
                                bloodGroup
                            })
                        }}
                        value={this.state.bloodGroup}
                    />

                    <Button onPress={this.sendData.bind(this)}>Send</Button>


                </View>
            </ScrollView>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Data)