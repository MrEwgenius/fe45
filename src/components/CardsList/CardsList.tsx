import React, { FC } from 'react';

import { Post, PostsList } from 'src/@types';
import Posts, { PostsTypes } from 'src/components/Posts/Posts';

import styles from './CardsList.module.scss'
import { useDispatch } from 'react-redux';
import { setSelectedPost, setSelectedPostModalOpened } from 'src/redux/reducers/postSlice';
import { setSelectedImage, setSelectedImageModalOpened } from 'src/redux/reducers/imageSlice';

type CardsListProps = {
    cardsList: PostsList,

}


const CardsList: FC<CardsListProps> = ({ cardsList }) => {

    const dispatch = useDispatch()

    const onOpenClick = (cardsList: string ) => () => {
        dispatch(setSelectedImageModalOpened(true))
        dispatch(setSelectedImage(cardsList))

    }

    const onMoreClick = (post: Post) => () => {

        dispatch(setSelectedPostModalOpened(true))
        dispatch(setSelectedPost(post))

    }



    return cardsList.length ? (
        <div className={styles.cardListcontainer}>
            <div className={styles.cardListwrap}>

                <Posts
                    type={PostsTypes.Large}

                    {...cardsList[0]}
                    onMoreClick={onMoreClick(cardsList[0])}
                    onOpenClick={onOpenClick(cardsList[0].image)}
                />
                <div className={styles.medium}>
                    {cardsList.map((el, idx) => {
                        if (idx >= 1 && idx <= 4) {
                            return <Posts key={el.id}
                                type={PostsTypes.Medium}
                                
                                {...el}
                                onMoreClick={onMoreClick(el)}
                                onOpenClick={onOpenClick(el.image)}
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
                        />
                    }
                })}
            </div>
        </div>

    )
        : null
}

export default CardsList;