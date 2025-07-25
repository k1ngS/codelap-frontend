import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 16px;
  width: 500px;
  max-width: 90vw;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  color: #000;
  margin-bottom: 24px;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: #000;
  margin-bottom: 8px;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #777;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;

  &::placeholder {
    color: #ccc;
  }
`

export const Button = styled.button`
  width: 111px;
  height: 32px;
  background-color: ${props => props.disabled ? "#ccc" : "#7695ec"};
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.2s;
  margin-left: auto;
  display: block;

  &:hover:not(:disabled) {
    background-color: #5577dd;
  }
`