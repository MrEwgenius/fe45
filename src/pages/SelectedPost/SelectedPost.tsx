import React, { FC } from 'react';
import styles from './SelectedPost.module.scss'
import Title from '../../components/Title/Title';
import LikeIcons from '../../assets/icons/LikeIcons/LikeIcon';
import DislikeIcon from '../../assets/icons/DislikeIcons/DislikeIcon';
import Bookmark from '../../assets/icons/Bookmark/Bookmark';

type SelectedPostProps = {
    title?: string,
    image?: string,
    description?: string,
}



const SelectedPost: FC<SelectedPostProps> = ({

    title,
    image,
    description,

}) => {



    return (
        <div className={styles.container} >
            <div className={styles.breadcrumbs}>Home <span className={styles.numberPost}>| Post 14278</span></div>
            <Title
                className={styles.title}
                title={title}
            />
            <img className={styles.image} src={image} alt="image" />
            <div className={styles.description} >{description}</div>

            <div >
                <div className={styles.footermenuFlex}>
                    <div >
                        <div className={styles.likeIcons}><LikeIcons /></div>
                        <div className={styles.likeIcons}><DislikeIcon /></div>
                    </div>
                    <div className={styles.addToFavorites}><Bookmark />Add to favorites</div>
                </div>
            </div >
        </div>
    );
}

export default SelectedPost;