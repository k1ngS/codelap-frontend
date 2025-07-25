import * as S from './styles';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.Overlay>
      <S.Container>
        {children}
      </S.Container>
    </S.Overlay>
  );
};

export default Modal;