import React from 'react';
import { Image, KeyboardAvoidingView, Platform } from 'react-native';
import logoImg from '../../assets/logo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Icon } from '../../components/Input/styles';
import {
  Container,
  CreateAccountButton,
  CreateAccountButtonText,
  ForgotPasswordButton,
  ForgotPasswordText,
  Title
} from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <Container>
          <Image source={logoImg} />

          <Title>Faça seu logon</Title>
          <Input name="email" icon="mail" placeholder="E-mail" />
          <Input name="password" icon="lock" placeholder="Senha" />

          <Button
            onPress={() => {
              console.log('Clicked');
            }}>
            Entrar
          </Button>

          <ForgotPasswordButton
            onPress={() => {
              console.log('esqueci minha senha');
            }}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPasswordButton>
        </Container>
      </KeyboardAvoidingView>

      <CreateAccountButton
        onPress={() => {
          console.log('Criar conta');
        }}>
        <Icon name="log-in" color="#FF9900" />

        <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
