import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import {createServer, Model} from 'miragejs';
import React, { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import Modal from 'react-modal';
import { TransactionsProvider } from "./hooks/useTransactions";


Modal.setAppElement('#root');

createServer({
  models: {
    transaction: Model
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-05 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-09 15:00:00')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', (req, res) => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModa={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal 
        isModalOpen={isNewTransactionModalOpen} 
        onRequestCloseModal={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

