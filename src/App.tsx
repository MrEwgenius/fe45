import React from 'react';
import Button, { ButtonTypes } from './components/Button';
import Title from './components/Title';
import Tabs, { TabsTypes } from './components/Tabs';
import styles from './components/Tabs/Tabs.module.scss'


const App = () => {
    return (
        <div >

            <Title title={'Blog'} />

            <Button
                disabled
                type={ButtonTypes.Primary}
                title={'Primary'}
                onClick={() => { alert('Primary') }} />

            <Button
                type={ButtonTypes.Secondary}
                title={'Secondary'}
                onClick={() => { }} />

            <Button type={ButtonTypes.Error} title={'Error'} onClick={() => { }} />


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
    );
}

export default App;
