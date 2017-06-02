import { StackNavigator } from "react-navigation"


import Login from "../Components/Login/Login"
import Signup from "../Components/Signup/Signup"
import App from "../Components/App"
import Home from "../Components/HomePage/Home"
import Data from "../Components/DonorForm/Form"
import GetData from "../Components/DonorList/List"
import Main from "../Components/MainPage/Main"
import Logout from "../Components/Logout/Logout"


const Routes = StackNavigator({
    // Main : {screen : App},
    HomeComponent: { screen: Home },
    SignupRoute: { screen: Signup },
    LoginRoute: { screen: Login },
    DonorRoute: { screen: Data },
    ListRoute: { screen: GetData },
    MainRoute: {screen : Main},
    LogoutRoute : {screen : Logout}



})

export default Routes