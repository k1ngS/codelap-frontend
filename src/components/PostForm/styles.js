import styled from 'styled-components'

export const Container = styled.div`
  background: white;
  border: 1px solid #CCCCCC;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;
  color: #000;
`

export const Form = styled.form``

export const InputGroup = styled.div`
  margin-bottom: 16px;
`

export const Label = styled.label`
  display: block;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  color: #000;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #777777;
  border-radius: 8px;
  font-size: 14px;

  &::placeholder {
    color: #CCCCCC;
  }

  &:focus {
    border-color: #7695EC;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #777777;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 74px;

  &::placeholder {
    color: #CCCCCC;
  }

  &:focus {
    border-color: #7695EC;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CreateButton = styled.button`
  background-color: ${props => props.disabled ? '#CCCCCC' : '#7695EC'};
  color: white;
  padding: 8px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #5577DD;
  }
`
