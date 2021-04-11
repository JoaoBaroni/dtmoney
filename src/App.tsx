import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer} from 'miragejs';
import React, { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', (req, res) => {
      return[
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ];
    });
  }
})


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }


  return (
    <>
      <Header onOpenNewTransactionModa={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isModalOpen={isNewTransactionModalOpen} 
        onRequestCloseModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

