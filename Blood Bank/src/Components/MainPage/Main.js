import React , {Component} from "react"
import {Button } from "../../Tags"
import {View } from "react-native"

import {StackNavigator} from "react-navigation"

class Main extends Component{
static navigationOptions={
    title : 'Main'
}
    render(){

const {navigate} = this.props.navigation

        return(
            <View style={style.container}>

<View style={style.viewStyle} >  

<Button onPress={()=>{
   navigate('DonorRoute')
    }} title="Donor" >Donor</Button>


    <Button onPress={()=>{
   navigate('ListRoute')
    }} title="Donor List" >Donor List</Button>

</View>
{/*logout*/}
{/*testing*/}
  <Button onPress={()=>{
   navigate('LogoutRoute')
    }} title="Setting" >Settings</Button>

            </View>
        )
    }
}

export default Main

const style={
    viewStyle:{
marginTop : 200,
// backgroundColor : "blue"
    },
    container:{
        // backgroundColor:"gray",
        flex:1
    }

}


