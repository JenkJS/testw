import React, { useCallback } from 'react';
import './style.scss';
import { useInput } from '../../hooks';
import { IRequestAuth } from '../../interfaces/inreface';

const Auth = () => {
  const email = useInput({ initialValue: '', validations: { isEmpty: true, isEmail: true } });
  const password = useInput({ initialValue: '', validations: { isEmpty: true, minLength: 8 } });

  const onSubmit = useCallback(async (e: React.FormEvent, data: IRequestAuth) => {
    e.preventDefault();
    await new Promise<void>((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(data, null, 2));
  }, []);
  return (
    <form
      className='wrapper'
      onSubmit={(e) => onSubmit(e, { email: email.value, password: password.value })}
    >
      <h3>Вход</h3>
      <p>Для существующих пользователей</p>
      <div className='container'>
        <div className='wrapper-input'>
          <label htmlFor='email'>E-Mail:<span>*</span></label>
          <input
            onChange={email.onChange}
            onBlur={email.onBlur}
            className={!email.isValid && email.isDirty ? 'inputError' : 'input'}
            name='email'
            type='text'
          />
          {email.isDirty && email.emailErr && (
            <span className='error'>E-mail введен не коректно</span>
          )}
        </div>
        <div className='wrapper-input'>
          <label htmlFor='email'>Password: <span>*</span></label>
          <input
            onChange={password.onChange}
            onBlur={password.onBlur}
            className={!password.isValid && password.isDirty ? 'inputError' : 'input'}
            name='password'
            type='password'
          />
          {password.isDirty && password.minLengthErr && (
            <span className='error'>Пароль должен быть не короче 8 символов</span>
          )}
        </div>
        <button className='button' disabled={!email.isValid || !password.isValid} type='submit'>
          Войти в систему
        </button>
      </div>
    </form>
  );
};

export default Auth;
