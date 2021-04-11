import React from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


interface HeaderProps {
  onOpenNewTransactionModa: () => void;
};


export function Header({onOpenNewTransactionModa}: HeaderProps){

  return(
    <Container>
      <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenNewTransactionModa}>
        Nova Transação
      </button>



      </Content>
    </Container>
  );
}