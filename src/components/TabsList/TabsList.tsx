<<<<<<< HEAD
import React, { FC } from "react";

import Tab from "./Tab";
import { TabsListType, TabsTypes } from "../../@types";
import styles from "./TabsList.module.scss";

type TabsListProps = {
  tabsList: TabsListType;
  activeTab: TabsTypes;
  onTabClick: (tab: TabsTypes) => () => void;
};

const TabsList: FC<TabsListProps> = ({ tabsList, activeTab, onTabClick }) => {
  return (
    <div className={styles.tabsContainer}>
      {tabsList.map(({ key, title, disabled }) => (
        <Tab
          key={key}
          title={title}
          onClick={onTabClick(key)} //() => (tab) => setTab(tab)
          active={activeTab === key}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default TabsList;
=======
import React from 'react';
import styles from './TabsList.module.scss'
import Tabs, { TabsTypes } from '../Tabs/Tabs';

const TabsList = () => {
    return (
        <div>
            <div className={styles.tabsContainer}>
                <Tabs
                    type={TabsTypes.All}
                    title={'All'}
                    active
                    onClick={() => { alert('All') }}
                />
                <Tabs onClick={() => { }}
                    type={TabsTypes.MyFavorite}
                    title={'My favorites'}
                />

                <Tabs onClick={() => { }}
                    type={TabsTypes.Popular}
                    title={'Popular'}
                />
            </div>
            <div className={styles.tabsContainer}>
                <Tabs onClick={() => { }}
                    type={TabsTypes.All}
                    title={'All'}
                    active
                />

                <Tabs onClick={() => { }}
                    type={TabsTypes.MyFavorite}
                    title={'My favorites'}
                />

                <Tabs onClick={() => { }}
                    active
                    type={TabsTypes.Popular}
                    title={'Popular'}
                />
            </div>
            <div className={styles.tabsContainer}>
                <Tabs onClick={() => { }}
                    type={TabsTypes.All}
                    title={'All'}
                    active
                />

                <Tabs onClick={() => { }}
                    disabled
                    type={TabsTypes.MyFavorite}
                    title={'My favorites'}
                />

                <Tabs onClick={() => { }}
                    type={TabsTypes.Popular}
                    title={'Popular'}
                />
            </div>

        </div>
    )
}

export default TabsList
>>>>>>> b09487edbd8b32b3973154b9820b92f244fad90e
