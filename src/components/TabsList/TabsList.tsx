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