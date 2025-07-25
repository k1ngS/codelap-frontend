import { useUser } from '../../context/UserContext'
import * as S from './styles'

const Header = () => {
  const { logout } = useUser();
  return (
    <S.Container>
      <S.Title>CodeLeap Network</S.Title>
      <S.Button type='button' onClick={() => logout()}>Logout</S.Button>
    </S.Container>
  )
}

export default Header
