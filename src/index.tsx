import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import Test from '@/components/Test';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Test />
      <Text>Hello world</Text>
    </SafeAreaView>
  </>
);

export default App;
