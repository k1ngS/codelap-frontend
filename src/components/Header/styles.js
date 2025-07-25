import styled from 'styled-components'

export const Container = styled.header`
  background-color: #7695EC;
  padding: 27px 37px;
  margin-bottom: 24px;

  display: flex;
  justify-content: space-between;
  width: 800px;
  margin: 0 auto;
`

export const Title = styled.h1`
  grid-column: 2;
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  justify-self: center;
`

export const Button = styled.button`
  grid-column: 3;
  justify-self: end;

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