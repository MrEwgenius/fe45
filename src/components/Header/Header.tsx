import React, { useState, useMemo } from 'react';
import { Outlet, useNavigate, NavLink } from 'react-router-dom'
import classNames from 'classnames';

import Button, { ButtonTypes } from 'src/components/Button';
import { CloseIcon, MenuIcon, UserIcon } from 'src/assets/icons';
import { RoutesList } from 'src/pages/Router';
import { useThemeContext } from 'src/context/Theme';
import { Theme } from 'src/@types';
import { SearchIcon } from 'src/assets/icons/SearchIcon';

import styles from './Header.module.scss'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import Username from '../Username/Username';
import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSelectors, logoutUser } from 'src/redux/reducers/authSlice';
const Header = () => {
    const { themeValue } = useThemeContext();

    const isLoggedIn = useSelector(AuthSelectors.getLoggedIn)

    // const isSearchOn = true

    const [isSearch, setSearch] = useState(false)

    const [isOpened, setOpened] = useState(false)

    const [inpValue, setinpValue] = useState('')
    const handleMenuOpened = () => {
        setOpened(!isOpened)
    }

    const handleSearchOpened = () => {
        setSearch(!isSearch)
    }

    const userInfo = useSelector(AuthSelectors.getUserInfo)

    const navigate = useNavigate()
    const dispatsh = useDispatch()

    const navLinks = useMemo(() => [
        { path: RoutesList.Home, title: 'Home' },
        ...(isLoggedIn ? [{ path: RoutesList.SignIn, title: 'Add Post' }] : []),
    ],
        [isLoggedIn]
    );

    const onLiginButtonClick = () => {
        navigate(RoutesList.SignIn)
    }

    const onLogout = () => {
        dispatsh(logoutUser())
    }

    return (
        <div className={classNames(styles.container, { [styles.darkContainer]: themeValue === Theme.Dark })}>
            <div className={styles.header}>
                <Button
                    type={ButtonTypes.Primary}
                    title={isOpened ? <CloseIcon /> : <MenuIcon />}
                    onClick={handleMenuOpened}
                    className={styles.burgerMenuButton}
                />
                {isSearch ?
                    <div className={styles.inputContainer}>
                        <Input className={styles.inputSearch}
                            placeholder='Search...'
                            onChange={setinpValue}
                            value={inpValue}
                        />
                        <div><Button
                            type={ButtonTypes.Primary}
                            title={<CloseIcon />}
                            onClick={handleSearchOpened}
                            className={styles.closedSearch}
                        /></div>
                    </div>
                    : <div></div>
                }
                <div className={styles.buttonSearchUserRight}>
                    <Button
                        type={ButtonTypes.Primary}
                        title={<SearchIcon />}
                        onClick={handleSearchOpened}
                        className={styles.searchButton}
                    />
                    {isLoggedIn && userInfo ?
                        <Username username={userInfo.username} className={styles.userNameContainer} />
                        :
                        <Button
                            type={ButtonTypes.Primary}
                            title={<UserIcon />}
                            onClick={onLiginButtonClick}
                            className={styles.userButton}
                        />
                        // {isLoggedIn && <Username username={'Yauheni'} />}
                    }
                </div>


            </div>
            <div className={styles.infoContainer}>
                <Outlet />

                <div className={styles.footer}>
                    <div>©2022 Blogfolio</div>
                    <div>All rights reserved</div>
                </div>
            </div>
            {isOpened && <div className={styles.menuContainer}>
                <div>
                    {isLoggedIn && userInfo && < Username username={userInfo.username} />}
                    {navLinks.map(link =>
                        <NavLink
                            to={link.path}
                            key={link.path}
                            className={styles.navLinkButton}
                        >
                            {link.title}
                        </NavLink>
                    )}
                </div>
                <div>
                    <ThemeSwitcher />
                    <Button
                        type={ButtonTypes.Secondary}
                        title={isLoggedIn ? 'Log Out' : 'Sign In'}
                        onClick={isLoggedIn ? onLogout : onLiginButtonClick}
                        className={styles.authButton}
                    />
                </div>
            </div>}
        </div>
    );
}

export default Header;