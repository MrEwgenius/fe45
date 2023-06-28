import React, { FC } from 'react';
import styles from './Posts.module.scss'
import LikeIcons from '../../assets/icons/LikeIcons';
import DislikeIcon from '../../assets/icons/DislikeIcons';
import Bookmark from '../../assets/icons/Bookmark';
import MoreHorizontal from '../../assets/icons/MoreHorizontal';
import classNames from 'classnames';

export enum PostsTypes {
    Large = 'large',
    Medium = 'medium',
    Small = 'small',

}
type PostsProps = {
<<<<<<< HEAD
    type: PostsTypes,
    id?: number,
=======
    id: PostsTypes,
>>>>>>> b09487edbd8b32b3973154b9820b92f244fad90e
    image?: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title: string,
    author?: number,
}



const Posts: FC<PostsProps> = ({
<<<<<<< HEAD
    type,
=======
>>>>>>> b09487edbd8b32b3973154b9820b92f244fad90e
    title,
    id,
    date,
    text,
    image,
}) => {

<<<<<<< HEAD
    const postsStyle = styles[type]
=======
    const postsStyle = styles[id]
>>>>>>> b09487edbd8b32b3973154b9820b92f244fad90e



    return (
        <div className={classNames(postsStyle)}>
            <div className={styles.postWrap}>
                <div className={styles.postContainer}>
                    <div className={styles.postDate}>{date}</div>
                    <div className={styles.postTitle}>{title}</div>
<<<<<<< HEAD
                    {type === PostsTypes.Large && (
=======
                    {id === PostsTypes.Large && (
>>>>>>> b09487edbd8b32b3973154b9820b92f244fad90e
                        <div className={styles.postText}>{text}</div>
                    )}
                </div>
                <img className={styles.postImg} src={image} alt="image" />

            </div>
            <div className={styles.iconContainerWrap}>
                <div className={styles.likeDislikeContainer}>
                    <LikeIcons />
                    <DislikeIcon />
                </div>
                <div className={styles.bookmarkMoreHorizontalContainer}>
                    <Bookmark />
                    <MoreHorizontal />
                </div>
            </div>
        </div>
    );
}

export default Posts;