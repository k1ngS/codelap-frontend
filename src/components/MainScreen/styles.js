// src/components/MainScreen/styles.js
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #DDDDDD;
  min-height: 100vh;
`

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
`
// --- NOVOS ESTILOS ABAIXO ---

export const PostList = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PostItem = styled.div`
  border: 1px solid #999999;
  border-radius: 16px;
  background-color: #FFFFFF;
`;

export const PostHeader = styled.header`
  background-color: #7695EC;
  color: white;
  padding: 24px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const PostActions = styled.div`
  display: flex;
  gap: 16px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;

    &:hover {
        opacity: 0.8;
    }
  }
`;

export const PostContent = styled.div`
  padding: 24px;

  .post-meta {
    display: flex;
    justify-content: space-between;
    color: #777777;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;

    span:first-child {
      font-weight: 700;
    }

    span:last-child {
        font-weight: 400;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.4;
    word-wrap: break-word;
  }
`;