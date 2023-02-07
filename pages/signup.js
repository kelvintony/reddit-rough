import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import SiginLoader from '../components/SigninLoader/SiginLoader';

import styles from '../styles/Signup.module.css';
import Image from 'next/image';
import registerPix from '../assets/register_pix.png';
import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/leftSideBar/LeftSideBar';

// style={{cursor:loading&&'progress'}}

const authAxios = axios.create({
  baseURL: 'https://reddit-forum-api.vercel.app',
  // baseURL: 'http://localhost:5000'
});

// style={{cursor:loading&&'progress'}}
const Signup = () => {
  //toggle menu section
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  const router = useRouter();

  // const { pathname, asPath } = router;

  // const {redirect}= router.query

  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [formDataError, setFormDataError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loadComponent, setLoadComponent] = useState(true);

  useEffect(() => {
    setUser(JSON.parse(window.sessionStorage.getItem('profile')));

    setLoadComponent(false);
  }, []);

  const submitFormData = async () => {
    if (
      formData.username.length === 0 ||
      formData.email.length === 0 ||
      formData.password.length === 0 ||
      formData.confirmPassword.length === 0
    ) {
      setFormDataError(true);
    }

    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage('passwords must match');
      // return alert('passwords must match');
    }

    if (
      formData.username &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    ) {
      setLoading(true);
      await authAxios
        .post('/user/signup', formData)
        .then((res) => {
          if (res) {
            // localStorage.setItem('profile', JSON.stringify(res.data));
            setLoading(false);
            setResponseMessage(
              'A verification link has already been sent to your email please verify'
            );
            // alert('signup successfully');
            // navigate('/');
          }
        })
        .catch((err) => {
          // alert('Email already exist');
          setLoading(false);
          setErrorMessage(err?.response?.data?.message);
        });
    }
  };

  if (user !== null) {
    router.replace('/');
    return null;
  }

  if (loadComponent) {
    return null;
  }

  return (
    <div>
      <Navbar openMenu={toggle} />
      {mobileMenu && <LeftSideBar burgerMenu={mobileMenu} closeMenu={toggle} />}

      <section className={styles.register_container}>
        <div className={styles.register_inner_container}>
          {responseMessage ? (
            <h3 className={styles.container_a}>{responseMessage}</h3>
          ) : (
            <div className={styles.container_a}>
              <h3>
                Join The <br /> Community
              </h3>
              <p className={styles.container_p}>
                Create your Member profile and get first access to the very best
                topic and community.
              </p>

              {errorMessage && (
                <p className={styles.errorMessageContainer}>{errorMessage}</p>
              )}

              <label htmlFor='username'>
                Username: <br />
                <input
                  type='text'
                  name='username'
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
                <br />
                {formDataError && formData.username.length <= 0 ? (
                  <span style={{ color: 'red' }}>* required</span>
                ) : (
                  ''
                )}
              </label>

              <label htmlFor='email'>
                Email: <br />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <br />
                {formDataError && formData.email.length <= 0 ? (
                  <span style={{ color: 'red' }}>* required</span>
                ) : (
                  ''
                )}
              </label>

              <label htmlFor='password'>
                Password: <br />
                <input
                  type='password'
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
                <br />
                {formDataError && formData.password.length <= 0 ? (
                  <span style={{ color: 'red' }}>* required</span>
                ) : (
                  ''
                )}
              </label>

              <label htmlFor='confirmPassword'>
                Confirm Password: <br />
                <input
                  type='password'
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <br />
                {formDataError && formData.confirmPassword.length <= 0 ? (
                  <span style={{ color: 'red' }}>* required</span>
                ) : (
                  ''
                )}
              </label>

              <button
                onClick={submitFormData}
                className={styles.btn_register_a}
                disabled={loading}
              >
                {loading ? <SiginLoader /> : 'Register'}
              </button>
              <Link href='/signin' className={styles.already_signup}>
                Already have an account?
              </Link>
            </div>
          )}
          <div className={styles.container_b}>
            <Image
              className={styles.regster_logo}
              src={registerPix}
              alt='pix-c'
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
