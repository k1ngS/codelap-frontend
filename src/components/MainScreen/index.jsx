import Header from '../Header'
import PostForm from '../PostForm'
import * as S from './styles'

const MainScreen = () => {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <PostForm />
      </S.Content>
    </S.Container>
  )
}

export default MainScreen
