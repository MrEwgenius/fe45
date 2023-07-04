import React, { FC, useEffect } from 'react';
import styles from './SelectedPost.module.scss'
import Title from 'src/components/Title/Title';
import { Bookmark, DislikeIcon, LikeIcons } from 'src/assets/icons';
import { useThemeContext } from 'src/context/Theme';
import classNames from 'classnames';
import { Theme } from 'src/@types';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PostSelectors, getSinglePost } from 'src/redux/reducers/postSlice';
import { RoutesList } from '../Router';

// type SelectedPostProps = {
//     title?: string,
//     image?: string,
//     description?: string,
// }



const SelectedPost = ({

    // title,
    // image,
    // description,

}) => {

    const { themeValue } = useThemeContext();
    const singlePost = useSelector(PostSelectors.getSinglePost)

    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(getSinglePost(id))
        }
    }, [id])
    const navigate = useNavigate()
    const onHomeClick = () => {
        navigate(RoutesList.Home)
    }


    return singlePost ? (
        <div className={classNames(styles.container, { [styles.darkContainer]: themeValue === Theme.Dark })} >
            <div onClick={onHomeClick} className={styles.breadcrumbs}>Home <span className={styles.numberPost}>| Post {singlePost.id}</span></div>
            <Title
                className={styles.title}
                title={singlePost.title}
            />
            <img className={styles.image} src={singlePost.image} alt="image" />
            <div className={styles.description} >{singlePost.text}</div>

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
    ) : null
}

export default SelectedPost;