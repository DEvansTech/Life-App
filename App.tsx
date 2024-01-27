/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/context/Auth';
import OnboardStackNav from './src/navigators/Onboard';
import { store } from './src/redux/store';

function App() {
  useEffect(() => { }, []);
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <OnboardStackNav />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}

export default App;
