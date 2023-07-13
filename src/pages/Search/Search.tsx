import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PostSelectors, getSearchedPosts } from 'src/redux/reducers/postSlice';
import Title from 'src/components/Title/Title';
import Posts, { PostsTypes } from 'src/components/Posts/Posts';
import { useCardActions } from 'src/hooks';
import EmptyState from 'src/components/EmptyState/EmptyState';

import { RoutesList } from '../Router';
import styles from './Search.module.scss'


const Search = () => {

    const { search } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const searchedPosts = useSelector(PostSelectors.getSearchedPosts)
    const { onStatusClick, onSavedStatus, onMoreClick, onOpenClick } = useCardActions()

    useEffect(() => {
        if (!search) {
            navigate(RoutesList.Home)
        } else {
            dispatch(getSearchedPosts(search))
        }
    }, [dispatch, navigate, search])

    return (
        <div>
            <Title title={`Search results: "${search}"`} />
            <div className={styles.container}>
                {searchedPosts.length ? <> {searchedPosts.map((post) => {
                    return (
                        <Posts
                            key={post.id}
                            type={PostsTypes.Search}
                            onStatusClick={onStatusClick(post)}
                            onSavedClick={onSavedStatus(post)}
                            onOpenClick={onOpenClick(post.image)}
                            onMoreClick={onMoreClick(post)}
                            {...post}
                        />
                    )
                })}       </> : <EmptyState
                    title={'Nothing was found...'}
                    description={'Try another search request'}
                />}
            </div>
        </div>
    );
}

export default Search;