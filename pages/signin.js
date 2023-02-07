import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import SiginLoader from '../components/SigninLoader/SiginLoader';
import { signIn, getSession } from 'next-auth/react';

import styles from '../styles/Signup.module.css';
import Image from 'next/image';
import loginPix from '../assets/login_pix.png';
import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/leftSideBar/LeftSideBar';

const Signin = ({ session }) => {
  //toggle menu section
  const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  const router = useRouter();

  const { pathname, asPath } = router;

  const { redirect } = router.query;

  const [user, setUser] = useState(null);

  // const userDummy=globalThis?.window?.sessionStorage.getItem('profile')

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const [formDataError, setFormDataError] = useState(false);

  const [loading, setLoading] = useState(false);

  const [loadComponent, setLoadComponent] = useState(true);

  const mySession = getSession();

  const submitFormData = async () => {
    if (formData.email.length === 0 || formData.password.length === 0) {
      setFormDataError(true);
    }

    if (formData.email && formData.password) {
      setLoading(true);
      const result = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      try {
        if (result.ok) {
          setLoading(false);
          // console.log(result);
          // console.log(session);
          router.replace('/');
        } else {
          setLoading(false);
          setErrorMessage(result.error);
          // console.log(result);
          // console.log(result.error);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <Navbar openMenu={toggle} />
      {mobileMenu && <LeftSideBar burgerMenu={mobileMenu} closeMenu={toggle} />}
      <section className={styles.register_container}>
        <div className={styles.register_inner_container}>
          <div className={styles.container_a}>
            <h3>We&apos;ve Missed You</h3>
            <p className={styles.container_p}>
              Kindly signin and get first access to the very best topic and
              community.
            </p>
            {errorMessage && (
              <p className={styles.errorMessageContainer}>{errorMessage}</p>
            )}
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
            <button
              onClick={submitFormData}
              className={styles.btn_register_a}
              disabled={loading}
            >
              {loading ? <SiginLoader /> : 'Login'}
            </button>

            <Link href='/signup' className={styles.already_signup}>
              Forgot username or password?
            </Link>

            <Link href='/signup' className={styles.already_signup}>
              Sign up
            </Link>
          </div>
          <div className={styles.container_b}>
            <Image className={styles.regster_logo} src={loginPix} alt='pix-c' />
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  // console.log('from session',session)
  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: { session },
  };
}

export default Signin;
