import React, { FC, ReactElement } from 'react';

import classNames from 'classnames';
import { useThemeContext } from 'src/context/Theme';
import { Theme } from 'src/@types';

import styles from './Tabs.module.scss'



export enum TabsTypes {
    All = 'all',
    MyPosts = 'myPosts',
    Popular = 'popular',
}

type TabsProps = {
    type: TabsTypes,
    title: string | ReactElement,
    onClick?: () => void,
    disabled?: boolean,
    active?: boolean,


}

const Tabs: FC<TabsProps> = ({
    type,
    title,
    onClick,
    disabled,
    active,
}) => {
    const { themeValue } = useThemeContext();
    const tabsStyle = styles[type]
    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={classNames(tabsStyle, {
                [styles.dark]: themeValue === Theme.Dark,
                [styles.active]: active,
                [styles.disabled]: disabled
            })}
        >
            {title}
        </div>)

}
export default Tabs
