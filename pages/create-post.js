import React, { useState, useEffect } from 'react';
// import styles from '../styles/CreatePost.module.css';
import styles2 from '../sections/CreatePost/CreatePost.module.css';

import { getSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/router';

// import loginPix from '../assets/login_pix.png';
import addImageIcon from '../assets/addImage_icon.svg';
import sendPostIcon from '../assets/sendPost_icon.svg';

import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/leftSideBar/LeftSideBar';
import MainSection from '../sections/home/MainSection';
import RightSideBar from '../sections/home/RightSideBar';
import CreatePost from '../sections/CreatePost/CreatePost';

const Createpost = ({ session }) => {
  const router = useRouter();

  const [postData, setPostData] = useState({
    title: '',
    content: '',
    community: '',
    image: '',
  });

  const [mobileMenu, setmobileMenu] = useState(false);

  const [loading, setLoading] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };

  const handleSubmit = async () => {
    const { title, content, community } = postData;
    // console.log(postData);
    setLoading(true);
    await axios
      .post(`/api/post/create`, {
        title,
        content,
        community,
      })
      .then(function (response) {
        if (response) {
          setLoading(false);
          router.replace('/');
          // console.log(response)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Navbar openMenu={toggle} session={session} />
      <LeftSideBar burgerMenu={mobileMenu} closeMenu={toggle} />
      <section className={styles.rigtbar_section}>
        {/* <CreatePost /> */}
        <div className={styles2.rigtbar_section_a}>
          <div className={styles2.container_a}>
            <h3>New Post</h3>
            <div className={styles2.select_interest}>
              <p>Select community</p>
              <select
                name='interest'
                id=''
                onChange={(e) =>
                  setPostData({ ...postData, community: e.target.value })
                }
              >
                <option value='design'>lorem Design</option>
                <option value='javascript'>lorem Javascript</option>
                <option value='bitcoin'>lorem Bitcoin</option>
              </select>
            </div>

            <div className={styles2.interest_name}>
              <p>Post title</p>
              <input
                className={styles2.txt_community}
                type='text'
                placeholder='enter post title'
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
            </div>

            <div className={styles2.interest_name}>
              <p>Content</p>
              <textarea
                placeholder='enter content'
                className={styles2.txt_post}
                name='enter_content'
                onChange={(e) =>
                  setPostData({ ...postData, content: e.target.value })
                }
              />
            </div>

            <div className={styles2.interest_buttons}>
              {/* <button className={`${styles.btn_image} ${styles.btn_create}`}>
						<Image src={addImageIcon} alt='create_pix' /> Add Image
					</button> */}
              <input
                style={{ backgroundColor: 'unset', color: 'black' }}
                type='file'
                className={`${styles2.btn_image} ${styles2.btn_create}`}
                placeholder='choose file'
              />
              <div className={styles2.interet_btnInner}>
                <button
                  className={`${styles2.btn_draft} ${styles2.btn_create}`}
                >
                  Save as draft
                </button>
                <button
                  onClick={handleSubmit}
                  className={`${styles2.btn_image} ${styles2.btn_create}`}
                >
                  <Image src={sendPostIcon} alt='create_pix' />
                  {loading ? 'loading...' : 'Post'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <RightSideBar />
      </section>
    </div>
  );
};
export async function getServerSideProps(context) {
  const session = await getSession(context);
  // console.log('from session',session)
  if (!session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: '/signin',
      },
    };
  }

  return {
    props: { session },
  };
}

export default Createpost;
