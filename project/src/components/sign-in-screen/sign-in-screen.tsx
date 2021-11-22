import Logo from '../logo/logo';
import LogoFooter from '../logo/logo-footer';
import { FormEvent, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/api-actions';
import { AppRoute, RegularExpression} from '../../const';

function SignInScreen(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const [ emailValid, setEmailValid ] = useState(false);
  const [ email, setEmail ] = useState({
    login: '',
  });
  const [ passwordValid, setPasswordValid ] = useState(false);
  const [ password, setPassword ] = useState({
    password: '',
  });

  const validLogin = !emailValid ? <div style={{color:'red', border: '3px solid black'}}>В поле «логин» должен вводиться корректный домен. Пример: info@info.com</div> : ' ';
  const validPassword = !passwordValid ? <div style={{color:'red', border: '3px solid black'}}>В поле «пароль» должен вводится валидный пароль. Под валидным паролем подразумевается пароль, который состоит минимум из одной буквы и цифры.</div> : ' ';

  const getValidForEmail = (text: string) => {
    if (!RegularExpression.RegularExpressionEmail.test(text)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  };

  const getValidForPassword = (text: string) => {
    if (!RegularExpression.RegularExpressionPassword.test(text)) {
      setPasswordValid(false);
    } else {
      setPasswordValid(true);
    }
  };

  const getEmail = () => {
    if (emailRef.current) {
      setEmail({
        ...email,
        login: emailRef.current?.value,
      });
    }
  };

  const getPassword = () => {
    if (passwordRef.current ) {
      setPassword({
        ...password,
        password: passwordRef.current.value,
      });
    }
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current !== null && passwordRef.current !== null) {
      dispatch(
        loginAction({
          login: emailRef.current.value,
          password: passwordRef.current.value,
        }),
      );
      history.push(AppRoute.Main);
    }
  };

  useEffect(() => {
    getValidForEmail(email.login);
  }, [email.login]);

  useEffect(() => {
    getValidForPassword(password.password);
  }, [password.password]);

  return (

    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleFormSubmit}>
          <div className="sign-in__fields">
            {emailRef.current ? validLogin : ' '}
            <div className="sign-in__field">
              <input className="sign-in__input"  type="email" placeholder="Email address" name="user-email" id="user-email" ref={emailRef} onChange={getEmail}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            {passwordRef.current ? validPassword : ' '}
            <div className="sign-in__field">
              <input className="sign-in__input"  type="password" placeholder="Password" name="user-password" id="user-password" ref={passwordRef} onChange={getPassword}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit" disabled={!emailValid || !passwordValid}>Sign in</button>
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


