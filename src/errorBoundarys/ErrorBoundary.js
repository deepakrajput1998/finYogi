import React from 'react';
import {Text,SafeAreaView, View} from 'react-native';
import Colors from '../utilities/Color';



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    alert(error, errorInfo)
    console.warn(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <SafeAreaView
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '700',
                color: Colors.V2_Text,
              }}>
              Something went wrong.
            </Text>
          </View>
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
