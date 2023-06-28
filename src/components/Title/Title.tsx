import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Title.module.scss'

type TitleProps = {
<<<<<<< HEAD
    title: any;
    onClick?: () => void;
    className?: any;

}

const Title: FC<TitleProps> = ({ title, className }) => {
    return (
        <div
            className={classNames(styles.title, className)}

=======
    title: string;
    onClick?: () => void;

}

const Title: FC<TitleProps> = ({ title }) => {
    return (
        <div
            className={styles.title}
>>>>>>> b09487edbd8b32b3973154b9820b92f244fad90e
        >
            {title}
        </div>
    );
}

export default Title;
