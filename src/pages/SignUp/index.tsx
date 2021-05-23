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
          console.log('Criar conta');
        }}>
        <Icon name="arrow-left" color="#F4EDE8" />

        <BackToLoginButtonText>Voltar para o login</BackToLoginButtonText>
      </BackToLoginButton>
    </>
  );
};

export default SignUp;
