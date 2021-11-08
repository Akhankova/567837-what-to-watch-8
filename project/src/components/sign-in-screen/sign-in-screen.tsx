import Logo from '../logo/logo';
import LogoFooter from '../logo/logo-footer';
import {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import {loginAction} from '../../store/api-actions';
import {AppRoute} from '../../const';


function SignInScreen(): JSX.Element {

  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (): void => {

    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: emailRef.current.value,
        password: passwordRef.current.value,
      }));
      history.push(AppRoute.Main);
    }
  };

  return (

    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={emailRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" onClick={handleSubmit}>Sign in</button>
          </div>
        </form>
      </div>

      <footer className="page-footer">
        <div className="logo">
          <LogoFooter/>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignInScreen;
