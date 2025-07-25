import styled from 'styled-components'

export const Container = styled.header`
  background-color: #7695EC;
  padding: 27px 37px;
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const Title = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
`

export const Button = styled.button`
  background-color: #FFFFFF;
  border: none;
  border-radius: 8px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 20px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`