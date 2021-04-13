import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isModalOpen: boolean;
  onRequestCloseModal: () => void;
}

export function NewTransactionModal({isModalOpen, onRequestCloseModal}: NewTransactionModalProps){
  const {createTransaction} = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');


  async function handleCreateNewTransaction (event: FormEvent){
    event.preventDefault();

    await createTransaction({
      title, 
      amount,
      category,
      type
    });

  
    setType('deposit');
    setTitle('');
    setAmount(0);
    setCategory('');
    
    onRequestCloseModal();
  } 


  return(
    <Modal 
    isOpen={isModalOpen} 
    onRequestClose={onRequestCloseModal}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
    <button 
      type="button" 
      onClick={onRequestCloseModal}
      className="react-modal-close"
    >
      <img src={closeImg} alt="Fechar modal"/>
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
    <h2>Cadastrar transação</h2>

    <input 
      placeholder="Título" 
      onChange={event => setTitle(event.target.value)}
      value={title}
    />

    <input 
      placeholder="Valor" 
      type="number" 
      value={amount}
      onChange={event => setAmount(Number(event.target.value))}
    />

    <TransactionTypeContainer>
      <RadioBox 
        onClick={() => setType('deposit')}
        type="button"
        activeColor="green"
        isActive={type === 'deposit'}
      >
        <img src={incomeImg} alt="Deposit" />
        <span>Entrada</span>
      </RadioBox>

      <RadioBox 
        onClick={() => setType('withdraw')}
        type="button"
        isActive={type === 'withdraw'}
        activeColor="red"
      >
        <img src={outcomeImg} alt="Withdraw" />
        <span>Saida</span>
      </RadioBox>
    </TransactionTypeContainer>

    <input 
      placeholder="Categoria"
      value={category}
      onChange={(event) => setCategory(event.target.value)}
    />

    <button type="submit">Cadastrar</button>



    </Container>

    
  </Modal>

  );

}