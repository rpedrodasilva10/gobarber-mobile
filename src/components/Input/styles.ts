import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #232129;
  height: 60px;
  border-radius: 10px;
  margin-bottom: 8px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)`
  margin: 0 16px;
`;