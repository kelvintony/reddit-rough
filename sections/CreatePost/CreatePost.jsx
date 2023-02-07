import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CreatePost.module.css';
import addImageIcon from '../../assets/addImage_icon.svg';
import sendPostIcon from '../../assets/sendPost_icon.svg';

const CreatePost = () => {
	const [ postData, setPostData ] = useState({
		title: '',
		content: '',
		community: '',
		image: ''
	});

	const handleSubmit = () => {
		const { title, content, community } = postData;
		console.log('postData');
	};

	return (
		<div className={styles.rigtbar_section_a}>
			<div className={styles.container_a}>
				<h3>New Post</h3>
				<div className={styles.select_interest}>
					<p>Select community</p>
					<select
						name='interest'
						id=''
						onChange={(e) => setPostData({ ...postData, content: e.target.value })}
					>
						<option value='design'>lorem Design</option>
						<option value='javascript'>lorem Javascript</option>
						<option value='bitcoin'>lorem Bitcoin</option>
					</select>
				</div>

				<div className={styles.interest_name}>
					<p>Post title</p>
					<input
						className={styles.txt_community}
						type='text'
						placeholder='enter post title'
						onChange={(e) => setPostData({ ...postData, title: e.target.value })}
					/>
				</div>

				<div className={styles.interest_name}>
					<p>Content</p>
					<textarea
						placeholder='enter content'
						className={styles.txt_post}
						name='enter_content'
						onChange={(e) => setPostData({ ...postData, content: e.target.value })}
					/>
				</div>

				<div className={styles.interest_buttons}>
					{/* <button className={`${styles.btn_image} ${styles.btn_create}`}>
						<Image src={addImageIcon} alt='create_pix' /> Add Image
					</button> */}
					<input
						style={{ backgroundColor: 'unset', color: 'black' }}
						type='file'
						className={`${styles.btn_image} ${styles.btn_create}`}
						placeholder='choose file'
					/>
					<div className={styles.interet_btnInner}>
						<button className={`${styles.btn_draft} ${styles.btn_create}`}>Save as draft</button>
						<button onSubmit={handleSubmit} className={`${styles.btn_image} ${styles.btn_create}`}>
							<Image src={sendPostIcon} alt='create_pix' />Post
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatePost;
