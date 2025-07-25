import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Container = styled.div`
  background-color: #fff;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
`;