import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { LikeStatus, Post, PostsList, SaveStatus } from 'src/@types';
import Posts, { PostsTypes } from 'src/components/Posts/Posts';
import { setLikeStatus, setSavedStatus, setSelectedPost, setSelectedPostModalOpened } from 'src/redux/reducers/postSlice';
import { setSelectedImage, setSelectedImageModalOpened } from 'src/redux/reducers/imageSlice';

import styles from './CardsList.module.scss'
import Loader from '../Loader';

type CardsListProps = {
    cardsList: PostsList,

}


const CardsList: FC<CardsListProps> = ({ cardsList }) => {

    const dispatch = useDispatch()

    const onOpenClick = (cardsList: string) => () => {
        dispatch(setSelectedImageModalOpened(true))
        dispatch(setSelectedImage(cardsList))

    }

    const onMoreClick = (post: Post) => () => {

        dispatch(setSelectedPostModalOpened(true))
        dispatch(setSelectedPost(post))

    }

    const onStatusClick = (card: Post) => (status: LikeStatus) => {

        dispatch(setLikeStatus({ card, status }))


    }
    const onSavedStatus = (card: Post) => (status: SaveStatus) => {

        dispatch(setSavedStatus({ card, status }))


    }

    return cardsList.length ? (
        <div className={styles.cardListcontainer}>
            <div className={styles.cardListwrap}>

                <Posts
                    type={PostsTypes.Large}
                    {...cardsList[0]}
                    onMoreClick={onMoreClick(cardsList[0])}
                    onOpenClick={onOpenClick(cardsList[0].image)}
                    onStatusClick={onStatusClick(cardsList[0])}
                    onSavedClick={onSavedStatus(cardsList[0])}
                />
                <div className={styles.medium}>
                    {cardsList.map((el, idx) => {
                        if (idx >= 1 && idx <= 4) {
                            return <Posts key={el.id}
                                type={PostsTypes.Medium}
                                {...el}
                                onMoreClick={onMoreClick(el)}
                                onOpenClick={onOpenClick(el.image)}
                                onStatusClick={onStatusClick(el)}
                                onSavedClick={onSavedStatus(el)}

                            />
                        }
                    })}
                </div>
            </div>
            <div className={styles.Small}>
                {cardsList.map((el, idx) => {
                    if (idx >= 5 && idx <= 10) {
                        return <Posts key={el.id}
                            type={PostsTypes.Small}
                            {...el}
                            onMoreClick={onMoreClick(el)}
                            onOpenClick={onOpenClick(el.image)}
                            onStatusClick={onStatusClick(el)}
                            onSavedClick={onSavedStatus(el)}

                        />
                    }
                })}
            </div>
        </div>

    )
        : <Loader />
}

export default CardsList;