import styled from 'styled-components'

export const Container = styled.div`
  background-color: #DDDDDD;
  min-height: 100vh;
`

export const ContentWrapper = styled.div`
  background-color: #DDDDDD;
  min-height: calc(100vh - 76px);
  display: flex;
  justify-content: center;
  padding: 0 16px;
`

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #FFFFFF;
  padding: 24px;
`

export const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const PostItem = styled.div`
  border: 1px solid #999999;
  border-radius: 16px;
  background-color: #FFFFFF;
  overflow: hidden;
`;

export const PostHeader = styled.header`
  background-color: #7695EC;
  color: #FFFFFF;
  padding: 24px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    color: #FFFFFF;
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
    color: #FFFFFF;
    padding: 4px;
    border-radius: 4px;
    transition: opacity 0.2s;

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
    align-items: center;
    color: #777777;
    font-size: 18px;
    margin-bottom: 16px;

    span:first-child {
      font-weight: 700;
      color: #777777;
    }

    span:last-child {
      font-weight: 400;
      color: #777777;
    }
  }

  p {
    font-size: 18px;
    line-height: 1.4;
    word-wrap: break-word;
    color: #000000;
    margin: 0;
  }
`;