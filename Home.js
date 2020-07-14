import React from "react";
import { View, Text, Button,Image ,SafeAreaView, ScrollView} from "react-native";

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    // this.state={
    //   textValue:''
    // };
   // this.handletxtChange=this.handletxtChange.bind(this);
    
  }

  // async componentDidUpdate() {
  //   const { navigation } = this.props;

  //   let data = navigation.getParam("data");
  //   console.log(data);
  //   if (data !== undefined) {
  //     try {
  //       await fetch("https://familyexpenses.herokuapp.com/api/category", {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: data,
  //         }),
  //       });
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // }

  // handletxtChange(text){
  //   this.setState({textValue:text});
  // }

  render() {
    const { navigation } = this.props;
    //const {textValue} = this.state;
  
    return (

     

      <View 
      style={{ 
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
        }}>

        <View style={{
          flex: 1,
          
        }}>
            <Image
                style={{
                  width: 100,
                  height: 100,
                }}
                source={require('./assets/newmar_logo.png')}
            />
        </View> 

         
          <View style={{ flex:2,}}><Button
            title="Go Scan"
            onPress={() => this.props.navigation.navigate("Scanner")}
          /></View>
          
          
          {/* <View style={{ 
            flex:1,
            flexDirection: "row",
            alignItems:'flex-start'
            }}>
            <Text style={{flex:0.25,}}>Estimate ID:</Text> 
            <TextInput 
              style={{flex:0.5,borderBottomWidth: 1, }}
              // onChangeText={text => this.setState({textValue:text})}
              onChangeText={this.handletxtChange}
              value={textValue} />
              
          </View> */}

          {/* <ScrollView style={{ 
            flex:1,
          
            }}>
          <Text>content: {navigation.getParam("data")}</Text>
          </ScrollView> */}
       
        
      </View>

     
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: Feed,
// });

// export default createAppContainer(AppNavigator);
