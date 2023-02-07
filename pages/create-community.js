import React from 'react';
import Image from 'next/image';
import styles from '../styles/CreateCommunity.module.css';
import cancelIcon from '../assets/single_community/cancel_icon.svg';

const CreateCommunity = () => {
	return (
		<div className={styles.community_container}>
			<div className={styles.container}>
				<div className={styles.inner_a}>
					<p>Create a Community</p>
					<button>
						<Image src={cancelIcon} alt='cancel_pix' />
					</button>
				</div>
				<hr className={styles.comuunity_line} />
				<div className={styles.select_interest}>
					<p>Select Interest</p>
					<select name={styles.interest} id=''>
						<option value='design'>Design</option>
						<option value='javascript'>Javascript</option>
						<option value='bitcoin'>Bitcoin</option>
					</select>
				</div>

				<div className={styles.community_name}>
					<p>Name</p>
					<p> Community name including capitalization cannot be changed</p>
					<input className={styles.txt_community} type='text' placeholder='enter community name' />
					<p> 21 Characters remaining</p>
				</div>

				<div className={styles.radio_communityType}>
					<p>Community Type</p>
					<input type='radio' id='radioPublic' name='communityType' value='public' checked />
					<label for='radioPublic'>
						Public,{' '}
						<span className={styles.radion_inner}>
							Anyone can view, post, and comment to this community
						</span>
					</label>

					<input type='radio' id='radioRestricted' name='communityType' value='restricted' />
					<label for='radioRestricted'>
						Restricted,{' '}
						<span className={styles.radion_inner}>
							Anyone can view, post, and comment to this community
						</span>
					</label>

					<input type='radio' id='radioPrivate' name='communityType' value='private' />
					<label for='radioPrivate'>
						private,{' '}
						<span className={styles.radion_inner}>
							Anyone can view, post, and comment to this community
						</span>
					</label>
				</div>

				<div className={styles.upload_container}>
					<p>Upload cover image</p>
					<input className='custom-file-input' type='file' name='uploadFile' id='uploadFile' />
				</div>

				<div className={styles.community_buttons}>
					<button className={styles.btn_cancel}>Cancel</button>
					<button className={styles.btn_create}>Create Community</button>
				</div>
			</div>

			{/* this section is the section when the wants to create post after creating community  */}
			{/* <div className={styles.continue_container}>
				<div className={styles.inner_}>
					<p>Create your first post</p>
					<button>
						<Image src={cancelIcon} alt='cancel_pix' />
					</button>
				</div>
				<p className={styles.continue_text}>
					Lorem ipsum dolor sit amet consectetur. Amet eget sed porttitor nec morbi adipiscing consequat
					gravida gravida. Nunc rhoncus porta quisque nulla sit nullam. Libero tellus et elit molestie morbi
				</p>
				<div className={styles.community_buttons}>
					<button className={styles.btn_cancel}>Continue</button>
					<button className={styles.btn_create}>Create a post</button>
				</div>
			</div> */}
		</div>
	);
};

export default CreateCommunity;
