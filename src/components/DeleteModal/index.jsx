import Modal from '../Modal';
import * as S from './styles'

const DeleteModal = ({ isOpen, onCancel, onConfirm, isDeleting }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal isOpen={isOpen}>
        <S.Title>Are you sure you want to delete this item?</S.Title>
        <S.Actions>
          <S.Button variant="cancel" onClick={onCancel}>
            Cancel
          </S.Button>
          <S.Button variant="delete" onClick={onConfirm} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </S.Button>
        </S.Actions>
    </Modal>
  )
}

export default DeleteModal;