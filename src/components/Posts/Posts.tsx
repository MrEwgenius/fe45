import React, { FC } from 'react';
import styles from './Posts.module.scss'
import LikeIcons from '../../assets/icons/LikeIcons/LikeIcon';
import DislikeIcon from '../../assets/icons/DislikeIcons/DislikeIcon';
import Bookmark from '../../assets/icons/Bookmark/Bookmark';
import MoreHorizontal from '../../assets/icons/MoreHorizontal/MoreHorizontal';
import classNames from 'classnames';

export enum PostsTypes {
    Large = 'large',
    Medium = 'medium',
    Small = 'small',

}
type PostsProps = {
    id: PostsTypes,
    image?: string,
    text?: string,
    date?: string,
    lesson_num?: number,
    title: string,
    author?: number,
}



const Posts: FC<PostsProps> = ({ title, id, date, text, image }) => {

    const postsStyle = styles[id]



    return (
        <div>
            <div className={classNames(postsStyle)}>
                <div className={styles.headerPosts}>
                    <div>
                        <span>{date}</span>
                        <h1>{title}</h1>
                        <p>{text}</p>
                    </div>
                    <img src={image} alt="image" />

                </div>
                <div className={styles.footerPosts}>
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
        </div>
    );
}

export default Posts;