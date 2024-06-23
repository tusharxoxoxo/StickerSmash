import { StatusBar } from "expo-status-bar";
import { StyleSheet, View} from "react-native";

import Button from './components/Button'; 
import ImageViewer from './components/ImageViewer';

const PlaceholderImage = require("./assets/images/background-image.png");

// ...rest of the import statements remain unchanged
 import * as ImagePicker from 'expo-image-picker'; 

export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };

  // ...rest of the code remains same
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

