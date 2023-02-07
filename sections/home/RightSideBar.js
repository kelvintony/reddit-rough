import Image from 'next/image';
import styles from './RightSideBar.module.css';

import startIcon from '../../assets/home-page/start-icon.svg';
import topCommunityIcon from '../../assets/home-page/topCommunity-icon.svg';
import quickLinksIcon from '../../assets/home-page/quickLinks-icon.svg';

const RightSideBar = () => {
	return (
		<div className='rigtbar_section_b'>
			{/* first section  */}
			<div className={`${styles.right_sidebar} ${styles.right_sidebarTop}`}>
				<h4>
					<Image width={12} height={12} src={startIcon} alt='start_icon' /> Post Of The Moment
				</h4>
				<ul className={styles.post_of_moment}>
					<li>
						<a href=''>Lorem ipsum dolor sit amet, consectetur adipisicing.</a>
					</li>
					<li>
						<a href=''>Lorem ipsum dolor sit amet, consectetur adipisicing.</a>
					</li>
				</ul>
			</div>
			{/* second section  */}
			<div className={styles.right_sidebar}>
				<div className={styles.right_bar_inner}>
					<h4>
						<Image width={12} height={12} src={startIcon} alt='start_icon' />Top Sport Communities
					</h4>
					<div className={styles.right_bar_inner_a}>
						<a href=''>
							<Image width={16} height={16} src={topCommunityIcon} alt='top_community' /> Chelsea Football
							Communities
						</a>{' '}
						<br />
						<a className={styles.join_community} href=''>
							Join Community
						</a>
					</div>
					<div className={styles.right_bar_inner_a}>
						<a href=''>
							<Image width={16} height={16} src={topCommunityIcon} alt='top_community' /> PH Vollyball
							communities
						</a>{' '}
						<br />
						<a className={styles.join_community} href=''>
							Join Community
						</a>
					</div>
					<a className={styles.btn_see_all_communities}>See All Communities</a>
				</div>
				<div className={styles.right_bar_inner}>
					<h4>
						<Image width={12} height={12} src={startIcon} alt='start_icon' />Top Design Communities
					</h4>
					<div className={styles.right_bar_inner_a}>
						<a href=''>
							<Image width={16} height={16} src={topCommunityIcon} alt='top_community' /> Port Harcourt
							Design community
						</a>{' '}
						<br />
						<a className={styles.join_community} href=''>
							Join Community
						</a>
					</div>
					<div className={styles.right_bar_inner_a}>
						<a href=''>
							<Image width={16} height={16} src={topCommunityIcon} alt='top_community' /> Figma Community
						</a>{' '}
						<br />
						<a className={styles.join_community} href=''>
							Join Community
						</a>
					</div>
					<a className={styles.btn_see_all_communities}>See All Communities</a>
				</div>
			</div>

			{/* Third section  */}
			<div className={styles.right_sidebar_must_read}>
				<div className={styles.must_read_inner}>
					<h4>
						<Image width={12} height={12} src={startIcon} alt='start_icon' />Must Read
					</h4>
					<ul className={styles.post_of_moment}>
						<li>
							<a href=''>Lorem ipsum dolor sit amet, consectetur adipisicing.</a>
						</li>
						<li>
							<a href=''>Lorem ipsum dolor sit amet, consectetur adipisicing.</a>
						</li>
					</ul>
				</div>
				<div className={styles.must_read_inner}>
					<h4>
						<Image width={12} height={12} src={quickLinksIcon} alt='start_icon' />Quick Links
					</h4>
					<ul className={styles.post_of_moment}>
						<li>
							<a href=''>Alemhelp source-code on GitHub</a>
						</li>
						<li>
							<a href=''>Golang best-practices</a>
						</li>
						<li>
							<a href=''>Alem.School dashboard</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RightSideBar;
