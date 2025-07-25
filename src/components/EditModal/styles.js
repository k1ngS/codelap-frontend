import styled from "styled-components";

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

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  color: #000;
  margin-bottom: 24px;
`;

export const Form = styled.div``;

export const InputGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #777;
  border-radius: 8px;
  font-size: 14px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #777;
  border-radius: 8px;
  font-size: 14px;
  min-height: 74px;
  resize: vertical;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
`;

export const Button = styled.button`
  padding: 8px 24px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  ${({ variant }) => variant === 'cancel' && `
    background-color: #fff;
    color: #000;
    border: 1px solid #999;
  `}

  ${({ variant }) => variant === 'save' && `
    background-color: #47B960;
    color: #fff;
    border: none;
  `}

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;