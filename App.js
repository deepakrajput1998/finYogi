import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ErrorBoundary from './src/errorBoundarys/ErrorBoundary';
import Login from './src/component/login/Login';
import Article from './src/component/article/Article';

const Tab = createBottomTabNavigator();
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1
  };

  return (
    <ErrorBoundary>
      <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Login/>
     {/* <Article/> */}
    </SafeAreaView>
    </ErrorBoundary>
    
  );
}


export default App;
