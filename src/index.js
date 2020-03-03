import React from 'react';
import { StatusBar, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
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
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;

      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 25) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8b10ae" />
      <SafeAreaView>
        <Container>
          <Header />

          <Content>
            <Menu translateY={translateY} />

            <PanGestureHandler
              onGestureEvent={animatedEvent}
              onHandlerStateChange={onHandlerStateChanged}
            >
              <Card
                style={{
                  transform: [
                    {
                      translateY: translateY.interpolate({
                        inputRange: [-300, 0, 380],
                        outputRange: [-50, 0, 380],
                        extrapolate: 'clamp',
                      }),
                    },
                  ],
                }}
              >
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
            </PanGestureHandler>
          </Content>

          <Tabs translateY={translateY} />
        </Container>
      </SafeAreaView>
    </>
  );
}
