import React, { FC, ReactElement } from 'react';
import styles from './Tabs.module.scss'
import classNames from 'classnames';

export enum TabsTypes {
    All = 'all',
    MyFavorite = 'myfavorite',
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
    const tabsStyle = styles[type]
    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={classNames(tabsStyle, {
                [styles.active]: active,
                [styles.disabled]: disabled
            })}
        >
            {title}
        </div>)

}
export default Tabs
