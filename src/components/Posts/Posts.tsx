import React, { FC } from 'react';
import classNames from 'classnames';

import {
    LikeIcons, DislikeIcon,
    Bookmark,
    MoreHorizontal
} from 'src/assets/icons';
import { useThemeContext } from 'src/context/Theme';
import { Theme } from 'src/@types';

import styles from './Posts.module.scss'

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
    title?: string,
    author?: number,
    onMoreClick?: () => void,
    onOpenClick?: () => void,

}



const Posts: FC<PostsProps> = ({
    type,
    title,
    id,
    onMoreClick,
    onOpenClick,
    date,
    text,
    image,
}) => {

    const postsStyle = styles[type]


    const { themeValue } = useThemeContext()



    return (
        <div className={classNames(postsStyle, { [styles.darkContainer]: themeValue === Theme.Dark })}>
            <div className={styles.postWrap}>
                <div className={classNames(styles.postContainer, { [styles.darkContainer]: themeValue === Theme.Dark })}>
                    <div className={styles.postDate}>{date}</div>
                    <div className={styles.postTitle}>{title}</div>
                    {type === PostsTypes.Large && (
                        <div className={styles.postText}>{text}</div>
                    )}
                </div>
                <img onClick={onOpenClick} className={styles.postImg} src={image} alt="image" />

            </div>
             <div className={styles.iconContainerWrap}>
                <div className={styles.likeDislikeContainer}>
                    <LikeIcons />
                    <DislikeIcon />
                </div>
                <div className={styles.bookmarkMoreHorizontalContainer}>
                    <Bookmark />
                    {onMoreClick && <div onClick={onMoreClick}>
                        <MoreHorizontal />
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default Posts;