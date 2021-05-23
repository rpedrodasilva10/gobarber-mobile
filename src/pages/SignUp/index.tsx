import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform } from 'react-native';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Icon } from '../../components/Input/styles';
import {
  BackToLoginButton,
  BackToLoginButtonText,
  Container,
  Title,
} from './styles';

const SignUp: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Container>
          <Image source={logoImg} />

          <Title>Crie sua conta</Title>
          <Input name="name" icon="user" placeholder="Nome" />
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log('Register now');
            }}>
            Cadastrar
          </Button>
        </Container>
      </KeyboardAvoidingView>

      <BackToLoginButton
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="arrow-left" color="#F4EDE8" />

        <BackToLoginButtonText>Voltar para o login</BackToLoginButtonText>
      </BackToLoginButton>
    </>
  );
};

export default SignUp;
