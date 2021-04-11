import Modal from 'react-modal';

interface NewTransactionModalProps {
  isModalOpen: boolean;
  onRequestCloseModal: () => void;
}

export function NewTransactionModal({isModalOpen, onRequestCloseModal}: NewTransactionModalProps){

  return(
    <Modal 
    isOpen={isModalOpen} 
    onRequestClose={onRequestCloseModal}
  >
    <h2>Cadastrar transação</h2>
  </Modal>

  );

}