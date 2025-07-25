import styled from "styled-components";

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
  color: #000;
  margin-bottom: 40px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
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

  ${({ variant }) => variant === 'delete' && `
    background-color: #FF5151;
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