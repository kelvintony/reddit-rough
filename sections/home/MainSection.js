import Image from 'next/image';
import styles from './MainSection.module.css';
import moment from 'moment'

import trendingIcon from '../../assets/home-page/trending-icon.svg';
import newIcon from '../../assets/home-page/new-icon.svg';
import userIcon from '../../assets/home-page/user-icon.svg';
import futureMoreVertical from '../../assets/home-page/futureMoreVertical-icon.svg';
import numberOfViewsIcon from '../../assets/home-page/numberOfViewsIcon.svg';
import likeIcon from '../../assets/home-page/like-icon.svg';
import dislike from '../../assets/home-page/dislike-icon.svg';
import shareIcon from '../../assets/home-page/share-icon.svg';

const MainSection = ({ getPost}) => {
	console.log('from component', getPost);

	const cutText = (str) => {
		if (str.length > 45) {
		  str = str.substring(0, 150) + " ...";
		}
		return str;
	  };
	
	function replaceWithBr(value) {
		return value.replace(/\n/g, "<br />")
	  }

	function replaceWithBr2(value) {
		let str = value;
		let result = str.split("\n"); 
		return result.map((i, key) => <p key={key}>{i + "\n"}</p>);
	  }

	return (
		<div className={styles.rigtbar_section_a}>
			<button className={styles.btn_rightbar_trending}>
				<Image width={12} height={12} src={trendingIcon} alt='trending_icon' />
				Trending
			</button>
			<button className={styles.btn_rightbar_new}>
				<Image width={10} height={10} src={newIcon} alt='start_icon' />New
			</button>
			
			{getPost?.map((post) => {
				return (
					<div key={post?._id} className={styles.post_card}>
						<div className={styles.container_a}>
							{/* <Image width={40} height={40} src={userIcon} alt='user_pix' /> */}
							<div className={styles.profile__image}>{post?.user?.username?.charAt(0).toUpperCase()}</div>
							<div className={styles.inner_a}>
								<p>{post?.user?.username}</p>
								<p>{moment(post?.createdAt).fromNow()}</p>
							</div>
							<a href=''>
								<Image width={24} height={24} src={futureMoreVertical} alt='feature_pix' />
							</a>
						</div>
						<h3>{post?.title}</h3>
				
						{replaceWithBr2(cutText(post?.content))}
						{/* {replaceWithBr2(post.content)} */}
						{/* <div dangerouslySetInnerHTML={{__html: replaceWithBr(post?.content)}}/> */}
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
									<Image src={likeIcon} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={dislike} alt='views_pix' />125
								</a>
								<a href=''>
									<Image src={shareIcon} alt='views_pix' />155
								</a>
							</div>
						</div>
					</div>
				);
			})}

			<div className={styles.post_card}>
				<div className={styles.container_a}>
					<Image width={40} height={40} src={userIcon} alt='user_pix' />
					<div className={styles.inner_a}>
						<p>Golanginya</p>
						<p>5 min ago</p>
					</div>
					<a href=''>
						<Image width={24} height={24} src={futureMoreVertical} alt='feature_pix' />
					</a>
				</div>
				<h3>How to patch KDE on FreeBSD? How to patch KDE on FreeBSD? FreeBSD?</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla</p>
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
							<Image src={likeIcon} alt='views_pix' />125
						</a>
						<a href=''>
							<Image src={dislike} alt='views_pix' />125
						</a>
						<a href=''>
							<Image src={shareIcon} alt='views_pix' />155
						</a>
					</div>
				</div>
			</div> 
		</div>
	);
};

export default MainSection;
