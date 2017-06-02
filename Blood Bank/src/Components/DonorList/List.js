import React, { Component } from "react"
import { Text, View, ScrollView } from "react-native"
import * as firebase from "firebase"
import { Button, Header, Spinner, Input } from "../../Tags"
import Midware from "../../Store/Middleware/Midware"
import { connect } from "react-redux"


function mapStateToProps(state) {
    return {
        ArrayData: state.Data,
        dataState: state.GetData

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDataFromFirebase: () => {
            dispatch(Midware.getData())
        }

    }
}

class GetData extends Component {
    static navigationOptions = {
        title: "Donor Information"
    }

    getdata() {
        this.props.getDataFromFirebase()
    }


    render() {
        return (
            <ScrollView>
                <Header text="Donor List" />

                {this.props.ArrayData.map((m, v) => {
                    return (

                        <View key={v}>
                            <Text></Text>
                            <Text></Text>
                            <Text>Name : {m.name}</Text>
                            <Text>Address : {m.address}</Text>
                            <Text>Email : {m.email}</Text>
                            <Text>Number : {m.number}</Text>
                            <Text>Blood Group : {m.bloodGroup}</Text>
                            <Text></Text>
                            <Text></Text>
                        </View>
                    )
                })}

                <Button onPress={this.getdata.bind(this)}>Get</Button>
            </ScrollView>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetData)