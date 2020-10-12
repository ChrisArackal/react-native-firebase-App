import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBBjwgxVyG7hEzmOJWv0i_t53C-a4vTeBM",
  authDomain: "socialapp-e00d0.firebaseapp.com",
  databaseURL: "https://socialapp-e00d0.firebaseio.com",
  projectId: "socialapp-e00d0",
  storageBucket: "socialapp-e00d0.appspot.com",
  messagingSenderId: "761662144261",
  appId: "1:761662144261:web:51bb5bbf19323a3489816c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen,
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading",
    }
  )
);
