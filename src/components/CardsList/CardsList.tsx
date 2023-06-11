import React, { FC } from 'react';

import { PostsList } from 'src/@types';
import Posts, { PostsTypes } from 'src/components/Posts/Posts';

import styles from './CardsList.module.scss'

type CardsListProps = {
    cardsList: PostsList,

}


const CardsList: FC<CardsListProps> = ({ cardsList }) => {



    return cardsList.length ? (
        <div className={styles.cardListcontainer}>
            <div className={styles.cardListwrap}>

                <Posts
                    type={PostsTypes.Large}
                    {...cardsList[0]}
                />
                <div className={styles.medium}>
                    {cardsList.map((el, idx) => {
                        if (idx >= 1 && idx <= 4) {
                            return <Posts key={el.id}
                                type={PostsTypes.Medium}
                                {...el}
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
                        />
                    }
                })}
            </div>
        </div>

    )
        : null
}

export default CardsList;