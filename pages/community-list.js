import React, { useState } from 'react';
import styles from '../styles/CommunityList.module.css';
import Image from 'next/image';

import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/leftSideBar/LeftSideBar';
// import MainSection from '../sections/home/MainSection';
import RightSideBar from '../sections/home/RightSideBar';

import trendingIcon from '../assets/home-page/trending-icon.svg';
import post_icon from '../assets/post_icon.svg';
import new_icon from '../assets/home-page/new-icon.svg';
import animation_design_icon from '../assets/animation_design_icon.svg';

const Communitylist = () => {
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
					<button className={styles.btn_rightbar_trending}>
						<Image width={12} height={12} src={trendingIcon} alt='trending_icon' /> Trending
					</button>
					<button className={styles.btn_rightbar_new}>
						<Image width={12} height={12} src={post_icon} alt='start_icon' />Post
					</button>
					<button className={styles.btn_rightbar_new}>
						<Image width={10} height={10} src={new_icon} alt='start_icon' />Related Topic
					</button>

					<div className={`${styles.post_card} ${styles.post_margin}`}>
						<p className={styles.post_card_heading}>Communities related to design</p>
					</div>
					<div className={styles.post_card}>
						<div className={styles.container_a}>
							<Image width={40} height={40} src={animation_design_icon} alt='user_pix' />
							<div className={styles.inner_a}>
								<p>Animation Design Community</p>
								<p>55k Members</p>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit
							nulla
						</p>
						<div className={styles.inner_b}>
							<div className={styles.inner_ba}>
								<button className={styles.btn_post}>visit</button>
							</div>
						</div>
					</div>
					<div className={styles.post_card}>
						<div className={styles.container_a}>
							<Image width={40} height={40} src={animation_design_icon} alt='user_pix' />
							<div className={styles.inner_a}>
								<p>PortHarcourt Design Community</p>
								<p>55k Members</p>
							</div>
						</div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit
							nulla
						</p>
						<div className={styles.inner_b}>
							<div className={styles.inner_ba}>
								<button className={styles.btn_post}>visit</button>
							</div>
						</div>
					</div>
				</div>
				<RightSideBar />
			</section>
		</div>
	);
};

export default Communitylist;
