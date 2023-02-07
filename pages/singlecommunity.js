import React, { useState } from 'react';
import styles from '../styles/SingleCommunity.module.css';
import Image from 'next/image';

import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/leftSideBar/LeftSideBar';
import RightSideBar from '../sections/home/RightSideBar';

import profile_pic from '../assets/single_community/profile-pic.svg';
import banner_image2 from '../assets/single_community/banner_image2.jpg';
import trending_icon from '../assets/home-page/trending-icon.svg';
import post_icon from '../assets/post_icon.svg';
import new_icon from '../assets/home-page/new-icon.svg';
import feather_more_horizontal from '../assets/single_community/feather_more_horizontal.svg';
import dropdown from '../assets/single_community/dropdown.svg';
import user_icon from '../assets/home-page/user-icon.svg';
import futureMoreVertical_icon from '../assets/home-page/futureMoreVertical-icon.svg';
import numberOfViewsIcon from '../assets/home-page/numberOfViewsIcon.svg';
import like_icon from '../assets/home-page/like-icon.svg';
import dislike_icon from '../assets/home-page/dislike-icon.svg';
import share_icon from '../assets/home-page/share-icon.svg';

const Singlecommunity = () => {
	const [ mobileMenu, setmobileMenu ] = useState(false);

	const toggle = () => {
		setmobileMenu(!mobileMenu);
	};
	return (
		<div>
			<Navbar openMenu={toggle} />
			<LeftSideBar burgerMenu={mobileMenu} closeMenu={toggle} />
			<section className={styles.rigtbar_section}>
				<div className={styles.rigtbar_section_a}>
					<div className={styles.banner_container}>
						<div className={styles.banner_image_container}>
							<Image src={banner_image2} alt='pix_1' />
							<div className={styles.banner_overlay} />
						</div>

						<div className={styles.banner_container_inner}>
							<Image width={40} height={40} src={profile_pic} alt='user_pix' />
							<div className={styles.banner_inner_a}>
								<p>Port Harcourt Design Community</p>
								<p>30,000 Members </p>
							</div>
							<button className={styles.btn_join}>Join</button>
						</div>
					</div>

					<hr className={styles.banner_line} />

					<div className={styles.singlePost_btnContainer}>
						<button className={styles.btn_rightbar_trending}>
							<Image width={12} height={12} src={trending_icon} alt='trending_icon' /> Hot
						</button>
						<button className={styles.btn_rightbar_new}>
							<Image width={15} height={15} src={post_icon} alt='start_icon' />New
						</button>
						<button className={styles.btn_rightbar_new}>
							<Image width={9} height={9} src={new_icon} alt='start_icon' />Top
						</button>
						<Image src={feather_more_horizontal} alt='more_icon' />
						<Image src={dropdown} alt='more_icon' />
					</div>

					<div className={styles.post_card}>
						<div className={styles.container_a}>
							<Image width={40} height={40} src={user_icon} alt='user_pix' />
							<div className={styles.inner_a}>
								<p>Golanginya</p>
								<p>5 min ago</p>
							</div>
							<a href=''>
								<Image width={24} height={24} src={futureMoreVertical_icon} alt='feature_pix' />
							</a>
						</div>
						<h3>How to patch KDE on FreeBSD?</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit
							nulla
						</p>
						<div className={styles.inner_b}>
							<div className={styles.inner_ba}>
								<button className={styles.btn_post}>goland</button>
								<button className={styles.btn_post}>link</button>
								<button className={styles.btn_post}>overflow</button>
							</div>
							<div className={styles.inner_bb}>
								<a href=''>
									<Image src={numberOfViewsIcon} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={like_icon} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={dislike_icon} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={share_icon} alt='views_pix' />155
								</a>
							</div>
						</div>
					</div>
					<div className={styles.post_card}>
						<div className={styles.container_a}>
							<Image width={40} height={40} src={user_icon} alt='user_pix' />
							<div className={styles.inner_a}>
								<p>Golanginya</p>
								<p>5 min ago</p>
							</div>
							<a href=''>
								<Image width={24} height={24} src={futureMoreVertical_icon} alt='feature_pix' />
							</a>
						</div>
						<h3>How to patch KDE on FreeBSD?</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit
							nulla
						</p>
						<div className={styles.inner_b}>
							<div className={styles.inner_ba}>
								<button className={styles.btn_post}>goland</button>
								<button className={styles.btn_post}>link</button>
								<button className={styles.btn_post}>overflow</button>
							</div>
							<div className={styles.inner_bb}>
								<a href=''>
									<Image src={numberOfViewsIcon} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={like_icon} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={dislike_icon} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={share_icon} alt='views_pix' />155
								</a>
							</div>
						</div>
					</div>
				</div>
				<RightSideBar />
			</section>
		</div>
	);
};

export default Singlecommunity;
