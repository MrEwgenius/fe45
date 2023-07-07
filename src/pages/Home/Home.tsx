import { useEffect, useMemo, useState } from "react";
import classNames from "classnames";

import Title from "src/components/Title";
import CardsList from "src/components/CardsList";
import { PostsList, TabsTypes, Theme } from "src/@types";
import TabsList from "src/components/TabsList";

import styles from "./Home.module.scss";
import { useThemeContext } from "src/context/Theme";
import SelectedPostModal from "./SelectedPostModal/SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal/SelectedImageModal";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, getPostList, setPostsList } from "src/redux/reducers/postSlice";
import { AuthSelectors } from "src/redux/reducers/authSlice";

const Home = () => {
    const [activeTab, setActiveTab] = useState(TabsTypes.All);

    const cardsList = useSelector(PostSelectors.getPostsList)


    const isLoggedIn = useSelector(AuthSelectors.getLoggedIn)
    const tabsList = useMemo(
        () => [
            { key: TabsTypes.All, title: "All Posts", disabled: false },
            { key: TabsTypes.Popular, title: "Popular Posts", disabled: false },
            {
                key: TabsTypes.MyPosts,
                title: "My Posts",
                disabled: !isLoggedIn,
            },
        ],
        [isLoggedIn]
    );

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostList())

        if (activeTab === TabsTypes.MyPosts) {
            console.log(1);
        // dispatch(getMyPosts())


        }else{
            console.log(2);
        // dispatch(getAllPosts())

        }

    }, [activeTab])

    const onTabClick = (tab: TabsTypes) => () => {
        setActiveTab(tab);
    };

    const { themeValue } = useThemeContext();

    return (
        <div className={classNames({
            [styles.darkContainer]: themeValue === Theme.Dark,
        })}>
            <Title title={"Blog"} className={styles.pageTitle} />
            <TabsList
                tabsList={tabsList}
                activeTab={activeTab}
                onTabClick={onTabClick}
            />
            <CardsList cardsList={cardsList} />
            <SelectedPostModal />
            <SelectedImageModal />
        </div >
    );
};

export default Home;
