import 'react-native-gesture-handler';
import * as React from 'react';
import { AuthProvider } from './src/providers/AuthContext';
import Routes from './src/routes/routes';
import { CartProvider } from './src/providers/CartContext';
import Toast from 'react-native-toast-message';
import { Text } from 'react-native-paper';
import MapboxGL from '@react-native-mapbox-gl/maps';

const access_token = "pk.eyJ1IjoiY29uZ2RhbmgyNTA0IiwiYSI6ImNsaDNiZHR1MDBtajgzbW5wbWgzaHA0YnAifQ.cwjwku8H1F6lDFAdiNcpIA"

MapboxGL.setAccessToken(access_token);

const App = () => {

  

  return (
    <AuthProvider>
      
      <CartProvider>
      {/* <Text>Cong Danh</Text> */}
        <Routes />
        {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
      </CartProvider>
    </AuthProvider>
  );
}


export default App;
