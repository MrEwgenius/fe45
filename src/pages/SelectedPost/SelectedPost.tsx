import React, { FC } from 'react';
import styles from './SelectedPost.module.scss'
import Title from 'src/components/Title/Title';
import { Bookmark, DislikeIcon, LikeIcons } from 'src/assets/icons';
import { useThemeContext } from 'src/context/Theme';
import classNames from 'classnames';
import { Theme } from 'src/@types';

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
    const { themeValue } = useThemeContext();


    return (
        <div className={classNames(styles.container, { [styles.darkContainer]: themeValue === Theme.Dark })} >
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