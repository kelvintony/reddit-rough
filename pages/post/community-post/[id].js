import React, { useState, useEffect, useReducer } from 'react';
import Loader from '../../../components/Loader/Loader';

import db from '../../../utils/db';
import postModel from '../../../models/post';

import styles2 from '../../../sections/home/MainSection.module.css';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import LeftSideBar from '../../../components/leftSideBar/LeftSideBar';
import MainSection from '../../../sections/home/MainSection';
import RightSideBar from '../../../sections/home/RightSideBar';

import moment from 'moment';

import trendingIcon from '../../../assets/home-page/trending-icon.svg';
import newIcon from '../../../assets/home-page/new-icon.svg';
import userIcon from '../../../assets/home-page/user-icon.svg';
import futureMoreVertical from '../../../assets/home-page/futureMoreVertical-icon.svg';
import numberOfViewsIcon from '../../../assets/home-page/numberOfViewsIcon.svg';
import likeIcon from '../../../assets/home-page/like-icon.svg';
import dislike from '../../../assets/home-page/dislike-icon.svg';
import shareIcon from '../../../assets/home-page/share-icon.svg';

import { signIn, getSession, useSession } from 'next-auth/react';
import axios from 'axios';

import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const { params } = context;
  const { id } = params;

  await db.connect();
  const post = await postModel
    .findOne({ _id: id })
    .populate('user', 'username')
    .lean();
  console.log('single post', post);
  await db.disconnect();

  return {
    props: {
      session,
      myPost: post ? JSON.parse(JSON.stringify(post)) : null,
    },
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, posts: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

export default function Home({ session }) {
  const [{ loading, error, posts }, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: '',
  });

  const [mobileMenu, setmobileMenu] = useState(false);
  // const [getPost, setGetPost] = useState('');
  // const [loadme, setLoadme] = useState(false);

  const router = useRouter();
  const mySession = useSession();

  //   console.log("cusSess", mySession);
  // console.log('cusSess', mySession?.data?.user._id);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  useEffect(() => {
    window.localStorage.setItem(
      'profile',
      session ? JSON.stringify(session?.user) : ''
    );
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/post`);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  //
  //
  const cutText = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 150) + ' ...';
    }
    return str;
  };

  function replaceWithBr(value) {
    return value.replace(/\n/g, '<br />');
  }

  function replaceWithBr2(value) {
    let str = value;
    let result = str.split('\n');
    return result.map((i, key) => <p key={key}>{i + '\n'}</p>);
  }
  const simpleDiv = {
    height: '300px',
    width: '300px',
    paddingLeft: '90px',
    zIndex: '-1',
  };
  return (
    <div>
      <Navbar openMenu={toggle} session={session} />
      <LeftSideBar burgerMenu={mobileMenu} closeMenu={toggle} />
      <section className={styles2.rigtbar_section}>
        {loading ? (
          <div style={simpleDiv}>
            <Loader />
          </div>
        ) : error ? (
          <div className={styles.alert_error}>{error}</div>
        ) : (
          <div className={styles2.rigtbar_section_a}>
            {posts.map((post) => {
              return (
                <div key={post?._id} className={styles2.post_card}>
                  <div className={styles2.container_a}>
                    {/* <Image width={40} height={40} src={userIcon} alt='user_pix' /> */}
                    <div className={styles2.profile__image}>
                      {post?.user?.username?.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles2.inner_a}>
                      <p>{post?.user?.username}</p>
                      <p>{moment(post?.createdAt).fromNow()}</p>
                    </div>
                    {mySession?.data?.user?._id === post?.user?._id ? (
                      <a href={`/post/${post?._id}`}>
                        <Image
                          width={24}
                          height={24}
                          src={futureMoreVertical}
                          alt='feature_pix'
                        />
                      </a>
                    ) : (
                      <a href=''></a>
                    )}
                  </div>
                  <h3>{post?.title}</h3>

                  {/* {replaceWithBr2(cutText(post?.content))} */}
                  {replaceWithBr2(post?.content)}
                  {/* <div className={styles2.inner_b}>
                    <div className={styles2.inner_ba}>
                      <button className={styles2.btn_post}>
                        {post.community}
                        {''} community
                      </button>
                    </div>
                    <div className={styles2.inner_bb}>
                      <a href=''>
                        <Image src={numberOfViewsIcon} alt='views_pix' />
                        125
                      </a>
                      <a href=''>
                        <Image src={likeIcon} alt='views_pix' />
                        125
                      </a>
                      <a href=''>
                        <Image src={dislike} alt='views_pix' />
                        125
                      </a>
                      <a href=''>
                        <Image src={shareIcon} alt='views_pix' />
                        155
                      </a>
                    </div>
                  </div> */}
                </div>
              );
            })}
          </div>
        )}
        <RightSideBar />
      </section>
    </div>
  );
}
