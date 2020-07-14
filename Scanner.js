import React, { useState, useEffect } from "react";
import { Text, Linking,View, StyleSheet, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as WebBrowser from 'expo-web-browser';

export default function Scanner(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {

    if(await Linking.canOpenURL(data)){
      // setContent(data);
      setScanned(true);
      
      try {
        await WebBrowser.openBrowserAsync(data);
  
      } catch (error) {

      } 
      setScanned(false);
    }
  };

  // const onPressButton = ()=>{
  //   setScanned(false);
  //   setContent('');
  // }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (

    <View style={{
      flex: 1,
    }}>
      <View style={{
          flex: 1,
          
        }}>
         
         <Image
            style={{
              width: 100,
              height: 100,
              alignSelf:"center"
            }}
            source={require('./assets/newmar_logo.png')}
      />
      </View> 

      <View 
        style={{
          flex: 4,
          flexDirection: "column",
          justifyContent: "flex-end",
          paddingBottom:50,
          marginBottom:100
        }}
      >

    
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />

        {/* {scanned && (
          //<Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
          <Button title={"Tap to Scan Again"} onPress={onPressButton} />
        )} */}
        
        </View>
    </View>
  );
}
