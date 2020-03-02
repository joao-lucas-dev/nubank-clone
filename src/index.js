import React from 'react';
import { StatusBar } from 'react-native';

import Header from './components/Header';
import Tabs from './components/Tabs';
import { SafeAreaView, Container } from './styles';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <SafeAreaView>
        <Container>
          <Header />
          <Tabs />
        </Container>
      </SafeAreaView>
    </>
  );
}
