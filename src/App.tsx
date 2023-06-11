import React, { useState } from 'react';
import Button, { ButtonTypes } from './components/Button';
import Title from './components/Title';
import TabsList from './components/TabsList';
import Input from "./components/Input";
import Username from "./components/Username/Username";
import { DislikeIcon } from './assets/icons/DislikeIcon';
import { LikeIcons } from './assets/icons/LikeIcon';
import { Bookmark } from './assets/icons/Bookmark';
import { MoreHorizontal } from './assets/icons/MoreHorizontal';
import Posts, { PostsTypes } from './components/Posts/Posts';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import CardsList from './components/CardsList/CardsList';
import Success from './pages/Success/Success';
import SelectedPost from './pages/SelectedPost/SelectedPost';
import Home from './pages/Home/Home';
import { ThemeProvider, useThemeContext } from './context/Theme';
import { TabsTypes, Theme } from './@types';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import Tabs from './components/Tabs/Tabs';
import Tab from './components/TabsList/Tab/Tab';
import { title } from 'process';
import RegistrationConfirmation from './pages/RegistrationConfirmation/RegistrationConfirmation';
import Router from './pages/Router';


const App = () => {
    const [themeValue, setThemeValue] = useState<Theme>(Theme.Light);

    const [activeTab, setActiveTab] = useState(TabsTypes.All)

    const onChangeTheme = (value: Theme) => () => {
        setThemeValue(value);
    };


    const tabList = [
        { key: TabsTypes.All, title: 'Это Титульник', disabled: false },
        { key: TabsTypes.MyFavorite, title: 'Это MyFavorite', disabled: false },
        { key: TabsTypes.Popular, title: 'Это Popular', disabled: false },
    ]

    const onTabClick = (tab: TabsTypes) => {
        return () => setActiveTab(tab)
    }

    return (

        <div >
            <ThemeProvider themeValue={themeValue} onChangeTheme={onChangeTheme}>
                {/* <SignUp />
                <SignIn /> */}
                {/* <ThemeSwitcher /> */}
                {/* <Posts
                    type={PostsTypes.Large}
                    title='Ghbdtn'
                    text='adhawohdi a wjdlawdl adlawhdl awldawldhadl;a wlaawdj'
                    date='10.213.32'
                />
                <Posts
                    type={PostsTypes.Medium}
                    title='Ghbdtn'
                    text='adhawohdi a wjdlawdl adlawhdl awldawldhadl;a wlaawdj'
                    date='10.213.32'
                />
                <Posts
                    type={PostsTypes.Small}
                    title='Ghbdtn'
                    text='adhawohdi a wjdlawdl adlawhdl awldawldhadl;a wlaawdj'
                    date='10.213.32'
                /> */}
                {/* <Success /> */}
                {/* <SelectedPost
                title='тут титульный'
                description='Nen ,eltn jxtym vyjuj ntrcnf yj jy d jcyjdyjv ,eltn ,st'
                 /> */}

                {/* <Username username='Bolynskii Ewgenii'/> */}

                {/* <Button
                    type={ButtonTypes.Secondary}
                    title={'приветствую'}
                    onClick={() => {
                    }}
                /> */}
                {/* <TabsList
                    tabsList={tabList}
                    activeTab={activeTab}
                    onTabClick={onTabClick}
                />
                <RegistrationConfirmation /> */}


                <Router />
            </ThemeProvider>



        </div>
    );
}

export default App;
