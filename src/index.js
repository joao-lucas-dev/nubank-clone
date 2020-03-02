import React from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from './components/Header';
import Menu from './components/Menu';
import Tabs from './components/Tabs';
import {
  SafeAreaView,
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  Title,
  Description,
  CardFooter,
  Annotation,
} from './styles';

export default function Index() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <SafeAreaView>
        <Container>
          <Header />

          <Content>
            <Menu />

            <Card>
              <CardHeader>
                <Icon name="attach-money" size={28} color="#666" />
                <Icon name="visibility-off" size={28} color="#666" />
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 197.611,65</Description>
              </CardContent>
              <CardFooter>
                <Annotation>
                  Transferência de R$ 2.542,97 recebida de Diego Schell
                  Fernandes
                </Annotation>
              </CardFooter>
            </Card>
          </Content>

          <Tabs />
        </Container>
      </SafeAreaView>
    </>
  );
}
