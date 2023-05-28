import { useAppSelector } from './redux-hooks';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../storage/UserSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const checkUser = onAuthStateChanged(auth, (currentUser) => {
    dispatch(
      setUser({
        email: currentUser?.email,
        id: currentUser?.uid,
        token: currentUser?.refreshToken,
      })
    );
    return () => {
      checkUser();
    };
  });

  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuthorized: !!token,
    email,
    token,
    id,
  };
}
