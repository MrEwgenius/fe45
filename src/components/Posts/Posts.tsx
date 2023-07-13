import React, { FC } from 'react';
import classNames from 'classnames';

import {
    LikeIcons, DislikeIcon,
    Bookmark,
    MoreHorizontal
} from 'src/assets/icons';
import { useThemeContext } from 'src/context/Theme';
import { LikeStatus, Post, SaveStatus, Theme } from 'src/@types';

import styles from './Posts.module.scss'
import { useSelector } from 'react-redux';
import { PostSelectors } from 'src/redux/reducers/postSlice';
import { useNavigate } from 'react-router-dom';

export enum PostsTypes {
    Large = 'large',
    Medium = 'medium',
    Small = 'small',
    Search = 'search',

}
interface PostsProps extends Post {
    type: PostsTypes,
    onMoreClick?: () => void,
    onOpenClick?: () => void,
    onStatusClick: (status: LikeStatus) => void,
    onSavedClick: (status: SaveStatus) => void,

}



const Posts: FC<PostsProps> = ({
    type,
    title,
    id,
    onMoreClick,
    onOpenClick,
    onStatusClick,
    onSavedClick,
    date,
    text,
    image,
}) => {

    const postsStyle = styles[type]

    const { themeValue } = useThemeContext()

    const likedPosts = useSelector(PostSelectors.getLikedPosts)
    const dislikedPosts = useSelector(PostSelectors.getDislikedPosts)

    const likeIndex = likedPosts.findIndex(item => item.id === id)
    const dislikeIndex = dislikedPosts.findIndex(item => item.id === id)

    const savedPosts = useSelector(PostSelectors.getSavedPosts)
    const saveIndex = savedPosts.findIndex(item => item.id === id)

    const d = 'M15 20C14.795 20 14.592 19.937 14.419 19.813L8 15.229L1.581 19.813C1.277 20.032 0.875 20.062 0.542 19.89C0.209 19.718 0 19.375 0 19V3C0 1.346 1.346 0 3 0H13C14.654 0 16 1.346 16 3V19C16 19.375 15.791 19.718 15.458 19.89C15.313 19.963 15.156 20 15 20Z'


    const navigate = useNavigate()
    const onTitleClick = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className={classNames(postsStyle, { [styles.darkContainer]: themeValue === Theme.Dark })}>
            <div className={styles.postWrap}>
                <div className={classNames(styles.postContainer, { [styles.darkContainer]: themeValue === Theme.Dark })}>
                    <div className={styles.postDate}>{date}</div>
                    <div onClick={onTitleClick} className={styles.postTitle}>{title}</div>
                    {type === PostsTypes.Large && (
                        <div className={styles.postText}>{text}</div>
                    )}
                </div>
                <img onClick={onOpenClick} className={styles.postImg} src={image} alt="image" />

            </div>
            <div className={styles.iconContainerWrap}>
                <div className={styles.likeDislikeContainer}>
                    <div className={styles.likecontainerWrap} onClick={() => onStatusClick(LikeStatus.Like)}>
                        <LikeIcons /> {likeIndex > -1 && <span className={classNames(styles.likeCount, { [styles.darkCount]: themeValue === Theme.Dark })}> 1</span>}
                    </div>
                    <div className={styles.likecontainerWrap} onClick={() => onStatusClick(LikeStatus.Dislike)}>
                        <DislikeIcon />{dislikeIndex > -1 && <span className={classNames(styles.dislikeCount, { [styles.darkCount]: themeValue === Theme.Dark })}>1</span>}
                    </div>
                </div>
                <div className={styles.bookmarkMoreHorizontalContainer}>
                    <div className={styles.bookmark} onClick={() => onSavedClick(SaveStatus.Saved)}>
                        {saveIndex === -1 ? <Bookmark /> : <Bookmark d={d} />}
                    </div>
                    {onMoreClick && <div onClick={onMoreClick}>
                        <MoreHorizontal />
                    </div>}
                </div>
            </div>
        </div >
    );
}

export default Posts;