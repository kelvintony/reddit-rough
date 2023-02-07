import React, { useState } from 'react';
import Image from 'next/image';
import styles from './LeftSideBar.module.css';

import searchIcon from '../../assets/home-page/search-icon.svg';
import menuIcon from '../../assets/home-page/menu-icon.svg';
import dcIcon from '../../assets/home-page/dc-icon.svg';
import gdcIcon from '../../assets/home-page/gdc-icon.svg';
import fcIcon from '../../assets/home-page/fc-icon.svg';
import javaIcon from '../../assets/home-page/java-icon.svg';
import bitcoinIcon from '../../assets/home-page/bitcoin-icon.svg';
import designIcon from '../../assets/home-page/design-icon.svg';
import tutorialIcon from '../../assets/home-page/tutorial-icon.svg';
import businessIcon from '../../assets/home-page/business-icon.svg';

import { GrFormClose } from "react-icons/gr";
import {IoLogoFoursquare} from 'react-icons/io'

const LeftSideBar = (props) => {
	return (
		<>
			<section className={styles.leftbar_section}>
				<div className={styles.navbarSearch}>
					<Image width={11} height={11} src={searchIcon} alt='searchPix' />
					<input type='text' name='' id='' placeholder='Global search' />
				</div>
				{/* <a className={styles.menu} href=''>
					<Image width={18} height={18} src={menuIcon} alt='menuPix' />Menu
				</a> */}
				<br />
				<a className={styles.forum} href=''>
					Forum Page 
				</a>
				<div className={styles.popular_community}>
					<h4>POPULAR COMMUNITIES</h4>
					<div className={styles.community_container}>
						<Image width={28} height={28} src={dcIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>Design Community</a>
							<a href=''>Find the latest Update</a>
						</div>
					</div>
					<div className={styles.community_container}>
						<Image width={28} height={28} src={gdcIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>Google Developer Cycle</a>
							<a href=''>Explore more from this community</a>
						</div>
					</div>
					<div className={styles.community_container}>
						<Image width={28} height={28} src={fcIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>Flutter </a>
							<a href=''>Explore more from this community</a>
						</div>
					</div>
				</div>
				<div className={`${styles.popular_community} ${styles.interestCommunity}`}>
					<h4 className={styles.interest_community_heading}>INTEREST</h4>
					<div className={`${styles.community_container}  ${styles.fixed_position}`}>
						<Image width={28} height={28} src={javaIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>#javascript</a>
							<a href=''>82,645 Communities &middot Trending</a>
						</div>
					</div>
					<div className={styles.community_container}>
						<Image width={28} height={28} src={bitcoinIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>#bitcoin</a>
							<a href=''>82,645 Communities &middot Trending</a>
						</div>
					</div>
					<div className={styles.community_container}>
						<Image width={28} height={28} src={designIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>#design</a>
							<a href=''>82,645 Communities &middot Trending</a>
						</div>
					</div>
					<div className={styles.community_container}>
						<Image width={28} height={28} src={tutorialIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>#tutorial</a>
							<a href=''>82,645 Communities &middot Trending</a>
						</div>
					</div>
					<div className={styles.community_container}>
						<Image width={28} height={28} src={businessIcon} alt='comunityPix' />
						<div className={styles.community_inner}>
							<a href=''>#business</a>
							<a href=''>82,645 Communities &middot Trending</a>
						</div>
					</div>
				</div>
				<div className={styles.lefttbar_about}>
					<a href=''>About</a>
					<a href=''>Privacy</a>
					<a href=''>Terms</a>
				</div>
			</section>

			{props.burgerMenu&&
			<div className={styles.harmbuger_slide}>
				<section className={styles.leftbar_section}>
					<div className={styles.harmbuger_header}>
						<p>Forumix <IoLogoFoursquare color='#BE272A' size={25}/></p>
						<button className={styles.close_Button} onClick={() => props.closeMenu()}>
							<GrFormClose size={25} />
						</button>
					</div>
					<hr className={styles.harmburger_linethrough}/>
					<div className={styles.search_container}>
						<div className={styles.navbarSearch}>
							<Image width={11} height={11} src={searchIcon} alt='searchPix' />
							<input type='text' name='' id='' placeholder='Global search' />
						</div>
					</div>
					{/* <a className={styles.menu} href=''>
						<Image width={18} height={18} src={menuIcon} alt='menuPix' />Menu
					</a> */}
					<br />
					<div className={styles.forum_container}>
						<a className={styles.forum} href=''>
							Forum Page
						</a>
					</div>
					<div className={styles.popular_community}>
						<h4>POPULAR COMMUNITIES</h4>
						<div className={styles.community_container}>
							<Image width={28} height={28} src={dcIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>Design Community</a>
								<a href=''>Find the latest Update</a>
							</div>
						</div>
						<div className={styles.community_container}>
							<Image width={28} height={28} src={gdcIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>Google Developer Cycle</a>
								<a href=''>Explore more from this community</a>
							</div>
						</div>
						<div className={styles.community_container}>
							<Image width={28} height={28} src={fcIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>Flutter </a>
								<a href=''>Explore more from this community</a>
							</div>
						</div>
					</div>
					<div className={`${styles.popular_community} ${styles.interestCommunity}`}>
						<h4 className={styles.interest_community_heading}>INTEREST</h4>
						<div className={`${styles.community_container}  ${styles.fixed_position}`}>
							<Image width={28} height={28} src={javaIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>#javascript</a>
								<a href=''>82,645 Communities &middot Trending</a>
							</div>
						</div>
						<div className={styles.community_container}>
							<Image width={28} height={28} src={bitcoinIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>#bitcoin</a>
								<a href=''>82,645 Communities &middot Trending</a>
							</div>
						</div>
						<div className={styles.community_container}>
							<Image width={28} height={28} src={designIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>#design</a>
								<a href=''>82,645 Communities &middot Trending</a>
							</div>
						</div>
						<div className={styles.community_container}>
							<Image width={28} height={28} src={tutorialIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>#tutorial</a>
								<a href=''>82,645 Communities &middot Trending</a>
							</div>
						</div>
						<div className={styles.community_container}>
							<Image width={28} height={28} src={businessIcon} alt='comunityPix' />
							<div className={styles.community_inner}>
								<a href=''>#business</a>
								<a href=''>82,645 Communities &middot Trending</a>
							</div>
						</div>
					</div>
					<div className={styles.lefttbar_about}>
						<a href=''>About</a>
						<a href=''>Privacy</a>
						<a href=''>Terms</a>
					</div>
				</section> 
				<div className={styles.overlay}  onClick={() => props.closeMenu()}></div>
			</div>
			}
		</>
	);
};

export default LeftSideBar;
