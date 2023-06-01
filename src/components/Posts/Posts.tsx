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
    type: PostsTypes,
    id?: number,
    image?: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title: string,
    author?: number,
}



const Posts: FC<PostsProps> = ({
    type,
    title,
    id,
    date,
    text,
    image,
}) => {

    const postsStyle = styles[type]



    return (
        <div className={classNames(postsStyle)}>
            <div className={styles.postWrap}>
                <div className={styles.postContainer}>
                    <div className={styles.postDate}>{date}</div>
                    <div className={styles.postTitle}>{title}</div>
                    {type === PostsTypes.Large && (
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