import React, { FC } from 'react';

import { PostsList, } from 'src/@types';
import Posts, { PostsTypes } from 'src/components/Posts/Posts';

import styles from './CardsList.module.scss'
import Loader from '../Loader';
import { useCardActions } from 'src/hooks';

type CardsListProps = {
    cardsList: PostsList

}


const CardsList: FC<CardsListProps> = ({ cardsList }) => {

    const { onStatusClick: onClickStatus, onSavedStatus, onMoreClick, onOpenClick } = useCardActions()



    return cardsList.length ? (
        <div className={styles.cardListcontainer}>
            <div className={styles.cardListwrap}>

                <Posts
                    type={PostsTypes.Large}
                    {...cardsList[0]}
                    onMoreClick={onMoreClick(cardsList[0])}
                    onOpenClick={onOpenClick(cardsList[0].image)}
                    onStatusClick={onClickStatus(cardsList[0])}
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
                                onStatusClick={onClickStatus(el)}
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
                            onStatusClick={onClickStatus(el)}
                            onSavedClick={onSavedStatus(el)}

                        />
                    }
                })}
            </div>
        </div>

    ) : <Loader />
}

export default CardsList;