import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';

interface NewTransactionModalProps {
  isModalOpen: boolean;
  onRequestCloseModal: () => void;
}

export function NewTransactionModal({isModalOpen, onRequestCloseModal}: NewTransactionModalProps){

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
    <Container>
    <h2>Cadastrar transação</h2>

    <input placeholder="Título"/>

    <input placeholder="Valor" type="number"/>
    <TransactionTypeContainer>
      <button>
        <img src={incomeImg} alt="Deposit" />
        <span>Entrada</span>
      </button>

      <button>
        <img src={outcomeImg} alt="Withdraw" />
        <span>Saida</span>
      </button>
    </TransactionTypeContainer>

    <input placeholder="Categoria"/>
    <button type="submit">Cadastrar</button>



    </Container>

    
  </Modal>

  );

}