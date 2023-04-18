import { useDispatch } from 'react-redux';
import * as C from './style';
import { logoutUser } from '../../actions/actions';
import { Link } from 'react-router-dom';

export const Header = () => {

  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return (
    <C.Container>
      <h1>CodeLeap Network</h1>
      <div>
        <Link to="/">
          <p onClick={handleLogout}>Sair</p>
        </Link>
      </div>
    </C.Container>
  )
}
