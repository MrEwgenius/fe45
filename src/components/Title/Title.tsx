import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Title.module.scss'

type TitleProps = {
    title: string;
    onClick?: () => void;

}

const Title: FC<TitleProps> = ({ title }) => {
    return (
        <div
            className={styles.title}
        >
            {title}
        </div>
    );
}

export default Title;
