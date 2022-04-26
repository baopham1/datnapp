import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Button,
  Alert
} from "react-native";
import { Dimensions,Pressable } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';



const RegisterScreen = (props) => {

  const { navigation } = props;
   
    const [password, setPassword] = useState("");   
    const [repassword, setRePassword] = useState("");
    const [username, setUsername] = useState("");
    const [register, setregister] = useState({});
    
    const onLogin = () => {
        navigation.navigate('LoginScreen')
    }
    const onSignUp = ()=>{
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username:username,
          password:password,
          confirm_password:password,
          role:2
        })
        
    };
        if(!password || !username){
          Alert.alert("Vui lòng không để trống")
        }else{
          if(password === repassword){
            fetch('http://192.168.100.140:3000/api-index/dangky',requestOptions)
            .then((response) => response.json())
            .then((json) => {
              const data = json
              
              if(json?.success==true){
                Alert.alert("Đăng ký thành công")
                navigation.goBack()
              }
              else{
                Alert.alert("Tên đăng nhập đã có")
              }
            })
            .catch((error) => console.error(error))
            
          }else{
            Alert.alert("Nhập lại password không chính xác")
          }
        }

    }

  return (
    <View style={styles.container}> 
      <View style={styles.top}>
      {/* <Image style={styles.logo} source={require("../../assets/M.png")} /> */}
      <Text style={styles.textLet}>Let’s Get Started</Text>
      <Text style={styles.textCreate}>Create an new account</Text>
      </View>
      <View style={styles.middle}>
        <View style={styles.cardview}>              
                <View style={styles.startView}>
                    {/* <MaterialCommunityIcons style={styles.icons} name="email-outline" size={26} color="#20B3F0" /> */}
                    <Feather style={styles.icons} name="user" size={26} color="#20B3F0" />
                    <TextInput
                        style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                        placeholder="UserName"
                    />
                </View>                    
        </View>
        
            
            <View style={styles.cardview}>              
                <View style={styles.startView}>
                <AntDesign style={styles.icons} name="lock" size={26} color="#20B3F0" />
                    <TextInput
                        secureTextEntry
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password."
                    />
                </View>                    
            </View>  
            <View style={styles.cardview}>              
                <View style={styles.startView}>
                <AntDesign style={styles.icons} name="lock" size={26} color="#20B3F0" />
                    <TextInput
                    secureTextEntry
                        style={styles.input}
                        onChangeText={setRePassword}
                        value={repassword}
                        placeholder="Password Again."
                    />
                </View>                    
            </View>    

      </View>
      <View style={styles.bottom}>
      <TouchableOpacity
            onPress={onSignUp}
            style={styles.buttonLogin}
            >
                <Text style={styles.buttonLoginText}>Sign Up</Text>
      </TouchableOpacity>    
      <View style={styles.register}>
                <Text style={styles.dontText}>Have a account? </Text>

                <TouchableOpacity 
                    onPress={onLogin}
                    >
                    <Text style={styles.Textregister}>Login</Text>
                </TouchableOpacity>
            </View>      
      </View>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    // justifyContent:'center',
    // alignItems:'center',
    
  },
  top:{
    // flex:0.2,
    // borderWidth:1,
    alignItems: 'center',
    justifyContent:'center',
    // marginVertical:30,
    marginTop:70,
},
  middle: {
    // borderWidth:1,
    alignItems: 'center',
    marginVertical:20,

  },
  bottom: {
    // borderWidth:1,
    alignItems: 'center',

  },
  textLet: {
    fontSize: 20,
    height: 28,
    color: "#223263",
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
  textCreate: {
    fontSize: 16,
    height: 22,
    color: "#9098B1",
    alignSelf: "center",
    marginTop: 10,
  },
  cardview:{     
    borderWidth: 1,   
     borderRadius: 7,
     borderColor:'#20B3F0',
     marginVertical:8,
     width: '90%',
    // padding: 22,

  },
  startView:{
      flexDirection:'row',
      alignItems:'center',
      padding: 10,
    //   borderWidth: 1,
  },
  icons:{
    marginRight:10
     
  },
  input:{
    //   borderWidth:1,
      width: windowWidth/1.25,
    //   height: windowHeight/25,
  },
  buttonLogin: {
    backgroundColor: "#40BFFF",
    height: 50,
    marginVertical: 8,
    width: "95%",
    marginTop: 10,
    borderRadius: 7,
    padding: 10,
    justifyContent: "center",
    // alignSelf: "center",
  },
  buttonLoginText: {
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  register: {
    flexDirection:'row',
    height: 50,
    marginVertical: 5,
    width: "90%",
    // marginTop: 10,
    borderRadius: 7,
    alignItems:'center',
    justifyContent:'center',
    // padding: 10,
    // borderWidth:1,
  },
  dontText: {
    fontSize: 16,
    height: 25,
    color: "#9098B1",
    // marginLeft: 10,
  },
  Textregister: {
    height: 25,
    fontSize: 16,
    color: "#40BFFF",
    fontWeight: "bold",
    textAlign:'center',
    // borderWidth:1,  
  },
})