import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Text>Hello world</Text>
    </SafeAreaView>
  </>
);

export default App;
